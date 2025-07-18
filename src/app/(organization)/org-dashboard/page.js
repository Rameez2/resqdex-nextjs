"use client"

import { useState, useEffect } from "react"
// right side
import {
  Clock,
  Plus,
  FileText,
  Phone,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Sun,
  Truck,
  Heart,
  Users,
  TrendingUp,
  MessageCircle,
  Star,
  Activity,
} from "lucide-react"
import Dashboard from "@/components/pagesComponents/organization/Dashboard"
import AdoptionPipeline from "@/components/pagesComponents/organization/Animals/AdoptionPipeline"
// right side end


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [openDropdowns, setOpenDropdowns] = useState({})

  const [activeSidebarItem, setActiveSidebarItem] = useState('Overview');


  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sidebarData = [
    {
      title: "Dashboard",
      icon: "📊",
      items: ["Overview"],
      // items: ["Overview", "Analytics", "Reports", "Metrics"],
    },
    {
      title: "Animals",
      icon: "🐾",
      items: ["Current Listings", "Applications Received", "Adoption Pipeline", "Medical Records", "Quick Add Pet"],
    },
    {
      title: "Applications",
      icon: "📋",
      items: [
        "New Applications",
        "In Review",
        "Approved/Pending Meetup",
        "Interview Scheduler",
        "Adopter Communications",
      ],
    },
    {
      title: "Transport & Logistics",
      icon: "🚚",
      items: ["Active Transports", "Request Transport", "Available Drivers", "Emergency Requests"],
    },
    {
      title: "Resources",
      icon: "📚",
      items: ["Partner Network", "Supply Exchange", "Volunteer Database", "Foster Network"],
    },
    {
      title: "Organization Management",
      icon: "🏢",
      items: ["User Permissions", "Staff Management", "Account Settings", "Billing & Subscription", "API Keys"],
    },
    {
      title: "Analytics & Reports",
      icon: "📈",
      items: ["Success Metrics", "Financial Reports", "User Activity Logs", "Data Exports", "Performance Dashboard"],
    },
    {
      title: "System Settings",
      icon: "⚙️",
      items: [
        "Organization Profile",
        "Public Page Editor",
        "Notification Settings",
        "Integration Settings",
        "Backup & Data",
      ],
    },
  ]
  // RIGHT SIDE CODE
  const [completedTasks, setCompletedTasks] = useState([])
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleTask = (taskId) => {
    setCompletedTasks((prev) => (prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]))
  }
  // RIGHT SIDE CODE END

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${isOpen ? "w-80" : "w-16"} sticky top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl transition-all duration-300 ease-in-out flex-shrink-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {isOpen && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">PetCare Pro</h1>
                <p className="text-xs text-slate-300">Management System</p>
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          <div className="space-y-2 px-3">
            {sidebarData.map((section, index) => (
              <div key={index} className="space-y-1">

                <button
                  onClick={() => toggleDropdown(section.title)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-700 transition-all duration-200 group ${openDropdowns[section.title] ? "bg-slate-700" : ""
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{section.icon}</span>
                    {isOpen && (
                      <span className="font-medium text-slate-100 group-hover:text-white transition-colors"
                      >
                        {section.title}
                      </span>
                    )}
                  </div>
                  {isOpen && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${openDropdowns[section.title] ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Items */}
                {isOpen && openDropdowns[section.title] && (
                  <div className="ml-6 space-y-1 animate-fadeIn">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        onClick={() => setActiveSidebarItem(item)}
                        className="block p-2 pl-4 text-sm text-slate-300 hover:text-white hover:bg-slate-600 rounded-lg transition-all duration-150 border-l-2 border-transparent hover:border-blue-400"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="p-4 border-t border-slate-700 flex-shrink-0">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-slate-300 truncate">Administrator</p>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Main Content RIGHT SIDE PDF*/}

      
      {activeSidebarItem === "Overview" && <Dashboard />}
      {activeSidebarItem === "Adoption Pipeline" && <AdoptionPipeline/>}
      





      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background-color: #475569;
          border-radius: 3px;
        }
        
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb:hover {
          background-color: #64748b;
        }
        
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: #1e293b;
        }
      `}</style>
    </div>
  )
}
