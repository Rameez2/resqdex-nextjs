import { useUser } from "@/context/userContext";
import { updateOrgForm } from "@/lib/appwrite/org-from";
import withAuth from "@/lib/middlewares/withAuth";
import { useState } from "react";
import { Heart, FileText} from "lucide-react"
import OrgBasicInfo from "./orgComponents/OrgBasicInfo";
import OrgHours from "./orgComponents/orgHours";
import OrgAddress from "./orgComponents/OrgAddress";
import OrgMailAddress from "./orgComponents/orgMailAddress";
import OrgAdoptAmbassador from "./orgComponents/orgAdoptAmbassador";
import OrgVetInfo from "./orgComponents/OrgVetInfo";
import OrgTaxId from "./orgComponents/OrgTaxId";
import NumOfPets from "./orgComponents/aboutOrg/NumOfPets";
import AdoptionFeeRange from "./orgComponents/aboutOrg/AdoptionFeeRange";
import AnimalsAdoptedOut from "./orgComponents/aboutOrg/AnimalsAdoptedOut";
import OrgMedicalCare from "./orgComponents/aboutOrg/OrgMedicalCare";
import AdoptionContract from "./orgComponents/aboutOrg/AdoptionContract";
import MissionStatement from "./orgComponents/aboutOrg/MissionStatement";
import AdoptionPolicies from "./orgComponents/aboutOrg/AdoptionPolicies";
import AdoptionProcess from "./orgComponents/aboutOrg/AdoptionProcess";
import OnlineAdoptApplicationLink from "./orgComponents/aboutOrg/OnlineAdoptApplicationLink";
import OnlinePresence from "./orgComponents/aboutOrg/OnlinePresence";
import ButtonSpinner from "@/components/ui/buttonSpinner";


const initialState = {
  basic_info: [
    "", // Shelter Name
    "", // Director First Name
    "", // Director Last Name
    "", // Title
    "", // Organization Email
    "", // Type of Organization
    "", // hide info from public
  ],
  hours: [
    "Closed", // sun
    "9:00 AM - 6:00 PM", // mon
    "9:00 AM - 6:00 PM", // tue
    "9:00 AM - 6:00 PM", // wed
    "9:00 AM - 6:00 PM", // thu
    "9:00 AM - 5:00 PM", // fri
    "10:00 AM - 4:00 PM", // sat
  ],
  physical_address: [
    "", // Address
    "", // City
    "", // Zip
    "", // Country
    "", // Phone
    "", // Phone Ext
    "" // Fax
  ],
  mailing_address: [
    "", // Address
    "", // City
    "", // State/Country
    "" // Zip
  ],
  adoption_ambassador: [
    "", // First Name
    "", // Last Name
    "", // Phone
    "", // Phone Ext
    "", // Email
    "" // Password
  ],
  veterinarian_info: [
    "", // Vet Name
    "", // Vet Phone
    "" // Vet Phone Ext
  ],
  taxId: "", // Tax ID
  adoption_contract: "", // Adoption Contract File Id
  adopted_out :[
    false, // Dogs
    false, // Cats
    false, // Horses
    false, // Reptiles
    false, // Pocket Pals
    false, // Rabbits
    false, // Farm Animals
    false, // Birds
    false, // Exotics
    false, // Fish
    false, // Ferrets
  ],
  adoption_fees: [
    "250", // Highest Fee
    "25" // Lowest Fee
  ],
  current_animals: "0",
  animal_source: "",
  medical_adoption: [
    "", // Medical Care
    "", // Spay Policy
    "", // Sterilization
    // "All adoptions require signed contracts" // Has Contract
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


const OrganizationQuestionnaire = () => {
  const [formData, setFormData] = useState(initialState);
  const { loading, user, setUser } = useUser();
  const [submitLoading,setSubmitLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      console.log('form data', formData);

      await updateOrgForm(user.$id, user.organizationData.$id, formData);
      setUser({ ...user, status: "Pending" });
    } catch (error) {
      console.log(error);      
    }
    finally {
      setSubmitLoading(false);
    }
  };

  // Handler passed to OrgAddress to update specific index of physical_address
  const handlePhysicalAddressChange = (index, value) => {
    setFormData(prev => {
      const updatedAddress = [...prev.physical_address];
      updatedAddress[index] = value;
      return { ...prev, physical_address: updatedAddress };
    });
  };


  // when section is updated
  const updateSection = (sectionKey, updatedData) => {
    setFormData(prev => ({
      ...prev,
      [sectionKey]: updatedData,
    }));
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

        <form onSubmit={handleSubmit} className="space-y-8">

          <OrgBasicInfo data={formData.basic_info} onChange={(newData) => updateSection("basic_info", newData)} />

          <OrgHours data={formData.hours} onChange={(newHours) => updateSection("hours", newHours)} />

          <OrgAddress data={formData.physical_address} onChange={handlePhysicalAddressChange} />
          <OrgMailAddress mailingAddress={formData.mailing_address} sameData={formData.physical_address} onChange={(updatedAddress) => setFormData(prev => ({ ...prev, mailing_address: updatedAddress }))} />

          {/* <OrgAdoptAmbassador /> */}
          <OrgAdoptAmbassador data={formData.adoption_ambassador} sameData={formData.basic_info} onChange={(newData) => updateSection("adoption_ambassador", newData)} />

          <OrgVetInfo data={formData.veterinarian_info} onChange={(newData) => updateSection("veterinarian_info", newData)} />

          <OrgTaxId data={formData.taxId} onChange={(newTaxId) => updateSection("taxId", newTaxId)} />

          {/* About Your Organization */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center flex-col">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                About Your Organization
              </h2>
              <p className="text-gray-600 mt-1">Tell us more about your mission and operations</p>
            </div>

            <div className="p-6 space-y-6">
              <NumOfPets data={formData.current_animals} onChange={(newData) => updateSection("current_animals", newData)} />
              <div className="space-y-4">
                <AdoptionFeeRange data={formData.adoption_fees} onChange={(newData) => updateSection("adoption_fees", newData)} />

                <hr className="border-gray-200" />

                <AnimalsAdoptedOut data={formData.adopted_out} onChange={(newData) => updateSection("adopted_out", newData)} />

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

                <OrgMedicalCare data={formData.medical_adoption} onChange={(newData) => updateSection("medical_adoption", newData)}/>

                <AdoptionContract data={formData.adoption_contract} onChange={(newData) => updateSection("adoption_contract", newData)}/>


                <hr className="border-gray-200" />


                <div className="space-y-4">
                  <MissionStatement data={formData.mission} onChange={(newData) => updateSection("mission", newData)}/>

                  <AdoptionPolicies data={formData.adoption_policies} onChange={(newData) => updateSection("adoption_policies", newData)}/>

                  <AdoptionProcess data={formData.adoption_process} onChange={(newData) => updateSection("adoption_process", newData)}/>
                  <OnlineAdoptApplicationLink data={formData.adoption_link} onChange={(newData) => updateSection("adoption_link", newData)}/> 

                </div>
              </div>
            </div>
          </div>

          <OnlinePresence data={formData.online_presence} onChange={(newData) => updateSection("online_presence", newData)}/>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105"
            >
            {submitLoading && <ButtonSpinner/>}
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(OrganizationQuestionnaire);