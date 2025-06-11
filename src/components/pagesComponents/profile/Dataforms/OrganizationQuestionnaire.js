import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";
import { storage } from "@/lib/appwrite/appwrite";
import { updateOrgForm } from "@/lib/appwrite/org-from";
import withAuth from "@/lib/middlewares/withAuth";
import { ID } from "appwrite";
import React, { useReducer, useState } from "react";
import { MapPin, Mail, Globe, Users, Heart, FileText, Shield, Dog, Cat, Bird, Fish, Rabbit } from "lucide-react"


const initialState = {
  shelter_info: [
    "", // Shelter Name
    "", // Director First Name
    "", // Director Last Name
    "", // Title
    "" // Type of Organization
  ],
  physical_address: [
    "", // Address
    "", // City
    "", // Zip
    "", // Phone
    "" // Phone Ext
  ],
  mailing_address: [
    "", // Address
    "", // City
    "", // State
    "" // Zip
  ],
  adoption_ambassador: [
    "", // First Name
    "", // Last Name
    "", // Phone
    "", // Phone Ext
    "", // Email
    "", // Verify Email
  ],
  veterinarian_info: [
    "", // Vet Name
    "", // Vet Phone
    "" // Vet Phone Ext
  ],
  taxId: "", // Tax ID
  adoption_contract: "", // Adoption Contract File Id
  adopted: {
    Dogs: true,
    Cats: true,
    Horses: false,
    Reptiles: false,
    "Pocket Pals": true,
    Rabbits: true,
    "Farm Animals": false,
    Birds: true,
    Exotics: false,
    Fish: false,
    Ferrets: true
  },
  adoption_fees: [
    "", // Highest Fee
    "" // Lowest Fee
  ],
  current_animals: 23,
  animal_source: "",
  medical_adoption: [
    "", // Medical Care
    "", // Spay Policy
    "", // Sterilization
    "" // Has Contract
  ],
  mission: "",
  adoption_policies: "",
  adoption_process: "",
  adoption_link: "",
  online_presence: [
    "", // Website
    "", // Facebook
    "", // Instagram
    "" // Other Social
  ]
};



const orgReducer = (state, action) => {
  const { field, value, index } = action;

  // Handle checkbox checked state change for Mailing Address
  if (field === "checkboxChecked") {
    const newMailingAddress = value
      ? [...state.physical_address] // If checkbox is checked, use physical address
      : state.mailing_address; // If checkbox is unchecked, keep mailing address as is

    return {
      ...state,
      checkboxChecked: value,
      mailing_address: newMailingAddress, // Update mailing address based on checkbox
    };
  }

  // Handle checkbox checked state change for Adoption Ambassador
  if (field === "checkboxCheckedAmbassador") {
    // const newAdoptionAmbassador = value
    //   ? [...state.shelter_info] // If checkbox is checked, use shelter info
    //   : state.adoption_ambassador; // If checkbox is unchecked, keep adoption ambassador as is
    const newAdoptionAmbassador = [...state.adoption_ambassador];
    if (value) {
      // Use shelter_info for the adoption ambassador if checkbox is checked
      newAdoptionAmbassador[0] = state.shelter_info[1]; // First Name
      newAdoptionAmbassador[1] = state.shelter_info[2]; // Last Name
      // newAdoptionAmbassador[2] = state.shelter_info[2]; // Phone
      // newAdoptionAmbassador[3] = state.shelter_info[3]; // Phone Ext

      // Dynamically set the email field (assuming the email is based on the First Name)
      // You can change this to any logic or field if needed
      // newAdoptionAmbassador[4] = `${state.shelter_info[0].toLowerCase()}@example.com`; // Email

    } else {
      // If unchecked, retain the original adoption ambassador details
      newAdoptionAmbassador[0] = state.adoption_ambassador[0];
      newAdoptionAmbassador[1] = state.adoption_ambassador[1];
      newAdoptionAmbassador[2] = state.adoption_ambassador[2];
      newAdoptionAmbassador[3] = state.adoption_ambassador[3];
      newAdoptionAmbassador[4] = state.adoption_ambassador[4];
    }

    return {
      ...state,
      checkboxCheckedAmbassador: value,
      adoption_ambassador: newAdoptionAmbassador, // Update adoption ambassador based on checkbox
    };
  }

  // Handle changes for array fields like mailing_address or adoption_ambassador
  if (Array.isArray(state[field])) {
    const updatedArray = [...state[field]];
    updatedArray[index] = value;
    return { ...state, [field]: updatedArray };
  }

  // Handle regular field updates
  return { ...state, [field]: value };
};



