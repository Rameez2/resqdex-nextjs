import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ButtonSpinner from '@/components/ui/buttonSpinner';
import { changeUserStatus, getMoreDetails } from '@/lib/appwrite/admin';
import Toast from '@/components/ui/Toast';
import { Heart, Home, User, DollarSign, Calendar, Shield, PawPrint, Eye, Download, Mail } from "lucide-react"

const AdopterDetails = ({ user, setSelectedMoreInfo }) => {
  const [statusLoading, setStatusLoading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState(null);
  const [toast,setToast] = useState(null);
  

// FETCH ADOPTER DETAILS
useEffect(() => {
  if (!user?.additionalInfo) return;

  (async () => {
    try {
      setLoading(true);
      // const detailsResponse = await getMoreDetails(user.more_info);
      setInfo(user.additionalInfo);
      // console.log('info set', detailsResponse);
    } catch (err) {
      console.error("Error fetching details:", err);

    } finally {
      setLoading(false);
    }
  })();
}, [user?.more_info]);

  const changeStatus = async (newStatus) => {
    try {
      setToast(null)
      setStatusLoading(newStatus);
      console.log('Changing status for', Info.$id, 'to', newStatus);
      await changeUserStatus(user.$id, newStatus);
      setToast({ message: `Status change to ${newStatus}`, type: "success" });

      console.log('Status changed successfully!');
    } catch (err) {
      console.error("Error updating status:", err);
      setToast({ message: error.message, type: "error" });

    } finally {
      setStatusLoading(null);
    }
  };

  const buttonContainerClasses = "mt-5 flex justify-center gap-3";
  const buttonClasses = "py-2 px-5 rounded-md border-none text-lg cursor-pointer min-w-[120px]";
  const approveButtonClasses = "bg-green-500 text-white";
  const rejectButtonClasses = "bg-red-500 text-white";

  const overlayClasses = "fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center";
  const containerClasses = "w-full max-w-5xl bg-[#fff5ef] border border-[#ffdfc1] rounded-lg p-8 relative max-h-[90vh] overflow-y-auto scrollbar-hidden";

  if (loading) {
    return (
      <div className={overlayClasses}>
        <div className="text-white text-lg">Loading Info ...</div>
      </div>
    );
  }

  return (
    <div className={overlayClasses}>
      <div className={containerClasses}>
        {/* Close icon */}
        <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setSelectedMoreInfo(false)}>
          <X className="text-gray-600" size={24} />
        </div>


{/* MODEL CONTENT */}
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#8a0e10] p-3 rounded-full flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Pet Adoption Application</h1>
                  <p className="text-gray-600 mt-1">Application ID: {Info.$id}</p>
                  <p className="text-sm text-gray-500 mt-1">Submitted: {new Date(Info.$createdAt).toLocaleString()}</p>
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Under Review
                </span>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#8a0e10] text-white rounded-md hover:bg-[#6b0b0d] transition-colors text-sm">
                    <Download className="h-4 w-4" />
                    Export PDF
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#8a0e10] text-[#8a0e10] rounded-md hover:bg-[#8a0e10] hover:text-white transition-colors text-sm">
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Takes 3 columns */}
          <div className="xl:col-span-3 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">First Name</label>
                    <p className="text-gray-900 font-medium">{Info.personal_info[0]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Last Name</label>
                    <p className="text-gray-900 font-medium">{Info.personal_info[1]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Date of Birth</label>
                    <p className="text-gray-900 font-medium">{Info.personal_info[2]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                    <p className="text-gray-900 font-medium">{Info.personal_info[3]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                    <p className="text-gray-900 font-medium">{Info.personal_info[4]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Address Information</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-8">
                  {/* Current Address */}
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-4">Current Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-500 mb-1">Street Address</label>
                        <p className="text-gray-900 font-medium">{Info.address[0]}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                        <p className="text-gray-900 font-medium">{Info.address[1]}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">ZIP Code</label>
                        <p className="text-gray-900 font-medium">{Info.address[2]}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-500 mb-1">State</label>
                        <p className="text-gray-900 font-medium">{Info.address[3]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-md font-semibold text-gray-900 mb-4">Mailing Address</h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-500 mb-1">Street Address</label>
                        <p className="text-gray-900 font-medium">{Info.mail_address[0]}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                        <p className="text-gray-900 font-medium">{Info.mail_address[1]}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">ZIP Code</label>
                        <p className="text-gray-900 font-medium">{Info.mail_address[2]}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-500 mb-1">State</label>
                        <p className="text-gray-900 font-medium">{Info.mail_address[3]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Household Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Household Information</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Number of Adults</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[0]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Number of Children</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[1]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Type of Home</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[2]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Has Yard</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[3]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Ages of Children</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[4]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Primary Caregiver</label>
                    <p className="text-gray-900 font-medium">{Info.household_info[5]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      All Members Agree to Adoption
                    </label>
                    <p className="text-gray-900 font-medium">{Info.household_info[6]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Allergies to Animals</label>
                    <p className="text-gray-900">{Info.household_info[7]}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Where Pet Will Spend Most Time
                    </label>
                    <p className="text-gray-900">
                      {Info.household_info[8]}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Where Pet Will Sleep</label>
                    <p className="text-gray-900">{Info.household_info[9]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience with Pets */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <PawPrint className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Experience with Pets</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Owned Pets Before</label>
                      <p className="text-gray-900 font-medium">{Info.experience_with_pets[0]}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Time Since Last Pet</label>
                      <p className="text-gray-900 font-medium">{Info.experience_with_pets[1]}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Currently Have Pets</label>
                      <p className="text-gray-900 font-medium">{Info.experience_with_pets[2]}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Vaccinations Up to Date</label>
                      <p className="text-gray-900 font-medium">{Info.experience_with_pets[3]}</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Types of Pets Owned</label>
                    <p className="text-gray-900">{Info.experience_with_pets[4]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      What Happened to Previous Pets
                    </label>
                    <p className="text-gray-900">{Info.experience_with_pets[5]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Ever Surrendered a Pet</label>
                    <p className="text-gray-900">{Info.experience_with_pets[6]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Preferences & Expectations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Pet Preferences & Expectations</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Age Preference</label>
                      <p className="text-gray-900 font-medium">{Info.pet_preference_expectation[0]}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Special Needs Acceptance</label>
                      <p className="text-gray-900 font-medium">{Info.pet_preference_expectation[1]}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Training Commitment</label>
                      <p className="text-gray-900 font-medium">{Info.pet_preference_expectation[2]}</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Why Adopt a Pet</label>
                    <p className="text-gray-900">
                      {Info.pet_preference_expectation[3]}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Desired Qualities</label>
                    <p className="text-gray-900">{Info.pet_preference_expectation[4]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Unacceptable Behaviors</label>
                    <p className="text-gray-900">
                      {Info.pet_preference_expectation[5]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency & Commitment */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-semibold text-white">Emergency & Commitment</h2>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Long-term Commitment</label>
                    <p className="text-gray-900 font-medium">{Info.emergency_commitment[0]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">If Moving</label>
                    <p className="text-gray-900">{Info.emergency_commitment[1]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Reasons to Give Up Pet</label>
                    <p className="text-gray-900">{Info.emergency_commitment[2]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Additional Information</label>
                    <p className="text-gray-900">
                     {Info.emergency_commitment[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
            {/* Quick Info */}
          <div className="xl:col-span-1 space-y-6">
            {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-4 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Quick Information</h3>
              </div>
              <div className="px-4 py-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">Applicant:</span>
                    <span className="text-sm font-medium text-right"></span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">Home Type:</span>
                    <span className="text-sm font-medium">House</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">Has Yard:</span>
                    <span className="text-sm font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">Pet Experience:</span>
                    <span className="text-sm font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">Preferred Age:</span>
                    <span className="text-sm font-medium text-right">Young (1-3 years)</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Lifestyle & Schedule */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-4 py-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Lifestyle & Schedule</h3>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Hours Pet Will Be Alone</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.lifestyle_schedule[0]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Activity Level</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.lifestyle_schedule[1]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Travel Frequently</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.lifestyle_schedule[2]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Daily Schedule</label>
                    <p className="text-gray-900 text-sm">
                      {Info.lifestyle_schedule[3]}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Travel Arrangements</label>
                    <p className="text-gray-900 text-sm">{Info.lifestyle_schedule[4]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Responsibility */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8a0e10] px-4 py-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Financial Responsibility</h3>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Financially Prepared</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.financial_responsibility[0]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Emergency Expenses</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.financial_responsibility[1]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Pet Insurance</label>
                    <p className="text-gray-900 font-medium text-sm">{Info.financial_responsibility[2]}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Emergency Bill Handling</label>
                    <p className="text-gray-900 text-sm">
                      {Info.financial_responsibility[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className={buttonContainerClasses}>
          <button
            onClick={() => changeStatus("Approved")}
            disabled={statusLoading !== null}
            className={`${buttonClasses} ${approveButtonClasses}`}
          >
            {statusLoading === "Approved" && <ButtonSpinner />}
            Approve
          </button>
          <button
            onClick={() => changeStatus("Rejected")}
            disabled={statusLoading !== null}
            className={`${buttonClasses} ${rejectButtonClasses}`}
          >
            {statusLoading === "Rejected" && <ButtonSpinner />}
            Reject
          </button>
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}

    </div>
  );
};

export default AdopterDetails;
