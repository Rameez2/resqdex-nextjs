import ButtonSpinner from "@/components/atoms/buttonSpinner";
import Toast from "@/components/atoms/Toast";
import { useUser } from "@/context/userContext";
import { updateRecord } from "@/lib/appwrite/dataForms";
import withAuth from "@/lib/middlewares/withAuth";
import React, { useReducer, useState } from "react";

const initialState = {
  personal_info: ["org", "org", "org@gmail.com", "org", "org"],
  operations_and_staffing: "org",
  funding_and_financials: "org",
  additional_info: "org",
  mission_and_vision: ["org", "org", "org"],
  services: ["org", "org", "org"],
  legal_and_compliance: ["org", "org", "org"],
  partnership_and_collabs: ["org", "org"],
  adoption_process: ["org", "org"],
  feedback_and_impact: ["org", "org"],
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
  const [formLoading,setFormLoading] = useState(false);
  const [showToast,setShowToast] = useState(false);
  const { loading, user } = useUser();

  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);
      const updatedDoc = await updateRecord(user.$id,user.more_info, formData);
      // alert("Form Submitted Successfully");
      setShowToast(true);
      if (onSubmit) onSubmit(updatedDoc);
    } catch (error) {
      console.error("Error updating organization record:", error);
    }
    finally{
      setFormLoading(false);
    }
  };

  if (loading) return <h1 className="text-center text-xl font-bold">Loading...</h1>;
  if (!(user.status === "Rejected" || user.status === "Apply"))
    return <h1 className="text-center text-red-600 font-bold">New application can only be submitted after rejection.</h1>;

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Organization Application</h2>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["First Name", "Last Name", "Email", "Phone", "Address"].map((label, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-gray-700 font-medium">{label}:</label>
            <input
              type={label === "Email" ? "email" : "text"}
              value={formData.personal_info[idx]}
              onChange={(e) => handleChange("personal_info", e.target.value, idx)}
              className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
      </div>

      {/* Mission and Vision */}
      <h3 className="text-lg font-semibold text-gray-800">Mission and Vision</h3>
      {["Mission Statement", "Vision Statement", "Core Values"].map((label, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-gray-700 font-medium">{label}:</label>
          <input
            type="text"
            value={formData.mission_and_vision[idx]}
            onChange={(e) => handleChange("mission_and_vision", e.target.value, idx)}
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      ))}

      {/* Services */}
      <h3 className="text-lg font-semibold text-gray-800">Services</h3>
      {["Service 1", "Service 2", "Service 3"].map((label, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-gray-700 font-medium">{label}:</label>
          <input
            type="text"
            value={formData.services[idx]}
            onChange={(e) => handleChange("services", e.target.value, idx)}
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      ))}

      {/* Textareas */}
      {[
        { label: "Operations and Staffing", field: "operations_and_staffing" },
        { label: "Funding and Financials", field: "funding_and_financials" },
        { label: "Additional Info", field: "additional_info" },
      ].map(({ label, field }) => (
        <div key={field} className="flex flex-col">
          <label className="text-gray-700 font-medium">{label}:</label>
          <textarea
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>
      ))}

      {/* Legal and Compliance */}
      <h3 className="text-lg font-semibold text-gray-800">Legal and Compliance</h3>
      {["Licenses", "Regulatory Compliance", "Certifications"].map((label, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-gray-700 font-medium">{label}:</label>
          <input
            type="text"
            value={formData.legal_and_compliance[idx]}
            onChange={(e) => handleChange("legal_and_compliance", e.target.value, idx)}
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      ))}

      {/* Feedback and Impact */}
      <h3 className="text-lg font-semibold text-gray-800">Feedback and Impact</h3>
      {["Community Impact", "Feedback from Adopters"].map((label, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-gray-700 font-medium">{label}:</label>
          <input
            type="text"
            value={formData.feedback_and_impact[idx]}
            onChange={(e) => handleChange("feedback_and_impact", e.target.value, idx)}
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
      {formLoading && <ButtonSpinner/>}
        Submit Application
      </button>
      {showToast && <Toast content='Form submit success!' />}
    </form>
  );
};

export default withAuth(OrganizationQuestionnaire);
