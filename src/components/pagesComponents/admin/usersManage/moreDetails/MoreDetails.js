import { changeUserStatus, getMoreDetails } from '@/lib/appwrite/admin';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Importing the close (X) icon from lucide-react
import AdopterDetails from './AdopterDetails';
import OrganizationDetails from './OrganizationDetails';

const MoreDetails = ({ detailsProp, setShowMoreDetails }) => {
    const [details, setDetails] = useState(null);
    const [status, setStatus] = useState(detailsProp.status);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const detailsResponse = await getMoreDetails(detailsProp.more_info);
                setDetails(detailsResponse);
                console.log('userr',detailsProp);
                console.log('got details',detailsResponse);
                
                console.log(detailsResponse);
            } catch (err) {
                console.error("Error fetching details:", err);
                setError("Error fetching details.");
            } finally {
                setLoading(false);
            }
        })();
    }, [detailsProp.more_info]);

    // const changeStatus = async (newStatus) => {
    //     try {
    //         setStatusLoading(newStatus);
    //         console.log('Changing status for', detailsProp.$id, 'to', newStatus);
    //         await changeUserStatus(detailsProp.$id, newStatus);
    //         setStatus(newStatus);
    //         console.log('Status changed successfully!');
    //     } catch (err) {
    //         console.error("Error updating status:", err);
    //     } finally {
    //         setStatusLoading(null);
    //     }
    // };

    // Tailwind CSS classes
    const containerClasses = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl p-5 bg-white rounded-lg shadow-lg z-50 overflow-y-auto max-h-[80vh] border-4 border-red-500 scrollbar-hidden";
    
    if (loading) {
        return <div className="text-center p-5">Loading details...</div>;
    }
    if (error) {
        return <div className="text-red-500 text-center p-5">{error}</div>;
    }

    return (
        <div className={containerClasses}>
            {/* Close icon */}
            <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowMoreDetails(false)}>
                <X className="text-gray-600" size={24} />
            </div>

            {details ? (
                <>
                    <div>
                        {detailsProp.role === "Organization" ? (
                            <OrganizationDetails Info={details} />
                        ) : (
                            <AdopterDetails Info={details} />
                        )}
                    </div>
                    {/* <div className={buttonContainerClasses}>
                        <button
                            onClick={() => changeStatus("Approved")}
                            disabled={statusLoading !== null}
                            className={`${buttonClasses} ${approveButtonClasses}`}
                        >
                            {statusLoading === "Approved" && <ButtonSpinner/>}
                            Approve
                        </button>
                        <button
                            onClick={() => changeStatus("Rejected")}
                            disabled={statusLoading !== null}
                            className={`${buttonClasses} ${rejectButtonClasses}`}
                        >
                            {statusLoading === "Rejected" && <ButtonSpinner/>}
                            Reject
                        </button>
                    </div> */}
                </>
            ) : (
                <p className="text-center">No details available.</p>
            )}
        </div>
    );
};

export default MoreDetails;
