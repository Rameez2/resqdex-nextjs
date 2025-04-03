import React, { useState, useEffect } from "react";
import { useUser } from "@/context/userContext";
import { approveOrganization, getAllUsers } from "@/lib/appwrite/admin";
import ButtonSpinner from "@/components/atoms/buttonSpinner";

const UsersManagement = () => {
    const [orgDetails, setOrgDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [filter2, setFilter2] = useState("all");
    const [loadingStates, setLoadingStates] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [selectedMoreInfo, setSelectedMoreInfo] = useState(null);

    const { user } = useUser();

    useEffect(() => {
        (async () => {
            try {
                let orgResponse = await getAllUsers();
                let filteredOrgDetails = orgResponse;

                if (filter === "adopters") {
                    filteredOrgDetails = filteredOrgDetails.filter((org) => org.role === "Adopter");
                } else if (filter === "organizations") {
                    filteredOrgDetails = filteredOrgDetails.filter((org) => org.role === "Organization");
                }

                if (filter2 !== "all") {
                    filteredOrgDetails = filteredOrgDetails.filter((org) => org.status === filter2);
                }

                setOrgDetails(filteredOrgDetails);
            } catch (error) {
                console.log("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [filter, filter2]);

    async function changeStatus(id, status) {
        setLoadingStates((prev) => ({ ...prev, [id]: status }));
        try {
            await approveOrganization(id, status);
            setOrgDetails((prev) =>
                prev.map((org) => (org.$id === id ? { ...org, status } : org))
            );
        } catch (error) {
            console.log("Error while approving:", error);
        } finally {
            setLoadingStates((prev) => ({ ...prev, [id]: null }));
        }
    }

    const filteredOrganizations = orgDetails.filter(
        (org) =>
            org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function showMoreInfoModel(moreInfoId) {
        setSelectedMoreInfo(moreInfoId);
        setShowMoreDetails(true);
    }

    function closeModal() {
        setShowMoreDetails(false);
        setSelectedMoreInfo(null);
    }

    return (
        <>
            {/* User Management Section */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <div>
                        {/* Dropdown Menu */}
                        <div className="relative">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="p-2 border rounded"
                            >
                                <option value="all">All</option>
                                <option value="adopters">Adopters</option>
                                <option value="organizations">Organizations</option>
                            </select>

                            <select
                                value={filter2}
                                onChange={(e) => setFilter2(e.target.value)}
                                className="p-2 border rounded ml-5"
                            >
                                <option value="all">All</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                            </select>
                        </div>


                    </div>

                    {/* Search Input */}
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    #
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                View
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Admin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ACtions
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredOrganizations.length > 0 ? (
                            filteredOrganizations.map((details, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            {index}
                                        </div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {/* <img
                                            className="w-10 h-10 rounded-full"
                                            src="/Testimonials.jpeg"
                                            alt="Jese image"
                                        /> */}
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{details.name}</div>
                                            <div className="font-normal text-gray-500">{details.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{details.status}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {details.status === "Apply" ? "No Application" : (
                                                <button
                                                    onClick={() => showMoreInfoModel(details)}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    View
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{details.role}</td>
                                    <td className="px-6 py-4">{details.isAdmin ? 'True' : 'False'}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => changeStatus(details.$id, "Approved")}
                                            disabled={loadingStates[details.$id] === "Approved"}
                                            href="#"
                                            className="px-3 py-1 bg-green-500 text-white rounded"
                                        >
                                        {loadingStates[details.$id] === "Approved" ? <ButtonSpinner/>:''}
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => changeStatus(details.$id, "Rejected")}
                                            disabled={loadingStates[details.$id] === "Rejected"}
                                            href="#"
                                            className="px-3 py-1 bg-red-500 text-white rounded ml-2"
                                        >
                                        {loadingStates[details.$id] === "Rejected" ? <ButtonSpinner/>:''}

                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="p-4 text-gray-500 text-center">No users found.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UsersManagement;
