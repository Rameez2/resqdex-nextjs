import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";
import { storage } from "@/lib/appwrite/appwrite";
import { updateRecord } from "@/lib/appwrite/dataForms";
import { updateOrgForm } from "@/lib/appwrite/org-from";
import withAuth from "@/lib/middlewares/withAuth";
import { ID } from "appwrite";
import React, { useReducer, useState } from "react";

const initialState = {
  shelter_info: [
    "Happy Tails Animal Rescue", // Shelter Name
    "Jane", // Director First Name
    "Doe", // Director Last Name
    "Executive Director", // Title
    "Non-Profit" // Type of Organization
  ],
  physical_address: [
    "1234 Bark St.", // Address
    "Pawsville", // City
    "98765", // Zip
    "555-123-4567", // Phone
    "101" // Phone Ext
  ],
  mailing_address: [
    "PO Box 789", // Address
    "Pawsville", // City
    "CA", // State
    "98765" // Zip
  ],
  adoption_ambassador: [
    "Emily", // First Name
    "Smith", // Last Name
    "555-987-6543", // Phone
    "202", // Phone Ext
    "emily@happytails.org", // Email
    "emily@happytails.org", // Verify Email
  ],
  veterinarian_info: [
    "Dr. John Vetman", // Vet Name
    "555-321-4321", // Vet Phone
    "303" // Vet Phone Ext
  ],
  taxId: "12-3456789", // Tax ID
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
    "500", // Highest Fee
    "50" // Lowest Fee
  ],
  current_animals: 23,
  animal_source: "Owner Surrenders, Strays, Transfers from Shelters",
  medical_adoption: [
    "Routine checkups, vaccinations, emergency surgeries", // Medical Care
    "Mandatory before adoption", // Spay Policy
    "Yes, all animals are sterilized", // Sterilization
    "Yes, adopters must sign a contract" // Has Contract
  ],
  mission: "To rescue, rehabilitate, and rehome animals in need while promoting responsible pet ownership.",
  adoption_policies: "All adopters must be 21+, provide landlord approval if renting, and undergo a home check.",
  adoption_process: "Submit application → Interview → Home Visit → Meet & Greet → Finalize Adoption",
  adoption_link: "https://www.happytails.org/adopt",
  online_presence: [
    "https://www.happytails.org", // Website
    "https://facebook.com/happytailsrescue", // Facebook
    "https://instagram.com/happytailsrescue", // Instagram
    "https://twitter.com/happytails" // Other Social
  ]
};



const orgReducer = (state, action) => {
  const { field, value, index } = action;
  if (Array.isArray(state[field])) {
    const updatedArray = [...state[field]];
    updatedArray[index] = value;
    return { ...state, [field]: updatedArray };
  }
  return { ...state, [field]: value };
};


