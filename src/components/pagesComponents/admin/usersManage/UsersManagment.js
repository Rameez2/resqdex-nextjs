import React, { useEffect, useState } from "react"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { getAllUsers, changeUserStatus } from "@/lib/appwrite/admin"
import ButtonSpinner from "@/components/ui/buttonSpinner"
import MoreDetails from "./moreDetails/MoreDetails"
import AdopterDetails from "./moreDetails/AdopterDetails"
import OrganizationDetails from "./moreDetails/OrganizationDetails"
import Toast from "@/components/ui/Toast"

export default function UsersManagement() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loadingStates, setLoadingStates] = useState({})
  const [filter, setFilter] = useState("all") // Role filter (Adopters, Organizations)
  const [filter2, setFilter2] = useState("all");
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [selectedMoreInfo, setSelectedMoreInfo] = useState(null);
    const [toast,setToast] = useState(null);
  

  useEffect(() => {
    ; (async () => {
      try {
        const res = await getAllUsers()
        setUsers(res)
      } catch (err) {
        console.error("Failed to fetch users", err)
      }
    })()
  }, []);


  useEffect(() => {
    (async () => {
      try {
        let orgResponse = await getAllUsers()
        let filteredOrgDetails = orgResponse

        // Apply role filter
        if (filter === "adopters") {
          filteredOrgDetails = filteredOrgDetails.filter((org) => org.role === "Adopter")
        } else if (filter === "organizations") {
          filteredOrgDetails = filteredOrgDetails.filter((org) => org.role === "Organization")
        }

        // Apply status filter
        if (filter2 !== "all") {
          filteredOrgDetails = filteredOrgDetails.filter((org) => org.status === filter2)
        }

        setUsers(filteredOrgDetails)
      } catch (error) {
        console.log("Error fetching users:", error)
      }
    })()
  }, [filter, filter2])


  const handleStatusChange = async (userId, newStatus) => {
    setLoadingStates((prev) => ({ ...prev, [userId]: newStatus }))
    try {
      setToast(null)
      await changeUserStatus(userId, newStatus)
      setToast({ message: `Status change to ${newStatus}`, type: "success" });

      setUsers((prev) =>
        prev.map((user) =>
          user.$id === userId ? { ...user, status: newStatus } : user
        )
      )
    } catch (err) {
      console.error("Status update failed", err);
      setToast({ message: error.message, type: "error" });

    } finally {
      setLoadingStates((prev) => ({ ...prev, [userId]: null }))
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function showMoreInfoModel(moreInfoId) {
    console.log('model', moreInfoId);

    setSelectedMoreInfo(moreInfoId);
    setShowMoreDetails(true);
  }

  function closeModal() {
    setShowMoreDetails(false);
    setSelectedMoreInfo(null);
  }

  return (
    <div className="min-h-screen bg-[#fbf5f0] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#0a1330]">Users Management</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#0b1739] text-white pl-10 pr-4 py-2 rounded w-[300px] focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="relative">
              {/* Role Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="all">All Roles</option>
                <option value="adopters">Adopters</option>
                <option value="organizations">Organizations</option>
              </select>

              {/* Status Filter */}
              <select
                value={filter2}
                onChange={(e) => setFilter2(e.target.value)}
                className="p-2 border rounded ml-5"
              >
                <option value="all">All Status</option>
                <option value="Rejected">Rejected</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
              </select>
            </div>


            <Button className="bg-[#e17716] hover:bg-[#e17716]/90 text-white">
              Add Organization
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#0a1330] rounded-lg overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#343b4f]">
            <h2 className="text-white font-medium">All Organization</h2>
            <span className="text-[#aeb9e1]">
              1 - {filteredUsers.length} of {users.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-white text-sm">
              <thead className="text-[#aeb9e1] border-b border-[#343b4f] bg-[#0a1330]">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="h-4 w-4 rounded" />
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">View Documents</th>
                  <th className="px-6 py-3 text-left font-medium">Role</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#343b4f]">
                {filteredUsers.map((user) => (
                  <tr key={user.$id} className="bg-[#0a1330]">
                    <td className="px-6 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded" />
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-[#7e89ac]">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {user.status === "Apply" ? "No Application" : (
                          <button
                            onClick={() => showMoreInfoModel(user)}
                            className="text-blue-500 hover:underline"
                          >
                            View
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-3">{user.role}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${user.status === "Approved"
                          ? "bg-[#05c168]/20 text-[#05c168]"
                          : user.status === "Rejected"
                            ? "bg-[#f12727]/20 text-[#f12727]"
                            : "bg-[#7e89ac]/20 text-[#7e89ac]"
                          }`}
                      >
                        • {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-[#05c168]/10 hover:bg-[#05c168]/20 text-[#05c168] h-7 px-2 rounded"
                          onClick={() => handleStatusChange(user.$id, "Approved")}
                          disabled={loadingStates[user.$id] === "Approved"}
                        >
                          {loadingStates[user.$id] === "Approved" ? (
                            <ButtonSpinner />
                          ) : (
                            <Check className="h-4 w-4 mr-1" />
                          )}
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          className="bg-[#f12727]/10 hover:bg-[#f12727]/20 text-[#f12727] h-7 px-2 rounded"
                          onClick={() => handleStatusChange(user.$id, "Rejected")}
                          disabled={loadingStates[user.$id] === "Rejected"}
                        >
                          {loadingStates[user.$id] === "Rejected" ? (
                            <ButtonSpinner />
                          ) : (
                            <X className="h-4 w-4 mr-1" />
                          )}
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showMoreDetails && selectedMoreInfo.role === "Adopter" ?
           <AdopterDetails user={selectedMoreInfo} setSelectedMoreInfo={setSelectedMoreInfo} /> : 
           showMoreDetails && selectedMoreInfo.role === "Organization" ? <OrganizationDetails user={selectedMoreInfo} setSelectedMoreInfo={setSelectedMoreInfo}/>:''
           }
          {/* {showMoreDetails ? <MoreDetails setShowMoreDetails={setShowMoreDetails} detailsProp={selectedMoreInfo} /> : ''} */}

          {/* Pagination (optional) */}
          <div className="flex justify-end items-center gap-4 p-4 text-white">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#aeb9e1]">Rows per page:</span>
              <div className="flex items-center gap-1 bg-[#0b1739] px-3 py-1 rounded">
                <span>10</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-[#0b1739]">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-[#0b1739]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}

    </div>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
    </svg>
  )
}
