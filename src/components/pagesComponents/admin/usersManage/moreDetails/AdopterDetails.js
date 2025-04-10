import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ButtonSpinner from '@/components/ui/buttonSpinner';
import { changeUserStatus, getMoreDetails } from '@/lib/appwrite/admin';
import Toast from '@/components/ui/Toast';

const AdopterDetails = ({ user, setSelectedMoreInfo }) => {
  const [statusLoading, setStatusLoading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState(null);
  const [toast,setToast] = useState(null);
  

// FETCH ADOPTER DETAILS
useEffect(() => {
  if (!user?.more_info) return;

  (async () => {
    try {
      setLoading(true);
      const detailsResponse = await getMoreDetails(user.more_info);
      setInfo(detailsResponse);
      console.log('info set', detailsResponse);
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

        <h1 className="text-[#e17716] text-4xl font-bold text-center mb-2">Adopter Details</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Personal Information</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.personal_info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Household Information */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Household Information</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.household_info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Experience with Pets */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Experience with Pets</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.experience_with_pets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Adoption Intentions */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Adoption Intentions</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.adoption_intentions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Lifestyle Commitment */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Lifestyle Commitment</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.lifestyle_commitment.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Financial Considerations */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Financial Considerations</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.financial_considerations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* References */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">References</h2>
            <ul className="list-disc ml-6 text-[#000000] space-y-2">
              {Info.references.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-[#e17716] text-xl font-semibold mb-4">Additional Information</h2>
            <p className="ml-6 text-[#000000]">{Info.additional_info}</p>
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