const OrganizationQuestionnaire = ({ onSubmit }) => {
  const [formData, dispatch] = useReducer(orgReducer, initialState);
  const [formLoading, setFormLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { loading, user, setUser } = useUser();
  const [adoptionContractFile, setAdoptionContractFile] = useState(null);

  // /////////////////// DESIGN
  const [hideFromPublic, setHideFromPublic] = useState(false)
  const [sameAsAddress, setSameAsAddress] = useState(false)
  const [animalTypes, setAnimalTypes] = useState([])
  const [spayedNeutered, setSpayedNeutered] = useState("")
  const [adoptionContract, setAdoptionContract] = useState("")

  const handleAnimalTypeChange = (type, checked) => {
    if (checked) {
      setAnimalTypes([...animalTypes, type])
    } else {
      setAnimalTypes(animalTypes.filter((t) => t !== type))
    }
  }
  ///////////// DESIGN


  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  async function uploadFile(file) {
    try {
      let uploadedImage = await storage.createFile('6799fb94000edc47b27d', ID.unique(), file);
      return uploadedImage.$id;
    } catch (error) {
      console.error('File Upload Error:', error);
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);

      const file = adoptionContractFile; // Assuming this is set from your input
      let fileId = null;

      if (file) {
        fileId = await uploadFile(file);
      }

      console.log('got file id', fileId);



      const adoptedArray = [];

      Object.entries(formData.adopted).forEach(([animal, isAdopted]) => {
        if (isAdopted === true) {
          adoptedArray.push(animal);
        }
      });
      // Remove the checkbox state from the form data before passing it to the backend
      const { checkboxChecked, ...formDataWithoutCheckbox } = formData; // Destructure and remove checkboxChecked
      const { checkboxCheckedAmbassador, ...NewformDataWithoutCheckbox } = formDataWithoutCheckbox; // Destructure and remove checkboxChecked

      const updatedFormData = {
        ...NewformDataWithoutCheckbox,
        adopted: adoptedArray, // already present
        adoption_contract: fileId, // ensure it's passed
      };

      console.log('uploading', user);

      const updatedDoc = await updateOrgForm(user.$id, user.organizationData.$id, updatedFormData);
      setUser({ ...user, status: "Pending" });
      // const updatedDoc = await updateRecord(user.$id, user.more_info, updatedFormData);
      setShowToast(true);
      if (onSubmit) onSubmit(updatedDoc);
    } catch (error) {
      console.error("Error updating organization record:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    dispatch({ field: "checkboxChecked", value: !formData.checkboxChecked });
  };

  const handleAmbassaborCheckboxChange = () => {
    dispatch({ field: "checkboxCheckedAmbassador", value: !formData.checkboxCheckedAmbassador });
  };



  if (loading) return <h1 className="text-center text-xl font-bold">Loading...</h1>;
  if (!(user.status === "Rejected" || user.status === "Apply"))
    return <h1 className="text-center text-red-600 font-bold">New application can only be submitted after rejection.</h1>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shelter / Rescue Information</h1>
          <p className="text-gray-600">Help us connect pets with loving families</p>
          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-600 border border-red-200">
              Required fields are shown in red
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
              Info in green boxes will not be seen by public
            </span>
          </div>
        </div>

        <form className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Basic Information
              </h2>
              <p className="text-gray-600 mt-1">Tell us about your organization</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="hideFromPublic"
                  checked={hideFromPublic}
                  onChange={(e) => setHideFromPublic(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="hideFromPublic" className="text-sm text-gray-700">
                  Hide name from public
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="shelterName" className="block text-sm font-medium text-red-600">
                    General Shelter/Rescue Name *
                  </label>
                  <input
                    type="text"
                    id="shelterName"
                    placeholder="Enter organization name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="orgType" className="block text-sm font-medium text-red-600">
                    Type of Organization *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select type</option>
                    <option value="rescue">Rescue Group</option>
                    <option value="shelter">Animal Shelter</option>
                    <option value="sanctuary">Animal Sanctuary</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="directorName" className="block text-sm font-medium text-gray-700">
                    Director/Manager Name
                  </label>
                  <input
                    type="text"
                    id="directorName"
                    placeholder="Full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Job title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-red-600">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="contact@organization.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="verifyEmail" className="block text-sm font-medium text-red-600">
                    Verify Email *
                  </label>
                  <input
                    type="email"
                    id="verifyEmail"
                    placeholder="Confirm email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Hours (visible to public)
              </h2>
              <p className="text-gray-600 mt-1">
                Open and close hours; if you are not open on a day, please leave the fields blank
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                  <div key={day} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700">{day}</label>
                    </div>
                    <div className="md:col-span-1">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                        <option value="">Opening Time</option>
                        <option value="closed">Closed</option>
                        <option value="6:00">6:00 AM</option>
                        <option value="6:30">6:30 AM</option>
                        <option value="7:00">7:00 AM</option>
                        <option value="7:30">7:30 AM</option>
                        <option value="8:00">8:00 AM</option>
                        <option value="8:30">8:30 AM</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="9:30">9:30 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="15:30">3:30 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="16:30">4:30 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>
                    <div className="md:col-span-1 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">to</span>
                    </div>
                    <div className="md:col-span-1">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                        <option value="">Closing Time</option>
                        <option value="closed">Closed</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="15:30">3:30 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="16:30">4:30 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                        <option value="22:30">10:30 PM</option>
                        <option value="23:00">11:00 PM</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> These hours will be displayed publicly to help visitors know when they can visit
                  your facility. Leave both fields blank for days when you're closed.
                </p>
              </div>
            </div>
          </div>

          {/* Organization Address */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                Organization Address
              </h2>
              <p className="text-gray-600 mt-1">Physical location of your organization</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Public:</strong> Will be shown on map in the address | Check box to have map go to city center
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Street address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="ZIP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ext" className="block text-sm font-medium text-gray-700">
                    Ext
                  </label>
                  <input
                    type="text"
                    id="ext"
                    placeholder="Extension"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Mailing Address */}
          <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
            <div className="p-6 border-b border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                Mailing Address
              </h2>
              <p className="text-green-700 mt-1">Address for correspondence (not seen by public)</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsAddress"
                  checked={sameAsAddress}
                  onChange={(e) => setSameAsAddress(e.target.checked)}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="sameAsAddress" className="text-sm text-gray-700">
                  All info same as Address above
                </label>
              </div>

              {!sameAsAddress && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="mailingAddress" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="mailingAddress"
                      placeholder="Mailing address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mailingCity" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      id="mailingCity"
                      placeholder="City"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mailingZip" className="block text-sm font-medium text-gray-700">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      id="mailingZip"
                      placeholder="ZIP"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mailingState" className="block text-sm font-medium text-gray-700">
                      State/Country
                    </label>
                    <input
                      type="text"
                      id="mailingState"
                      placeholder="State/Country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Adoption Ambassador */}
          <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
            <div className="p-6 border-b border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Adoption Ambassador
              </h2>
              <p className="text-green-700 mt-1">The person who posts pets to the site for adopters to see</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 font-medium">All info same as "Main Shelter/Rescue Contact"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorFirst" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="ambassadorFirst"
                    placeholder="First name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorLast" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="ambassadorLast"
                    placeholder="Last name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorPhone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="ambassadorPhone"
                    placeholder="Phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorExt" className="block text-sm font-medium text-gray-700">
                    Phone Ext
                  </label>
                  <input
                    type="text"
                    id="ambassadorExt"
                    placeholder="Extension"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorEmail" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="ambassadorEmail"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorVerifyEmail" className="block text-sm font-medium text-gray-700">
                    Verify Email
                  </label>
                  <input
                    type="email"
                    id="ambassadorVerifyEmail"
                    placeholder="Confirm email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <span>Will be used by person to log in</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorEmail" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorVerifyEmail" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <span>Password must be at least 6 characters long, contain 1 capital, 1 lowercase, 1 number, and 1 special character</span>
              </div>


            </div>
          </div>

          {/* Veterinarian Information */}
          <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                Veterinarian Information
              </h2>
              <p className="text-green-700 mt-1">Used only as a reference </p>

            </div>

            <div className="p-6 space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="vetName" className="block text-sm font-medium text-gray-700">
                    Vet Name
                  </label>
                  <input
                    type="text"
                    id="vetName"
                    placeholder="Veterinarian name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label htmlFor="vetPhone" className="block text-sm font-medium text-gray-700">
                    Vet Phone
                  </label>
                  <input
                    type="tel"
                    id="vetPhone"
                    placeholder="Phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="vetPhoneExt" className="block text-sm font-medium text-gray-700">
                    Vet Phone Ext
                  </label>
                  <input
                    type="text"
                    id="vetPhoneExt"
                    placeholder="Extension"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

            </div>
          </div>


          {/* Organization Qualification */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Organization Qualification
              </h2>
              <p className="text-gray-600 mt-1">Verify your organization's status and credentials</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-red-600">
                    Does your organization qualify as any of the following? (You may be asked to provide supporting
                    documentation):
                  </label>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Federal 501(c)(3) non-profit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>State tax-exempt non-profit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Revenue Canada non-profit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Governmental, Municipal, or Tribal Agency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="qualification-yes"
                        name="organizationQualification"
                        value="yes"
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                      />
                      <label htmlFor="qualification-yes" className="text-sm font-medium text-green-600">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="qualification-no"
                        name="organizationQualification"
                        value="no"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                      />
                      <label htmlFor="qualification-no" className="text-sm font-medium text-red-600">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="taxIdNumber" className="block text-sm font-medium text-gray-700">
                    Tax ID Number
                  </label>
                  <input
                    type="text"
                    id="taxIdNumber"
                    placeholder="Enter your Tax ID Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  />
                  <p className="text-xs text-gray-500">
                    Please provide your organization's Tax ID or EIN number for verification purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Your Organization */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                About Your Organization
              </h2>
              <p className="text-gray-600 mt-1">Tell us more about your mission and operations</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Adoption Fee Range</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="highestFee" className="block text-xs text-gray-600">
                        Highest Adoption Fee
                      </label>
                      <input
                        type="text"
                        id="highestFee"
                        placeholder="$"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lowestFee" className="block text-xs text-gray-600">
                        Lowest Adoption Fee
                      </label>
                      <input
                        type="text"
                        id="lowestFee"
                        placeholder="$"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Types of Animals You Have Adopted Out
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { id: "dogs", label: "Dogs", icon: Dog, color: "from-amber-500 to-orange-500" },
                      { id: "cats", label: "Cats", icon: Cat, color: "from-purple-500 to-pink-500" },
                      { id: "horses", label: "Horses", icon: Users, color: "from-amber-600 to-yellow-600" },
                      { id: "reptiles", label: "Reptiles", icon: Shield, color: "from-green-600 to-emerald-600" },
                      { id: "pocketpets", label: "Pocket pets", icon: Heart, color: "from-pink-500 to-rose-500" },
                      { id: "rabbits", label: "Rabbits", icon: Rabbit, color: "from-gray-500 to-slate-600" },
                      { id: "farm", label: "Farm animals", icon: Users, color: "from-yellow-500 to-amber-500" },
                      { id: "birds", label: "Birds", icon: Bird, color: "from-sky-500 to-blue-500" },
                      { id: "exotics", label: "Exotics", icon: Heart, color: "from-violet-500 to-purple-500" },
                      { id: "fish", label: "Fish", icon: Fish, color: "from-cyan-500 to-teal-500" },
                      { id: "ferrets", label: "Ferrets", icon: Users, color: "from-indigo-500 to-blue-600" },
                    ].map((animal) => (
                      <div key={animal.id} className="relative group">
                  <input
                    type="checkbox"
                    id={animal.id}
                    checked={animalTypes.includes(animal.id)}
                    onChange={(e) => handleAnimalTypeChange(animal.id, e.target.checked)}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={animal.id}
                    className="flex items-center justify-between px-4 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 group-hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-gray-700 peer-checked:text-blue-700">{animal.label}</span>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white transition-all duration-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 text-white transition-opacity duration-200 ${
                          animalTypes.includes(animal.id) ? "opacity-100" : "opacity-0"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="currentAnimals" className="block text-sm font-medium text-gray-700">
                    Current Animals Available
                  </label>
                  <input
                    type="number"
                    id="currentAnimals"
                    placeholder="Number of animals"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="animalAcquisition" className="block text-sm font-medium text-gray-700">
                    How do you acquire animals?
                  </label>
                  <textarea
                    id="animalAcquisition"
                    rows={3}
                    placeholder="Describe how you acquire animals..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Medical Care and Adoption</label>

                  <div className="space-y-2">
                    <label htmlFor="medicalCare" className="block text-xs text-gray-600">
                      Standard Medical Care
                    </label>
                    <textarea
                      id="medicalCare"
                      rows={3}
                      placeholder="Describe standard medical care provided..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-medium text-gray-700">Are all animals spayed/neutered?</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="yes-always"
                          name="spayedNeutered"
                          value="yes-always"
                          checked={spayedNeutered === "yes-always"}
                          onChange={(e) => setSpayedNeutered(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="yes-always" className="text-sm text-gray-700">
                          Yes, always
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="spay-no"
                          name="spayedNeutered"
                          value="no"
                          checked={spayedNeutered === "no"}
                          onChange={(e) => setSpayedNeutered(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="spay-no" className="text-sm text-gray-700">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sterilizationApproach" className="block text-xs text-gray-600">
                      Sterilization Approach
                    </label>
                    <textarea
                      id="sterilizationApproach"
                      rows={3}
                      placeholder="Describe your sterilization approach..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-medium text-red-600">
                      Do you have an adoption contract? (PDF) *
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="contract-yes"
                          name="adoptionContract"
                          value="yes"
                          checked={adoptionContract === "yes"}
                          onChange={(e) => setAdoptionContract(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="contract-yes" className="text-sm text-gray-700">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="contract-no"
                          name="adoptionContract"
                          value="no"
                          checked={adoptionContract === "no"}
                          onChange={(e) => setAdoptionContract(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="contract-no" className="text-sm text-gray-700">
                          No
                        </label>
                      </div>
                    </div>
                    {adoptionContract === "yes" && (
                      <div className="mt-2">
                        <input
                          type="file"
                          accept=".pdf"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="missionStatement" className="block text-sm font-medium text-gray-700">
                      Mission Statement
                    </label>
                    <textarea
                      id="missionStatement"
                      rows={4}
                      placeholder="Describe your organization's mission..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="adoptionPolicies" className="block text-sm font-medium text-gray-700">
                      Adoption Policies
                    </label>
                    <textarea
                      id="adoptionPolicies"
                      rows={4}
                      placeholder="Describe your adoption policies..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="adoptionProcess" className="block text-sm font-medium text-gray-700">
                      Adoption Process
                    </label>
                    <textarea
                      id="adoptionProcess"
                      rows={4}
                      placeholder="Describe your adoption process..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="onlineLink" className="block text-sm font-medium text-gray-700">
                      Online Adoption Application Link
                    </label>
                    <input
                      type="url"
                      id="onlineLink"
                      placeholder="https://"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Presence */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                Online Presence
              </h2>
              <p className="text-gray-600 mt-1">Help people find you online</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                    Facebook
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    placeholder="Facebook page URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    placeholder="Instagram handle"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="otherSocial" className="block text-sm font-medium text-gray-700">
                    Other Social
                  </label>
                  <input
                    type="text"
                    id="otherSocial"
                    placeholder="Other social media"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(OrganizationQuestionnaire);