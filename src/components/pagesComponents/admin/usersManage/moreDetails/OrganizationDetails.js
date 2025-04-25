import { changeUserStatus, getOrgDetails } from '@/lib/appwrite/admin';
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';

const OrganizationDetails = ({ user, setSelectedMoreInfo }) => {
  const [statusLoading, setStatusLoading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!user?.more_info) return;

    (async () => {
      try {
        setLoading(true);
        const detailsResponse = await getOrgDetails(user.more_info);
        setInfo(detailsResponse);
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
      setToast({ message: `Status changed to ${newStatus}`, type: "success" });
    } catch (err) {
      console.error("Error updating status:", err);
      setToast({ message: err.message || "Something went wrong", type: "error" });
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
        <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setSelectedMoreInfo(false)}>
          <X className="text-gray-600" size={24} />
        </div>

        <h1 className="text-[#e17716] text-4xl font-bold text-center mb-2">Organization Details</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={sectionTitle}>Shelter Info</h2>
            <ul className={listStyle}>
              {Info.shelter_info.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Physical Address</h2>
            <ul className={listStyle}>
              {Info.physical_address.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Mailing Address</h2>
            <ul className={listStyle}>
              {Info.mailing_address.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Ambassador</h2>
            <ul className={listStyle}>
              {Info.adoption_ambassador.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Veterinarian Info</h2>
            <ul className={listStyle}>
              {Info.veterinarian_info.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>About Organization</h2>
            <ul className={listStyle}>
              {Info.about_organization.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Animals Adopted</h2>
            <ul className={listStyle}>
              {Object.entries(Info.adopted).map(([type, count], idx) => (
                <li key={idx}>{type}: {count}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Fees</h2>
            <ul className={listStyle}>
              <li>Highest Fee: ${Info.adoption_fees[0]}</li>
              <li>Lowest Fee: ${Info.adoption_fees[1]}</li>
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Current Animals</h2>
            <p className="ml-6 text-[#000000]">{Info.current_animals}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Animal Source</h2>
            <p className="ml-6 text-[#000000]">{Info.animal_source}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Medical & Adoption</h2>
            <ul className={listStyle}>
              {Info.medical_adoption.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className={sectionTitle}>Mission</h2>
            <p className="ml-6 text-[#000000]">{Info.mission}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Policies</h2>
            <p className="ml-6 text-[#000000]">{Info.adoption_policies}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Process</h2>
            <p className="ml-6 text-[#000000]">{Info.adoption_process}</p>
          </div>

          <div>
            <h2 className={sectionTitle}>Adoption Link</h2>
            <a href={Info.adoption_link} className="ml-6 text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              {Info.adoption_link}
            </a>
          </div>

          <div>
            <h2 className={sectionTitle}>Online Presence</h2>
            <ul className={listStyle}>
              {Info.online_presence.map((url, idx) => (
                <li key={idx}><a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{url}</a></li>
              ))}
            </ul>
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
