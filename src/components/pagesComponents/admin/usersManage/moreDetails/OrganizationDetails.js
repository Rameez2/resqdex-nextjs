import { changeUserStatus, getMoreDetails } from '@/lib/appwrite/admin';
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';

const OrganizationDetails = ({ user, setSelectedMoreInfo }) => {
  const [statusLoading, setStatusLoading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState(null);
  const [toast,setToast] = useState(null);

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
        setToast(null);
      setStatusLoading(newStatus);
      await changeUserStatus(user.$id, newStatus);
      setToast({ message: `Status change to ${newStatus}`, type: "success" });
    } catch (err) {
      console.error("Error updating status:", err);
      setToast({ message: error.message, type: "error" });
    } finally {
      setStatusLoading(null);
    }
  };

  const overlayClasses = "fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center";
  const containerClasses = "w-full max-w-5xl bg-[#fff5ef] border border-[#ffdfc1] rounded-lg p-8 relative max-h-[90vh] overflow-y-auto scrollbar-hidden";
  const sectionTitle = "text-[#e17716] text-xl font-semibold mb-4";
  const listStyle = "list-disc ml-6 text-[#000000] space-y-2";

  const buttonContainerClasses = "mt-5 flex justify-center gap-3";
  const buttonClasses = "py-2 px-5 rounded-md border-none text-lg cursor-pointer min-w-[120px]";
  const approveButtonClasses = "bg-green-500 text-white";
  const rejectButtonClasses = "bg-red-500 text-white";

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

        <h1 className="text-[#e17716] text-4xl font-bold text-center mb-2">Organization Details</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={sectionTitle}>Personal Information</h2>
            <ul className={listStyle}>
              {Info.personal_info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Mission and Vision</h2>
            <ul className={listStyle}>
              {Info.mission_and_vision.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Services</h2>
            <ul className={listStyle}>
              {Info.services.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Legal and Compliance</h2>
            <ul className={listStyle}>
              {Info.legal_and_compliance.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Partnership and Collaborations</h2>
            <ul className={listStyle}>
              {Info.partnership_and_collabs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Process</h2>
            <ul className={listStyle}>
              {Info.adoption_process.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Feedback and Impact</h2>
            <ul className={listStyle}>
              {Info.feedback_and_impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Operations and Staffing</h2>
            <p className="ml-6 text-[#000000]">{Info.operations_and_staffing}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Funding and Financials</h2>
            <p className="ml-6 text-[#000000]">{Info.funding_and_financials}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Additional Info</h2>
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

export default OrganizationDetails;
