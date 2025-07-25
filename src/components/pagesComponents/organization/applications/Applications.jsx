"use client"

import { useState, useEffect } from "react"

export default function Applications() {
  const [applications, setApplications] = useState({
    submitted: [
      {
        id: 1,
        name: "Sarah Johnson",
        type: "Adoption",
        typeColor: "green",
        description: "For: Bella (Golden Retriever) • Submitted 2 hours ago",
        actions: ["Start Review", "Contact"],
      },
      {
        id: 2,
        name: "Mike Rodriguez",
        type: "Volunteer",
        typeColor: "blue",
        description: "Dog walking & socialization • Submitted 1 day ago",
        actions: ["Start Review", "Contact"],
      },
    ],
    screening: [
      {
        id: 3,
        name: "David Wilson",
        type: "Adoption",
        typeColor: "green",
        description: "For: Max (German Shepherd) • Reference check pending",
        actions: ["Continue", "Contact"],
      },
    ],
    interview: [
      {
        id: 4,
        name: "Jennifer Adams",
        type: "Adoption",
        typeColor: "green",
        description: "For: Luna (Mixed breed) • Scheduled tomorrow",
        actions: ["Join Call", "Reschedule"],
      },
    ],
    approval: [
      {
        id: 5,
        name: "Lisa Chen",
        type: "Adoption",
        typeColor: "green",
        description: "For: Rocky (Labrador) • Approved pending final steps",
        actions: ["Finalize", "Contact"],
      },
      {
        id: 6,
        name: "Tom Martinez",
        type: "Foster",
        typeColor: "blue",
        description: "Emergency foster • Approved for immediate placement",
        actions: ["Place Pet", "Contact"],
      },
    ],
    rejected: [
      {
        id: 7,
        name: "Mark Thompson",
        type: "Adoption",
        typeColor: "red",
        description: "For: Buddy (Beagle) • Housing requirements not met",
        actions: ["Send Letter", "Archive"],
      },
    ],
  })

  const [draggedItem, setDraggedItem] = useState(null)
  const [draggedFrom, setDraggedFrom] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const showErrorToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
  }

  const getStageDisplayName = (stage) => {
    const names = {
      submitted: "Submitted",
      screening: "Screening",
      interview: "Interview",
      approval: "Approval",
      rejected: "Rejected",
    }
    return names[stage] || stage
  }

  const handleDragStart = (e, application, fromColumn) => {
    setDraggedItem(application)
    setDraggedFrom(fromColumn)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e, toColumn) => {
    e.preventDefault()

    if (!draggedItem || !draggedFrom) return

    // Define the column order
    const columnOrder = ["submitted", "screening", "interview", "approval", "rejected"]
    const fromIndex = columnOrder.indexOf(draggedFrom)
    const toIndex = columnOrder.indexOf(toColumn)

    // Only allow forward movement to the next stage
    if (toIndex === fromIndex + 1) {
      e.dataTransfer.dropEffect = "move"
    } else {
      e.dataTransfer.dropEffect = "none"
    }
  }

  const handleDrop = (e, toColumn) => {
    e.preventDefault()

    if (!draggedItem || !draggedFrom) return

    // Define the column order
    const columnOrder = ["submitted", "screening", "interview", "approval", "rejected"]
    const fromIndex = columnOrder.indexOf(draggedFrom)
    const toIndex = columnOrder.indexOf(toColumn)

    // Only allow forward movement to the next stage
    if (toIndex === fromIndex + 1) {
      setApplications((prev) => {
        const newApplications = { ...prev }

        // Remove from source column
        newApplications[draggedFrom] = newApplications[draggedFrom].filter((app) => app.id !== draggedItem.id)

        // Add to target column
        newApplications[toColumn] = [...newApplications[toColumn], draggedItem]

        return newApplications
      })
    } else {
      // Show error toast for invalid drop
      let errorMessage = ""

      if (toIndex < fromIndex) {
        errorMessage = `Cannot move backward! Applications can only move forward in sequence.`
      } else if (toIndex > fromIndex + 1) {
        const nextStage = getStageDisplayName(columnOrder[fromIndex + 1])
        errorMessage = `Cannot skip stages! Please move to "${nextStage}" first.`
      } else if (toIndex === fromIndex) {
        errorMessage = `Application is already in the "${getStageDisplayName(toColumn)}" stage.`
      } else {
        errorMessage = `Invalid move! Applications must follow the sequential workflow.`
      }

      console.log("Showing error toast:", errorMessage) // Debug log
      showErrorToast(errorMessage)
    }

    setDraggedItem(null)
    setDraggedFrom(null)
  }

  const getColumnConfig = (columnKey) => {
    const configs = {
      submitted: {
        title: "Submitted",
        icon: (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ),
        badgeColor: "bg-orange-500",
      },
      screening: {
        title: "Screening",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        ),
        badgeColor: "bg-orange-500",
      },
      interview: {
        title: "Interview",
        icon: (
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        badgeColor: "bg-yellow-500",
      },
      approval: {
        title: "Approval",
        icon: (
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ),
        badgeColor: "bg-green-500",
      },
      rejected: {
        title: "Rejected",
        icon: (
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ),
        badgeColor: "bg-red-500",
      },
    }
    return configs[columnKey]
  }

  const ApplicationCard = ({ application, columnKey }) => {
    const getBorderColor = (type) => {
      const colors = {
        green: "border-l-green-500",
        blue: "border-l-blue-500",
        red: "border-l-red-500",
      }
      return colors[type] || "border-l-gray-500"
    }

    const getTypeColor = (type) => {
      const colors = {
        green: "bg-green-100 text-green-800",
        blue: "bg-blue-100 text-blue-800",
        red: "bg-red-100 text-red-800",
      }
      return colors[type] || "bg-gray-100 text-gray-800"
    }

    // Check if this is the last stage (rejected)
    const isLastStage = columnKey === "rejected"

    return (
      <div
        draggable={!isLastStage}
        onDragStart={(e) => !isLastStage && handleDragStart(e, application, columnKey)}
        className={`border-l-4 ${getBorderColor(application.typeColor)} bg-gray-50 p-3 rounded-r-lg ${!isLastStage ? "cursor-move hover:shadow-md" : "cursor-default"} transition-shadow duration-200`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {!isLastStage && (
              <div
                className="text-gray-400 cursor-grab active:cursor-grabbing"
                style={{ fontSize: "12px", lineHeight: "1" }}
              >
                ⋮⋮
              </div>
            )}
            <h3 className="font-semibold text-gray-900 text-sm">{application.name}</h3>
          </div>
          <span className={`${getTypeColor(application.typeColor)} text-xs px-2 py-1 rounded-full font-medium`}>
            {application.type}
          </span>
        </div>
        <p className={`text-xs text-gray-600 mb-2 ${!isLastStage ? "ml-5" : ""}`}>{application.description}</p>
        <div className={`flex gap-1 ${!isLastStage ? "ml-5" : ""}`}>
          {application.actions.map((action, index) => (
            <button
              key={index}
              className={`${index === 0 ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-600 hover:bg-gray-700"} text-white text-xs px-2 py-1 rounded font-medium`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const ErrorToast = () => {
    if (!showToast) return null

    return (
      <div className="fixed top-4 right-4 z-[9999]">
        <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-xl border border-red-600 flex items-center gap-3 max-w-sm min-w-[300px]">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm leading-tight">{toastMessage}</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="flex-shrink-0 text-white hover:text-red-200 transition-colors ml-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Error Toast */}
      <ErrorToast />

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Applications Management</h1>
              <p className="text-gray-600 mt-1">Comprehensive application processing center</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Overdue Reviews (3)
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Application Report
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1"
                />
              </svg>
              Schedule Interviews
            </button>
          </div>
        </div>
      </div>

      {/* Application Processing Pipeline */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Application Processing Pipeline</h2>
          <span className="text-gray-500 text-sm">Drag applications between stages • Real-time updates</span>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {Object.entries(applications).map(([columnKey, columnApplications]) => {
            const config = getColumnConfig(columnKey)
            return (
              <div
                key={columnKey}
                className="bg-white rounded-xl border border-gray-200 p-4 min-h-[400px]"
                onDragOver={(e) => handleDragOver(e, columnKey)}
                onDrop={(e) => handleDrop(e, columnKey)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {config.icon}
                    <span className="font-semibold text-gray-900">{config.title}</span>
                  </div>
                  <span className={`${config.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {columnApplications.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {columnApplications.map((application) => (
                    <ApplicationCard key={application.id} application={application} columnKey={columnKey} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900">Quick Actions Panel</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Bulk Communications */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulk Communications</h3>
            <p className="text-gray-600 text-sm mb-4">
              Send emails to multiple applicants at once with custom templates and scheduling
            </p>
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">12 pending</span>
          </div>

          {/* Schedule Interviews */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Interviews</h3>
            <p className="text-gray-600 text-sm mb-4">
              Batch interview scheduling with calendar integration and automated reminders
            </p>
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">4 ready</span>
          </div>

          {/* Reference Checks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reference Checks</h3>
            <p className="text-gray-600 text-sm mb-4">
              Automated reference verification with email templates and tracking
            </p>
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">5 completed</span>
          </div>

          {/* Background Checks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Background Checks</h3>
            <p className="text-gray-600 text-sm mb-4">
              Integrated screening services with instant results and compliance tracking
            </p>
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">3 urgent</span>
          </div>

          {/* Template Responses */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Template Responses</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pre-written approval, rejection, and follow-up letters with personalization
            </p>
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">15 templates</span>
          </div>

          {/* Application Reports */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Reports</h3>
            <p className="text-gray-600 text-sm mb-4">
              Performance analytics, success rates, and detailed exports for stakeholders
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full">
              Generate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