const OrganizationQuestionnaire = ({ onSubmit }) => {
  const [formData, dispatch] = useReducer(orgReducer, initialState);
  const [formLoading, setFormLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { loading, user, setUser } = useUser();
  const [adoptionContractFile, setAdoptionContractFile] = useState(null);

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

      console.log('got file id',fileId);
      


      const adoptedArray = [];

      Object.entries(formData.adopted).forEach(([animal, isAdopted]) => {
        if (isAdopted === true) {
          adoptedArray.push(animal);
        }
      });

      const updatedFormData = {
        ...formData,
        adopted: adoptedArray, // already present
        adoption_contract: fileId, // ensure it's passed
      };

      console.log('uploading',user);
      
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




  if (loading) return <h1 className="text-center text-xl font-bold">Loading...</h1>;
  if (!(user.status === "Rejected" || user.status === "Apply"))
    return <h1 className="text-center text-red-600 font-bold">New application can only be submitted after rejection.</h1>;

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Required fields are shown in <span className="text-red-600 font-bold">red</span>,<br />
          Info in <span className="bg-green-100 text-green-800 px-1 rounded">green boxes</span> will not be seen by public.
        </h2>
      </div>
      {/* Shelter Info */}
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Shelter / Rescue Information</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Shelter/Rescue Name */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Shelter/Rescue Name</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.shelter_info[0]}
            onChange={(e) => handleChange("shelter_info", e.target.value, 0)}
          />
        </div>

        {/* Director First + Last Name */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Director/Manager Name</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First"
              className="flex-1 border p-2 rounded-md"
              value={formData.shelter_info[1]}
              onChange={(e) => handleChange("shelter_info", e.target.value, 1)}
            />
            <input
              type="text"
              placeholder="Last"
              className="flex-1 border p-2 rounded-md"
              value={formData.shelter_info[2]}
              onChange={(e) => handleChange("shelter_info", e.target.value, 2)}
            />
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Title</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.shelter_info[3]}
            onChange={(e) => handleChange("shelter_info", e.target.value, 3)}
          />
        </div>

        {/* Type of Organization */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Type of Organization</label>
          <select
            className="border p-2 rounded-md"
            value={formData.shelter_info[4]}
            onChange={(e) => handleChange("shelter_info", e.target.value, 4)}
          >
            <option value="">-- Select --</option>
            <option>Rescue Group</option>
            <option>Private Animal Shelter</option>
            <option>Municipal Animal Shelter</option>
            <option>Veterinary Facility</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Physical Address */}
      <h3 className="text-lg font-semibold mt-6">Physical Address</h3>
      <div className="grid grid-cols-2 gap-6">
        {/* Address */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Address</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.physical_address[0]}
            onChange={(e) => handleChange("physical_address", e.target.value, 0)}
          />
        </div>

        {/* City */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">City</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.physical_address[1]}
            onChange={(e) => handleChange("physical_address", e.target.value, 1)}
          />
        </div>

        {/* Zip */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Zip/Postal Code</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.physical_address[2]}
            onChange={(e) => handleChange("physical_address", e.target.value, 2)}
          />
        </div>

        {/* Phone + Ext */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="text-red-500">Phone</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 border p-2 rounded-md"
              value={formData.physical_address[3]}
              onChange={(e) => handleChange("physical_address", e.target.value, 3)}
            />
            <input
              type="text"
              placeholder="Ext"
              className="w-24 border p-2 rounded-md"
              value={formData.physical_address[4]}
              onChange={(e) => handleChange("physical_address", e.target.value, 4)}
            />
          </div>
        </div>
      </div>


      {/* Mailing Address */}
      <h3 className="text-lg font-semibold mt-6">Mailing Address</h3>
      <div className="grid grid-cols-2 gap-6 bg-[#67cf7f] p-5 rounded-lg">
        {/* Mailing Address */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label>Address</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.mailing_address[0]}
            onChange={(e) => handleChange("mailing_address", e.target.value, 0)}
          />
        </div>

        {/* City */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label>City</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.mailing_address[1]}
            onChange={(e) => handleChange("mailing_address", e.target.value, 1)}
          />
        </div>

        {/* State */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label>State</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.mailing_address[2]}
            onChange={(e) => handleChange("mailing_address", e.target.value, 2)}
          />
        </div>

        {/* Zip */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label>Zip/Postal Code</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.mailing_address[3]}
            onChange={(e) => handleChange("mailing_address", e.target.value, 3)}
          />
        </div>
      </div>


      {/* Adoption Ambassador */}
      <h3 className="text-lg font-semibold mt-6">Adoption Ambassador</h3>
      <div className="grid grid-cols-2 gap-6 bg-[#67cf7f] p-5 rounded-lg">
        {/* First Name */}
        <div className="flex flex-col">
          {/* <label>First Name</label> */}
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder="First Name"
            value={formData.adoption_ambassador[0]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 0)}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          {/* <label>Last Name</label> */}
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded-md"
            value={formData.adoption_ambassador[1]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 1)}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          {/* <label>Phone</label> */}
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded-md"
            value={formData.adoption_ambassador[2]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 2)}
          />
        </div>

        {/* Phone Ext */}
        <div className="flex flex-col">
          {/* <label>Phone Ext</label> */}
          <input
            type="text"
            placeholder="Phone Ext"
            className="border p-2 rounded-md"
            value={formData.adoption_ambassador[3]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 3)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          {/* <label>Email</label> */}
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md"
            value={formData.adoption_ambassador[4]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 4)}
          />
        </div>

        {/* Verify Email */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          {/* <label>Verify Email</label> */}
          <input
            type="email"
            placeholder="Verify Email"
            className="border p-2 rounded-md"
            value={formData.adoption_ambassador[5]}
            onChange={(e) => handleChange("adoption_ambassador", e.target.value, 5)}
          />
        </div>
      </div>


      {/* Veterinarian Info */}
      <h3 className="text-lg font-semibold mt-6">Veterinarian Information</h3>
      <div className="grid grid-cols-2 gap-6">
        {/* Vet Name */}
        <div className="flex flex-col">
          <label>Vet Name</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.veterinarian_info[0]}
            onChange={(e) => handleChange("veterinarian_info", e.target.value, 0)}
          />
        </div>

        {/* Vet Phone */}
        <div className="flex flex-col">
          <label>Vet Phone</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.veterinarian_info[1]}
            onChange={(e) => handleChange("veterinarian_info", e.target.value, 1)}
          />
        </div>

        {/* Vet Phone Ext */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label>Vet Phone Ext</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.veterinarian_info[2]}
            onChange={(e) => handleChange("veterinarian_info", e.target.value, 2)}
          />
        </div>
      </div>


      {/* About Organization */}
      <h3 className="text-lg font-semibold mt-6">About Your Organization</h3>
      <div className="grid grid-cols-2 gap-6">
        {/* 501(c)(3) Non-profit */}

        <div className="flex flex-col">
          <label>If your organization is a 501(c)(3) nonprofit, please provide your Tax ID number.</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={formData.taxId}
            onChange={(e) => handleChange("taxId", e.target.value, 1)}
          />
        </div>
      </div>


      {/* Fees and current animals */}

      <h4 className="text-md font-semibold mt-4">Adoption Fee Range</h4>


      <div className="flex flex-col">
        <label>Highest Adoption Fee</label>
        <input
          type="number"
          value={formData.adoption_fees[0]}
          onChange={(e) => handleChange("adoption_fees", parseInt(e.target.value) || 0, 0)}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label>Lowest Adoption Fee</label>
        <input
          type="number"
          value={formData.adoption_fees[1]}
          onChange={(e) => handleChange("adoption_fees", parseInt(e.target.value) || 0, 1)}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Adopted Animals */}
      <h4 className="text-md font-semibold mt-4">Types of Animals You Have Adopted Out</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(formData.adopted).map((type) => (
          <label key={type} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.adopted[type]}
              onChange={(e) =>
                handleChange("adopted", {
                  ...formData.adopted,
                  [type]: e.target.checked,
                })
              }
              className="w-5 h-5"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>





      <div className="flex flex-col">
        <label>Current Animals Available</label>
        <input
          type="number"
          value={formData.current_animals}
          onChange={(e) => handleChange("current_animals", parseInt(e.target.value) || 0)}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label>How do you acquire animals?</label>
        <textarea
          className="border p-2 rounded-md"
          value={formData.animal_source}
          onChange={(e) => handleChange("animal_source", e.target.value)}
        />
      </div>

      {/* Medical */}
      <h3 className="text-lg font-semibold mt-6">Medical Care and Adoption</h3>

      <div className="flex flex-col">
        <label>Standard Medical Care</label>
        <textarea
          className="border p-2 rounded-md"
          value={formData.medical_adoption[0]}
          onChange={(e) => handleChange("medical_adoption", e.target.value, 0)}
        />
      </div>

      <div className="flex flex-col">
        <label>Are all animals spayed/neutered?</label>
        <select
          className="border p-2 rounded-md"
          value={formData.medical_adoption[1]}
          onChange={(e) => handleChange("medical_adoption", e.target.value, 1)}
        >
          <option>Yes, always</option>
          <option>No, some exceptions</option>
          <option>No, adopters responsible</option>
          <option>Not applicable</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label>Sterilization Approach</label>
        <textarea
          className="border p-2 rounded-md"
          value={formData.medical_adoption[2]}
          onChange={(e) => handleChange("medical_adoption", e.target.value, 2)}
        />
      </div>

      {/* Adoption Contract */}


      <div className="flex flex-col">
        <label className="text-red-500">Do you have an adoption contract? (PDF)</label>
        <input
          type="file"
          accept="application/pdf"
          // onChange={async (e) => {
          //   const file = e.target.files[0];
          //   if (file) {
          //     const fileId = await uploadFile(file);
          //     if (fileId) {
          //       dispatch({ field: "adoption_contract", value: fileId });
          //     }
          //   }
          // }}
          onChange={(e) => setAdoptionContractFile(e.target.files[0])}
          className="border p-2 rounded-md"
        />
      </div>


      {/* Adoptions policies & mission statement */}
      <h4 className="text-md font-semibold mt-4">Mission statement, Adoptions policies & Adoption process</h4>
      {[
        { label: "Mission Statement", field: "mission" },
        { label: "Adoption Policies", field: "adoption_policies" },
        { label: "Adoption Process", field: "adoption_process" },
        { label: "Online Adoption Application Link", field: "adoption_link" }
      ].map(({ label, field }) => (
        <div className="flex flex-col" key={field}>
          <label>{label}</label>
          <input
            type={field.includes("Link") ? "url" : "text"}
            className="border p-2 rounded-md"
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        </div>
      ))}
      {/* Online Presence */}
      <h3 className="text-lg font-semibold mt-6">Online Presence</h3>

      {["Website", "Facebook", "Instagram", "Other Social"].map((label, i) => (
        <div className="flex flex-col" key={label}>
          <label>{label}</label>
          <input
            type="url"
            className="border p-2 rounded-md"
            value={formData.online_presence[i]}
            onChange={(e) => handleChange("online_presence", e.target.value, i)}
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={formLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700"
      >
        {formLoading ? <ButtonSpinner /> : "Submit"}
      </button>

      {showToast && <Toast message="Organization info updated!" />}
    </form>
  );
};

export default withAuth(OrganizationQuestionnaire);