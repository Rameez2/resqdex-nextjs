"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  Send,
  Plus,
} from "lucide-react"

const InterviewScheduler = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)) // January 2025
  const [activeTab, setActiveTab] = useState("Calendar View")

  const tabs = ["Calendar View", "List View", "Timeline"]

  const actionButtons = [
    { icon: FileText, label: "Interview Reports", variant: "secondary" },
    { icon: Send, label: "Send Reminders", variant: "secondary" },
    { icon: Plus, label: "Schedule Interview", variant: "default" },
  ]

  const stats = [
    {
      icon: Calendar,
      number: "23",
      label: "Interviews Scheduled",
      change: "+5 this week",
      changeColor: "text-green-600",
    },
    {
      icon: CheckCircle,
      number: "18",
      label: "Completed This Month",
      change: "+3 vs last month",
      changeColor: "text-green-600",
    },
    {
      icon: Home,
      number: "7",
      label: "Home Visits Pending",
      change: "On schedule",
      changeColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Success Rate",
      change: "+4% improvement",
      changeColor: "text-green-600",
    },
  ]

  const calendarEvents = {
    1: [{ type: "phone", name: "Phone: Sarah M.", color: "bg-blue-500" }],
    2: [
      { type: "home", name: "Home Visit: Johnson", color: "bg-red-500" },
      { type: "video", name: "Video: Mike T.", color: "bg-purple-500" },
    ],
    3: [{ type: "followup", name: "Follow-up: Chen", color: "bg-green-500" }],
    5: [{ type: "person", name: "In-Person: Adams", color: "bg-blue-600" }],
    6: [
      { type: "phone", name: "Phone: Wilson", color: "bg-blue-500" },
      { type: "video", name: "Video: Rodriguez", color: "bg-purple-500" },
    ],
    8: [{ type: "home", name: "Home Visit: Martinez", color: "bg-red-500" }],
    9: [{ type: "phone", name: "Phone: Thompson", color: "bg-blue-500" }],
    10: [{ type: "followup", name: "Follow-up: Davis", color: "bg-green-500" }],
    12: [{ type: "video", name: "Video: Garcia", color: "bg-purple-500" }],
    13: [
      { type: "phone", name: "Phone: Lee", color: "bg-blue-500" },
      { type: "home", name: "Home Visit: Brown", color: "bg-red-500" },
    ],
    15: [{ type: "phone", name: "Phone: Miller", color: "bg-blue-500" }],
    16: [{ type: "followup", name: "Follow-up: Clark", color: "bg-green-500" }],
    17: [{ type: "video", name: "Video: Anderson", color: "bg-purple-500" }],
    19: [{ type: "home", name: "Home Visit: Taylor", color: "bg-red-500" }],
    20: [{ type: "phone", name: "Phone: White", color: "bg-blue-500" }],
    21: [{ type: "person", name: "In-Person: Harris", color: "bg-blue-600" }],
    22: [{ type: "video", name: "Video: Martin", color: "bg-purple-500" }],
    23: [{ type: "followup", name: "Follow-up: Lewis", color: "bg-green-500" }],
    25: [{ type: "home", name: "Home Visit: Walker", color: "bg-red-500" }],
    26: [{ type: "phone", name: "Phone: Young", color: "bg-blue-500" }],
    27: [{ type: "video", name: "Video: King", color: "bg-purple-500" }],
    29: [{ type: "followup", name: "Follow-up: Wright", color: "bg-green-500" }],
    30: [{ type: "person", name: "In-Person: Lopez", color: "bg-blue-600" }],
  }

  const todaysInterviews = [
    {
      time: "2:00 PM",
      name: "Jennifer Martinez",
      type: "Interested in: Bella",
      description: "First-time adopter, loves dogs",
      actions: ["Start Call", "Reschedule"],
    },
    {
      time: "4:30 PM",
      name: "Robert Lewis",
      type: "Follow-up for: Max",
      description: "Reference check follow-up",
      actions: ["Call Now", "Postpone"],
    },
  ]

  const availableSlots = [
    "Tomorrow 10:00 AM",
    "Tomorrow 2:00 PM",
    "Tomorrow 4:00 PM",
    "Friday 11:00 AM",
    "Friday 3:00 PM",
  ]

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Previous month's trailing days
    for (let i = 0; i < firstDay; i++) {
      const prevMonthDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), -firstDay + i + 1).getDate()
      days.push(
        <div key={`prev-${i}`} className="h-24 p-1 text-gray-400 text-sm">
          {prevMonthDay}
        </div>,
      )
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const events = calendarEvents[day] || []
      const isToday = day === 23 // Highlighting the 23rd as shown in the image

      days.push(
        <div
          key={day}
          className={`h-24 p-1 border-r border-b border-gray-200 ${isToday ? "bg-yellow-100 border-yellow-300" : ""}`}
        >
          <div className="text-sm font-medium mb-1">{day}</div>
          <div className="space-y-1">
            {events.slice(0, 2).map((event, idx) => (
              <div key={idx} className={`text-xs px-1 py-0.5 rounded text-white truncate ${event.color}`}>
                {event.name}
              </div>
            ))}
            {events.length > 2 && <div className="text-xs text-gray-500">+{events.length - 2} more</div>}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Interview Scheduler</h1>
        </div>
        <p className="text-purple-100 text-lg">
          Coordinate adopter interviews and home visits with intelligent calendar management
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab ? "bg-white/20 text-white" : "text-purple-100 hover:bg-white/10"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {actionButtons.map((button, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                button.variant === "default"
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <button.icon className="w-4 h-4" />
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/95 backdrop-blur rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 mb-2">{stat.label}</div>
              <div className={`text-sm ${stat.changeColor} bg-green-50 px-2 py-1 rounded-full inline-block`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold">Interview Calendar</h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-semibold text-lg">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="p-3 text-center font-semibold text-white bg-purple-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 border-l border-t border-gray-200">{renderCalendar()}</div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Interviews */}
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">{"Today's Interviews"}</h3>
              </div>
              <div className="space-y-4">
                {todaysInterviews.map((interview, idx) => (
                  <div key={idx} className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold text-purple-600">{interview.time}</div>
                    <div className="font-medium">{interview.name}</div>
                    <div className="text-sm text-gray-600">{interview.type}</div>
                    <div className="text-sm text-gray-500 mb-2">{interview.description}</div>
                    <div className="flex gap-2">
                      {interview.actions.map((action, actionIdx) => (
                        <button
                          key={actionIdx}
                          className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors ${
                            actionIdx === 0
                              ? "bg-purple-600 text-white hover:bg-purple-700"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Times */}
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Available Times</h3>
              </div>
              <div className="space-y-2">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interview Stats */}
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Interview Stats</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">18</div>
                <div className="text-sm text-gray-600">Completed</div>
                <div className="text-xs text-green-600 mt-1">Success Rate: 89%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewScheduler
