import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";
import { updateRecord } from "@/lib/appwrite/dataForms";
import withAuth from "@/lib/middlewares/withAuth";
import React, { useReducer, useState } from "react";

const initialState = {
  type_of_organization: "Rescue Group",
  // other_type_of_organization: "Exotic Animal Rescue",
  organization_info: [
    "Paws and Claws Rescue", // Legal Name
    "P&C Rescue",            // DBA
    "Jane Doe",              // Director/Manager
    "123-456-7890",          // Phone Number
    "info@pawsclaws.org",    // Email
    "1234 Rescue St, Petville, PA 12345" // Address
  ],
  tax_id: "12-3456789",
  personal_info: [
    "John",        // First Name
    "Smith",       // Last Name
    "john.smith@example.com", // Email
    "987-654-3210", // Phone
    "5678 Adoption Ave, Petville, PA 12345" // Address
  ],
  operations_and_staffing: "We operate with 20 volunteers and 5 full-time staff.",
  funding_and_financials: "We are funded through donations, grants, and fundraising events.",
  additional_info: "We focus on rescuing abandoned exotic pets and finding them new homes.",
  mission_and_vision: [
    "To rescue, rehabilitate, and rehome animals in need.", // Mission Statement
    "A world where every animal has a loving home.",        // Vision Statement
    "Compassion, Integrity, Excellence"                    // Core Values
  ],
  services: [
    "Animal Rescue", 
    "Animal Rehabilitation", 
    "Community Education"
  ],
  legal_and_compliance: [
    "Licensed Animal Shelter", 
    "Compliant with State Animal Welfare Laws", 
    "Certified Non-Profit 501(c)(3)"
  ],
  partnership_and_collabs: [
    "Partnered with VetCare Clinic", 
    "Collaborate with PetVille City Shelter"
  ],
  adoption_process: [
    "Application review, home check, adoption fee", 
    "Post-adoption follow-up for 6 months"
  ],
  feedback_and_impact: [
    "Over 500 animals rescued and rehomed in the past year.", 
    "Positive feedback from 90% of adopters."
  ],
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
  const { loading, user } = useUser();

  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);
      const updatedDoc = await updateRecord(user.$id, user.more_info, formData);
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
    <form className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">

  {/* Shelter/Rescue Info */}
  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Shelter / Rescue Information</h2>

  <div className="flex flex-col">
    <label>Shelter/Rescue Name</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Director/Manager (First Name)</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Director/Manager (Last Name)</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Title</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Type of Organization</label>
    <select className="border p-2 rounded-md">
      <option value="">-- Select --</option>
      <option>Rescue Group</option>
      <option>Private Animal Shelter</option>
      <option>Municipal Animal Shelter</option>
      <option>Veterinary Facility</option>
      <option>Other</option>
    </select>
  </div>

  {/* Physical Address */}
  <h3 className="text-lg font-semibold mt-6">Physical Address</h3>

  <div className="flex flex-col">
    <label>Address</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>City</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Zip/Postal Code</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Phone</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Phone Ext</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Fax</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Email</label>
    <input type="email" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Verify Email</label>
    <input type="email" className="border p-2 rounded-md" />
  </div>

  {/* Mailing Address */}
  <h3 className="text-lg font-semibold mt-6">Mailing Address</h3>

  <div className="flex flex-col">
    <label>Mailing Address</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>City</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>State</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Zip/Postal Code</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  {/* Adoption Ambassador */}
  <h3 className="text-lg font-semibold mt-6">Adoption Ambassador</h3>

  <div className="flex flex-col">
    <label>First Name</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Last Name</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Phone</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Phone Ext</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Email</label>
    <input type="email" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Verify Email</label>
    <input type="email" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Password</label>
    <input type="password" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Verify Password</label>
    <input type="password" className="border p-2 rounded-md" />
  </div>

  {/* Veterinarian Information */}
  <h3 className="text-lg font-semibold mt-6">Veterinarian Information</h3>

  <div className="flex flex-col">
    <label>Vet Name</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Vet Phone</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Vet Phone Ext</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  {/* About Your Organization */}
  <h3 className="text-lg font-semibold mt-6">About Your Organization</h3>

  <div className="flex flex-col">
    <label>501(c)(3) Non-profit?</label>
    <select className="border p-2 rounded-md">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label>Tax ID Number</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  {/* Adopted Animals */}
  <h4 className="text-md font-semibold mt-4">Animals Adopted Out</h4>

  {[
    "Dogs", "Cats", "Horses", "Reptiles", "Pocket Pals", 
    "Rabbits", "Farm Animals", "Birds", "Exotics", "Fish", "Ferrets"
  ].map((type) => (
    <div key={type} className="flex flex-col">
      <label>{type}</label>
      <input type="number" min="0" className="border p-2 rounded-md" />
    </div>
  ))}

  {/* Adoption Fees */}
  <div className="flex flex-col">
    <label>Highest Adoption Fee</label>
    <input type="number" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Lowest Adoption Fee</label>
    <input type="number" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Current Animals Available</label>
    <input type="number" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>How do you acquire animals?</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  {/* Medical and Sterilization */}
  <h3 className="text-lg font-semibold mt-6">Medical Care and Adoption</h3>

  <div className="flex flex-col">
    <label>Standard Medical Care</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Are all animals spayed/neutered?</label>
    <select className="border p-2 rounded-md">
      <option>Yes, always</option>
      <option>No, some exceptions</option>
      <option>No, adopters responsible</option>
      <option>Not applicable</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label>Sterilization Approach</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Do you have an adoption contract?</label>
    <select className="border p-2 rounded-md">
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  {/* Online Presence */}
  <h3 className="text-lg font-semibold mt-6">Online Presence</h3>

  <div className="flex flex-col">
    <label>Mission Statement</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Adoption Policies</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Adoption Process</label>
    <textarea className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Online Adoption Application Link</label>
    <input type="url" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Website URL</label>
    <input type="url" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Facebook Page</label>
    <input type="url" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Instagram Handle</label>
    <input type="text" className="border p-2 rounded-md" />
  </div>

  <div className="flex flex-col">
    <label>Other Social Media</label>
    <input type="url" className="border p-2 rounded-md" />
  </div>

</form>

  );
};

export default withAuth(OrganizationQuestionnaire);
