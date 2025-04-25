import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";
import { updateRecord } from "@/lib/appwrite/dataForms";
import { updateOrgForm } from "@/lib/appwrite/org-from";
import withAuth from "@/lib/middlewares/withAuth";
import React, { useReducer, useState } from "react";

const initialState = {
  shelter_info: [
    "Paws and Claws Rescue", // Shelter Name
    "Jane", // Director First Name
    "Doe", // Director Last Name
    "Director", // Title
    "Rescue Group" // Type of Organization
  ],
  physical_address: [
    "1234 Rescue St", // Address
    "Petville", // City
    "12345", // Zip
    "123-456-7890", // Phone
    "101" // Phone Ext
  ],
  mailing_address: [
    "PO Box 5678", // Address
    "Petville", // City
    "PA", // State
    "12345" // Zip
  ],
  adoption_ambassador: [
    "John", // First Name
    "Smith", // Last Name
    "987-654-3210", // Phone
    "102", // Phone Ext
    "john.smith@pawsclaws.org", // Email
    "john.smith@pawsclaws.org", // Verify Email
  ],
  veterinarian_info: [
    "Dr. Pet Care", // Vet Name
    "555-123-4567", // Vet Phone
    "103" // Vet Phone Ext
  ],
  about_organization: [
    "yes", // is_501c3
    "12-3456789" // Tax ID
  ],
  adopted: {
    Dogs: 100,
    Cats: 80,
    Horses: 5,
    Reptiles: 10,
    "Pocket Pals": 20,
    Rabbits: 15,
    "Farm Animals": 8,
    Birds: 12,
    Exotics: 3,
    Fish: 6,
    Ferrets: 2
  },
  adoption_fees: [
    "500", // Highest Fee
    "50" // Lowest Fee
  ],
  current_animals: 30,
  animal_source: "Rescued from shelters and owner surrenders.",
  medical_adoption: [
    "Vaccinations, deworming, microchipping, and health checks.", // Medical Care
    "Yes, always", // Spay Policy
    "Spayed/neutered above 6 months; contract required for younger.", // Sterilization
    "Yes" // Has Contract
  ],
  mission: "To rescue, rehabilitate, and rehome animals in need.",
  adoption_policies: "Application, home check, and fee.",
  adoption_process: "Apply online, interview, visit, finalize.",
  adoption_link: "https://pawsclaws.org/adopt",
  online_presence: [
    "https://pawsclaws.org", // Website
    "https://facebook.com/pawsclawsrescue", // Facebook
    "https://instagram.com/pawsclawsrescue", // Instagram
    "https://twitter.com/pawsclawsrescue" // Other Social
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

// const formatAdopted = (adoptedObj) => {
//   return Object.entries(adoptedObj)
//     .map(([animal, count]) => `${animal}: ${count}`)
//     .join(", ");
// };


const OrganizationQuestionnaire = ({ onSubmit }) => {
  const [formData, dispatch] = useReducer(orgReducer, initialState);
  const [formLoading, setFormLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { loading, user,setUser } = useUser();

  const handleChange = (field, value, index = null) => {
    dispatch({ field, value, index });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);

      // Convert adopted object to an array of strings
      const adoptedStringArray = Object.entries(formData.adopted)
        .map(([animal, count]) => `${animal}: ${count}`);

      // Create a shallow copy and replace adopted with the string array
      const updatedFormData = {
        ...formData,
        adopted: adoptedStringArray,
      };

      const updatedDoc = await updateOrgForm(user.$id, user.more_info, updatedFormData);
      setUser({...user,status:"Pending"});
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

    {/* Shelter Info */}
    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Shelter / Rescue Information</h2>

    {["Shelter/Rescue Name", "Director/Manager (First Name)", "Director/Manager (Last Name)", "Title"].map((label, i) => (
      <div className="flex flex-col" key={label}>
        <label>{label}</label>
        <input
          type="text"
          className="border p-2 rounded-md"
          value={formData.shelter_info[i]}
          onChange={(e) => handleChange("shelter_info", e.target.value, i)}
        />
      </div>
    ))}

    <div className="flex flex-col">
      <label>Type of Organization</label>
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

    {/* Physical Address */}
    <h3 className="text-lg font-semibold mt-6">Physical Address</h3>
    {["Address", "City", "Zip/Postal Code", "Phone", "Phone Ext"].map((label, i) => (
      <div className="flex flex-col" key={label}>
        <label>{label}</label>
        <input
          type="text"
          className="border p-2 rounded-md"
          value={formData.physical_address[i]}
          onChange={(e) => handleChange("physical_address", e.target.value, i)}
        />
      </div>
    ))}

    {/* Mailing Address */}
    <h3 className="text-lg font-semibold mt-6">Mailing Address</h3>
    {["Address", "City", "State", "Zip/Postal Code"].map((label, i) => (
      <div className="flex flex-col" key={label}>
        <label>{label}</label>
        <input
          type="text"
          className="border p-2 rounded-md"
          value={formData.mailing_address[i]}
          onChange={(e) => handleChange("mailing_address", e.target.value, i)}
        />
      </div>
    ))}

    {/* Adoption Ambassador */}
    <h3 className="text-lg font-semibold mt-6">Adoption Ambassador</h3>
    {["First Name", "Last Name", "Phone", "Phone Ext", "Email", "Verify Email"].map((label, i) => (
      <div className="flex flex-col" key={label}>
        <label>{label}</label>
        <input
          type={i >= 4 ? "email" : "text"}
          className="border p-2 rounded-md"
          value={formData.adoption_ambassador[i]}
          onChange={(e) => handleChange("adoption_ambassador", e.target.value, i)}
        />
      </div>
    ))}

    {/* Veterinarian Info */}
    <h3 className="text-lg font-semibold mt-6">Veterinarian Information</h3>
    {["Vet Name", "Vet Phone", "Vet Phone Ext"].map((label, i) => (
      <div className="flex flex-col" key={label}>
        <label>{label}</label>
        <input
          type="text"
          className="border p-2 rounded-md"
          value={formData.veterinarian_info[i]}
          onChange={(e) => handleChange("veterinarian_info", e.target.value, i)}
        />
      </div>
    ))}

    {/* About Organization */}
    <h3 className="text-lg font-semibold mt-6">About Your Organization</h3>
    <div className="flex flex-col">
      <label>501(c)(3) Non-profit?</label>
      <select
        className="border p-2 rounded-md"
        value={formData.about_organization[0]}
        onChange={(e) => handleChange("about_organization", e.target.value, 0)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label>Tax ID Number</label>
      <input
        type="text"
        className="border p-2 rounded-md"
        value={formData.about_organization[1]}
        onChange={(e) => handleChange("about_organization", e.target.value, 1)}
      />
    </div>

    {/* Adopted Animals */}
    <h4 className="text-md font-semibold mt-4">Animals Adopted Out</h4>
    {Object.keys(formData.adopted).map((type) => (
      <div className="flex flex-col" key={type}>
        <label>{type}</label>
        <input
          type="number"
          min="0"
          className="border p-2 rounded-md"
          value={formData.adopted[type]}
          onChange={(e) =>
            handleChange("adopted", {
              ...formData.adopted,
              [type]: parseInt(e.target.value) || 0
            })
          }
        />
      </div>
    ))}

    {/* Fees and current animals */}
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

    <div className="flex flex-col">
      <label>Do you have an adoption contract?</label>
      <select
        className="border p-2 rounded-md"
        value={formData.medical_adoption[3]}
        onChange={(e) => handleChange("medical_adoption", e.target.value, 3)}
      >
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    {/* Online Presence */}
    <h3 className="text-lg font-semibold mt-6">Online Presence</h3>
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