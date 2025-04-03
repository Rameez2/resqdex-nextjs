"use client"
import React, { useReducer, useState } from "react";
import { updateRecord } from "@/lib/appwrite/dataForms";
import { useUser } from "@/context/userContext";
import ButtonSpinner from "@/components/atoms/buttonSpinner";

// ----------------- INITIAL STATE -----------------
const initialState = {
  personal_info: ["", "", "", "", ""],
  additional_info: "",
  household_info: ["", "", "", ""],
  experience_with_pets: ["", "", ""],
  adoption_intentions: ["", "", ""],
  lifestyle_commitment: ["", "", "", "", ""],
  financial_considerations: ["", ""],
  references: ["", ""],
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
  const { user } = useUser();

  if (!isOpen) return null;

  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      const updatedDoc = await updateRecord(user.$id, user.more_info, formData, "adopter");

      console.log("Adopter record updated:", updatedDoc);
      alert("Form Submit Success");
      onClose();
      if (onSubmit) onSubmit(updatedDoc);
    } catch (error) {
      console.error("Error updating the record:", error);
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
          {/* Personal Information */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
            {formData.personal_info.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Personal Info ${idx + 1}`}</label>
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

          {/* Additional Info */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Additional Info</h3>
            <textarea
              value={formData.additional_info}
              onChange={(e) => handleChange("additional_info", e.target.value)}
              placeholder={placeholders.additional_info}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* Household Info */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Household Information</h3>
            {formData.household_info.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Household Info ${idx + 1}`}</label>
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

          {/* Experience with Pets */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Experience with Pets</h3>
            {formData.experience_with_pets.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Experience with Pets ${idx + 1}`}</label>
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

          {/* Adoption Intentions */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Adoption Intentions</h3>
            {formData.adoption_intentions.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Adoption Intentions ${idx + 1}`}</label>
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

          {/* Lifestyle Commitment */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Lifestyle Commitment</h3>
            {formData.lifestyle_commitment.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Lifestyle Commitment ${idx + 1}`}</label>
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

          {/* Financial Considerations */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Financial Considerations</h3>
            {formData.financial_considerations.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Financial Considerations ${idx + 1}`}</label>
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

          {/* References */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">References</h3>
            {formData.references.map((val, idx) => (
              <div key={idx} className="mb-2">
                <label>{`Reference ${idx + 1}`}</label>
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
    </div>
  );
};

export default AdopterQuestionnaire;
