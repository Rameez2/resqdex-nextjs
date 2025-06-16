"use client"
import React, { useReducer, useState } from "react";
import { updateRecord } from "@/lib/appwrite/dataForms";
import { useUser } from "@/context/userContext";
import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";

// ----------------- INITIAL STATE -----------------
const initialState = {
  personal_info: [
  "", // first name 
  "", // last name
  "", // Date of Birth
  "", // Phone
  "" // Email
],
  address: [
  "", // currentAddress
  "", // city
  "", // zip
  "", // state
  "", // mail address
  ],
  mail_address: [
  "", // mail address
  "", // city
  "", // zip
  "", // state
  ],
  
  household_info: [
  "", // No of Adults
  "", // No of childrens
  "", // Age of children
  "", // all agree for adoption
  "", // anyone allergic to animals (explain)
  "", // primary caregiver
  "", // type of home 
  "", // do have yard
  "", // where will pet spend most of time
  "", // where will pet sleep at night
  ],
  experience_with_pets: [
  "", // owned pets before 
  "", // type of pet owned 
  "", // how long since your last pet 
  "", // currently have pets
  "", // currently have pets (Type, Age, Neutrant or not)
  "", // current animals on vaccinations (☐ Yes ☐ No ☐ N/A)
  "", // What happened to your previous pets? (Old age, illness, lost, etc)
  "", // Have you ever surrendered a pet to a shelter or rescue (if Yes Explain)
  ], 
  lifestyle_schedule: [
  "", // how many hours per day pet will be alone?
  "", // you typical daily schedule
  "", // do you travel frquently
  "", // arrangements for pet care during travel/ vacation?
  "", // activity level
  ],
  financial_responsibility: [
  "", // prepared for pet ownership (yes,no)
  "", // prepared for emergency veterinary expenses 
  "", // How would you handle a $1,000+ emergency vet bill
  "", // Do you have pet insurance or plan to get it?
  ],
  pet_preference_expectation:[
  "", // Why do you want to adopt?
  "", // What qualities are you looking for in a pet?
  "", // What age are you interested in?
  "", // Are you willing to adopt a pet with special needs or medical conditions
  "", // What behaviors would be unacceptable to you?
  "", // Are you prepared yo work on behavioral issues with training ? ☐ Yes ☐ No
  ],
  emergency_commitment:[
  "", // If you move what will happen to your pet?
  "", // What would cause you to give up your pet?
  "", // Are you prepared for a long term commitment (10-20+ years) ? ☐ Yes ☐ No 
  "", // What would cause you to give up your pet?
  ],

};

// ----------------- PLACEHOLDERS OBJECT -----------------
const placeholders = {
  personal_info: [
    "Enter your first name",
    "Enter your last name",
    "Enter your email address",
    "Enter your phone number",
    "Enter your residential address",
  ],
  additional_info: "Enter any additional information about yourself",
  household_info: [
    "Enter household detail 1",
    "Enter household detail 2",
    "Enter household detail 3",
    "Enter household detail 4",
  ],
  experience_with_pets: [
    "Describe your experience with pets 1",
    "Describe your experience with pets 2",
    "Describe your experience with pets 3",
  ],
  adoption_intentions: [
    "What are your adoption intentions 1",
    "What are your adoption intentions 2",
    "What are your adoption intentions 3",
  ],
  lifestyle_commitment: [
    "Describe your lifestyle commitment 1",
    "Describe your lifestyle commitment 2",
    "Describe your lifestyle commitment 3",
    "Describe your lifestyle commitment 4",
    "Describe your lifestyle commitment 5",
  ],
  financial_considerations: [
    "Enter financial consideration 1",
    "Enter financial consideration 2",
  ],
  references: ["Enter reference detail 1", "Enter reference detail 2"],
};

// ----------------- REDUCER -----------------
const formReducer = (state, action) => {
  const { field, value, index } = action;

  // Handle updating array values
  if (Array.isArray(state[field])) {
    const updatedArray = [...state[field]];
    updatedArray[index] = value;
    return { ...state, [field]: updatedArray };
  }

  return { ...state, [field]: value };
};

// ----------------- MAIN COMPONENT -----------------
const AdopterQuestionnaire = ({ isOpen, onClose, onSubmit }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const { user, setUser } = useUser();

  if (!isOpen) return null;

  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setToast(null);
      setSubmitLoading(true);
      const updatedDoc = await updateRecord(user.$id, user.additionalInfo.$id, formData, "adopter");
      setToast({ message: "Application Submit Success!", type: "success" });

      user.status = "Pending";
      setUser(user);
      // onClose();
      setTimeout(() => {
        onClose();
      }, 1000);
      if (onSubmit) onSubmit(updatedDoc);
    } catch (error) {
      console.error("Error updating the record:", error);
      setToast({ message: error.message, type: "error" });
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal Container with Scrollable Content */}
      <div className="relative bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">
          Adoption Application
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* // Personal Information */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
            {formData.personal_info.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("personal_info", e.target.value, idx)}
                  placeholder={placeholders.personal_info[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // Additional Info */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Additional Info</h3>
            <textarea
              value={formData.additional_info}
              onChange={(e) => handleChange("additional_info", e.target.value)}
              placeholder={placeholders.additional_info}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* // Household Info */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Household Information</h3>
            {formData.household_info.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("household_info", e.target.value, idx)}
                  placeholder={placeholders.household_info[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // Experience with Pets */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Experience with Pets</h3>
            {formData.experience_with_pets.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("experience_with_pets", e.target.value, idx)}
                  placeholder={placeholders.experience_with_pets[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // Adoption Intentions */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Adoption Intentions</h3>
            {formData.adoption_intentions.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("adoption_intentions", e.target.value, idx)}
                  placeholder={placeholders.adoption_intentions[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // Lifestyle Commitment */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Lifestyle Commitment</h3>
            {formData.lifestyle_commitment.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("lifestyle_commitment", e.target.value, idx)}
                  placeholder={placeholders.lifestyle_commitment[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // Financial Considerations */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Financial Considerations</h3>
            {formData.financial_considerations.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("financial_considerations", e.target.value, idx)}
                  placeholder={placeholders.financial_considerations[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* // References */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">References</h3>
            {formData.references.map((val, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleChange("references", e.target.value, idx)}
                  placeholder={placeholders.references[idx]}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {submitLoading && <ButtonSpinner />}
            Submit
          </button>
        </form>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}
    </div>
  );
};

export default AdopterQuestionnaire;
