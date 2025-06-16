"use client"
import { useState } from "react";
// import { updateRecord } from "@/lib/appwrite/dataForms";
import { useUser } from "@/context/userContext";
import Toast from "@/components/ui/Toast";

import { Heart, Home } from "lucide-react"
import PersonalInfo from "./adopterComp/PersonalInfo";
import AddressInfo from "./adopterComp/AddressInfo";
import MailAddress from "./adopterComp/MailAddress";
import HouseHoldInfo from "./adopterComp/HouseHoldInfo";
import ExpericenceWithPets from "./adopterComp/ExpericenceWithPets";
import LifeStyleSchedule from "./adopterComp/LifeStyleSchedule";
import FinancialResponsibility from "./adopterComp/FinancialResponsibility";
import PreferenceExpect from "./adopterComp/PreferenceExpect";
import EmergencyCommitment from "./adopterComp/EmergencyCommitment";
import { updateRecord } from "@/lib/appwrite/dataForms";

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
  pet_preference_expectation: [
    "", // Why do you want to adopt?
    "", // What qualities are you looking for in a pet?
    "", // What age are you interested in?
    "", // Are you willing to adopt a pet with special needs or medical conditions
    "", // What behaviors would be unacceptable to you?
    "", // Are you prepared yo work on behavioral issues with training ? ☐ Yes ☐ No
  ],
  emergency_commitment: [
    "", // If you move what will happen to your pet?
    "", // What would cause you to give up your pet?
    "", // Are you prepared for a long term commitment (10-20+ years) ? ☐ Yes ☐ No 
    "", // What would cause you to give up your pet?
  ],

};

// ----------------- MAIN COMPONENT -----------------
const AdopterQuestionnaire = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const { user, setUser } = useUser();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('fornData', formData);
      await updateRecord(user.$id, user.additionalInfo.$id, formData, "adopter");
      user.status = "Pending";
      setUser(user);

    } catch (error) {
      console.log(error);
    }
  };


  // when section is updated
  const updateSection = (sectionKey, updatedData) => {
    setFormData(prev => ({
      ...prev,
      [sectionKey]: updatedData,
    }));
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-50 p-4">
      {/* Modal Container with Scrollable Content */}
      <div className="relative bg-white w-[80%] mr-auto ml-auto p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* MODEL STARTS */}

        <div className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-[#8a0e10]" />
                <h1 className="text-3xl font-bold text-gray-900">Pet Adoption Application</h1>
              </div>
              <p className="text-gray-600 max-w-xl mx-auto">
                Help us find the perfect match for you and your new companion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <PersonalInfo data={formData.personal_info} onChange={(newData) => updateSection('personal_info', newData)} />
              {/* Address Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-white" />
                    <h2 className="text-lg font-semibold text-white">Address Information</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <AddressInfo data={formData.address} onChange={(newData) => updateSection('address', newData)} />

                    <MailAddress data={formData.mail_address} onChange={(newData) => updateSection('mail_address', newData)}/>
                  </div>
                </div>
              </div>

            <HouseHoldInfo data={formData.household_info} onChange={(newData) => updateSection('household_info', newData)}/>

            <ExpericenceWithPets data={formData.experience_with_pets} onChange={(newData) => updateSection('experience_with_pets', newData)}/> 

            <LifeStyleSchedule data={formData.lifestyle_schedule} onChange={(newData) => updateSection('lifestyle_schedule', newData)}/>

            <FinancialResponsibility data={formData.financial_responsibility} onChange={(newData) => updateSection('financial_responsibility', newData)}/>

              <PreferenceExpect data={formData.pet_preference_expectation} onChange={(newData) => updateSection('pet_preference_expectation', newData)}/>

              <EmergencyCommitment data={formData.emergency_commitment} onChange={(newData) => updateSection('emergency_commitment', newData)}/>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#8a0e10] text-white font-medium rounded-md hover:bg-[#6b0b0d] transition-colors duration-200 flex items-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Submit Application
                </button>
              </div>

              {/* Footer Message */}
              <div className="text-center pt-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-2xl mx-auto">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-gray-800">Thank you for choosing Resqdex!</span>
                    <br />
                    Your application will be reviewed within 2-3 business days.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>




      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}
    </div>
  );
};

export default AdopterQuestionnaire;
