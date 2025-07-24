"use client"

import { useState } from "react"

const StaffManagement = () => {
  const [viewMode, setViewMode] = useState("Cards")

  const staffMembers = [
    {
      id: "EMP-2024-001",
      name: "Sarah Martinez",
      role: "Operations Manager",
      department: "Operations Department",
      email: "sarah@rescue.org",
      phone: "(512) 555-0123",
      startDate: "Jan 15, 2022",
      status: "Active",
      initials: "SM",
      metric1: { value: 127, label: "Animals Helped" },
      metric2: { value: 3.2, label: "Years Service" },
      avatarColor: "bg-purple-500",
    },
    {
      id: "EMP-2024-002",
      name: "Mike Johnson",
      role: "Adoption Specialist",
      department: "Operations Department",
      email: "mike@rescue.org",
      phone: "(512) 555-0124",
      startDate: "Mar 20, 2023",
      status: "Active",
      initials: "MJ",
      metric1: { value: 89, label: "Applications" },
      metric2: { value: 1.8, label: "Years Service" },
      avatarColor: "bg-blue-500",
    },
    {
      id: "EMP-2024-003",
      name: "Dr. Emily Santos",
      role: "Veterinary Director",
      department: "Medical Department",
      email: "emily@rescue.org",
      phone: "(512) 555-0125",
      startDate: "Aug 10, 2021",
      status: "Away",
      initials: "ES",
      metric1: { value: 567, label: "Treatments" },
      metric2: { value: 3.8, label: "Years Service" },
      avatarColor: "bg-indigo-500",
    },
    {
      id: "EMP-2024-004",
      name: "Jennifer Adams",
      role: "Transport Coordinator",
      department: "Transport Department",
      email: "jennifer@rescue.org",
      phone: "(512) 555-0126",
      startDate: "Nov 5, 2023",
      status: "Active",
      initials: "JA",
      metric1: { value: 234, label: "Transports" },
      metric2: { value: 0.2, label: "Years Service" },
      avatarColor: "bg-green-500",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center text-white space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Staff Management</h1>
          </div>
          <p className="text-purple-100 text-lg">Employee accounts, role management, and team coordination tools</p>
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-wrap items-center gap-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-sm">Department</span>
            <select className="px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md text-sm w-40">
              <option>All Departments</option>
              <option>Operations</option>
              <option>Medical</option>
              <option>Transport</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Status</span>
            <select className="px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md text-sm w-32">
              <option>All Status</option>
              <option>Active</option>
              <option>Away</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Role</span>
            <select className="px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md text-sm w-32">
              <option>All Roles</option>
              <option>Manager</option>
              <option>Specialist</option>
              <option>Director</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search staff members"
            className="px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/70 rounded-md w-64"
          />

          <div className="flex gap-2 ml-auto">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md text-sm flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export Staff List
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md text-sm flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0v10a2 2 0 002 2h8a2 2 0 002-2V7H7z"
                />
              </svg>
              Manage Schedules
            </button>
            <button className="px-4 py-2 bg-white text-purple-600 hover:bg-white/90 rounded-md text-sm flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Staff Member
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-600">Total Staff</div>
                <div className="text-xs text-green-600 mt-1">+3 this month</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <div className="h-6 w-6 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">34</div>
                <div className="text-sm text-gray-600">Currently Active</div>
                <div className="text-xs text-green-600 mt-1">72% online rate</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Departments</div>
                <div className="text-xs text-green-600 mt-1">Well distributed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">94%</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
                <div className="text-xs text-green-600 mt-1">+2% improvement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-gray-900">Staff Directory</h2>
              </div>
              <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                {["Cards", "List", "Table"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      viewMode === mode ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {staffMembers.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 ${member.avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}
                  >
                    {member.initials}
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                        <p className="text-sm text-gray-500">{member.department}</p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          member.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Employee ID:</span>
                        <div className="font-medium">{member.id}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Start Date:</span>
                        <div className="font-medium">{member.startDate}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Email:</span>
                        <div className="font-medium">{member.email}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Phone:</span>
                        <div className="font-medium">{member.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{member.metric1.value}</div>
                          <div className="text-xs text-gray-500">{member.metric1.label}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{member.metric2.value}</div>
                          <div className="text-xs text-gray-500">{member.metric2.label}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          View
                        </button>
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffManagement
