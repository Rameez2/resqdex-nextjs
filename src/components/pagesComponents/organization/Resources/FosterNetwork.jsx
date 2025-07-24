"use client"

import { useState } from "react"
import { Star, Search, Plus, FileText, Send, Calendar, Mail, BarChart3, Users, Home } from "lucide-react"

export default function FosterNetwork() {
  const [selectedFamily, setSelectedFamily] = useState(null)

  const stats = [
    { number: "89", label: "Foster Families", subtitle: "3 new approvals", color: "text-purple-600" },
    { number: "67", label: "Animals in Foster", subtitle: "5 new placements this week", color: "text-purple-600" },
    { number: "34", label: "Available Foster Homes", subtitle: "Ready for placement", color: "text-purple-600" },
    { number: "92%", label: "Success Rate", subtitle: "4% this quarter", color: "text-purple-600" },
  ]

  const fosterFamilies = [
    {
      id: 1,
      name: "Wilson Family",
      specialization: "Large Dogs",
      experience: "4 years",
      location: "Dallas, TX",
      rating: 4.9,
      currentFostering: 23,
      capacity: 98,
      successRate: "98%",
      status: "experienced",
      specialties: ["Large Breed Dogs", "Puppy Socialization", "Senior Dogs"],
    },
    {
      id: 2,
      name: "Chen Family",
      specialization: "Cats & Kittens",
      experience: "2 years",
      location: "Downtown Austin",
      rating: 4.8,
      currentFostering: 18,
      capacity: 34,
      successRate: "94%",
      status: "fostering",
      specialties: ["Kitten Care", "Bottle Feeding", "Senior Cats"],
      currentAnimals: [
        { name: "Mittens - Kitten", details: "8 weeks old • Bottle feeding • 4 weeks in foster" },
        { name: "Shadow - Adult Cat", details: "2 years • Shy temperament • 3 weeks in foster" },
        { name: "Princess - Senior Cat", details: "12 years • Medical needs • 6 weeks in foster" },
      ],
    },
    {
      id: 3,
      name: "Rodriguez Family",
      specialization: "Medical Foster",
      experience: "6 years",
      location: "South Austin",
      rating: 5.0,
      currentFostering: 34,
      capacity: 12,
      successRate: "96%",
      status: "medical",
      specialties: ["Post Surgery Care", "Medication Administration", "Special Needs", "Hospice Care"],
      currentAnimals: [
        { name: "Rex - Recovery", details: "Post surgery recovery • Leg amputation • 2 weeks in foster" },
      ],
    },
    {
      id: 4,
      name: "Thompson Family",
      specialization: "Puppies",
      experience: "New (1 month)",
      location: "North Austin",
      rating: null,
      currentFostering: 1,
      capacity: 3,
      successRate: "100%",
      status: "new",
      specialties: ["Puppy Care", "Socialization"],
    },
    {
      id: 5,
      name: "Johnson Family",
      specialization: "Small Dogs",
      experience: "3 years",
      location: "Round Rock, TX",
      rating: 4.6,
      currentFostering: 15,
      capacity: 22,
      successRate: "93%",
      status: "at-capacity",
      specialties: ["Small Breed Dogs", "Senior Care"],
      currentAnimals: [
        { name: "Buddy - Small Mix", details: "5 years • Behavioral training • 4 weeks in foster" },
        { name: "Luna - Chihuahua", details: "3 years • Timid dog • 2 weeks in foster" },
      ],
    },
  ]

  const animalsNeedingFoster = [
    { name: "URGENT: Puppies (4)", details: "2 weeks old • Bottle feeding • Mother unavailable", priority: "urgent" },
    {
      name: "Medical: Post Surgery Cat",
      details: "3 years old • Daily Medication • 2 weeks care needed",
      priority: "medical",
    },
    {
      name: "Behavioral: Shy Dog",
      details: "1 year old • Needs behavioral support • Patient foster needed",
      priority: "behavioral",
    },
    {
      name: "Senior Cat - Hospice",
      details: "15 years old • End of life care • Experienced foster needed",
      priority: "senior",
    },
    { name: "Pregnant Dog", details: "Due in 2 weeks • Whelping experience preferred", priority: "pregnant" },
  ]

  const quickActions = [
    { icon: Plus, label: "Add Foster Family", color: "text-purple-600" },
    { icon: Users, label: "Match Animals to Fosters", color: "text-blue-600" },
    { icon: Calendar, label: "Schedule Home Visits", color: "text-green-600" },
    { icon: Mail, label: "Send Foster Newsletter", color: "text-orange-600" },
    { icon: BarChart3, label: "Foster Success Report", color: "text-red-600" },
  ]

  const networkStats = [
    { number: "34", label: "Active Fosters", color: "text-green-600" },
    { number: "41", label: "Fostering", color: "text-blue-600" },
    { number: "156", label: "In Training", color: "text-purple-600" },
    { number: "89", label: "Avg Rating", color: "text-orange-600" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "experienced":
        return "bg-green-100 text-green-800"
      case "fostering":
        return "bg-yellow-100 text-yellow-800"
      case "medical":
        return "bg-red-100 text-red-800"
      case "new":
        return "bg-blue-100 text-blue-800"
      case "at-capacity":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case "experienced":
        return "Experienced"
      case "fostering":
        return "Fostering (2)"
      case "medical":
        return "Medical Foster (1)"
      case "new":
        return "New"
      case "at-capacity":
        return "At Capacity"
      default:
        return status
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "border-l-red-500 bg-red-50"
      case "medical":
        return "border-l-orange-500 bg-orange-50"
      case "behavioral":
        return "border-l-purple-500 bg-purple-50"
      case "senior":
        return "border-l-blue-500 bg-blue-50"
      case "pregnant":
        return "border-l-pink-500 bg-pink-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  const renderStars = (rating) => {
    if (!rating) return <span className="text-gray-400">New Foster</span>

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-1 text-sm font-medium">{rating}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-emerald-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>All Foster Families</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>All Specialties</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>All Locations</option>
            </select>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search foster families..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Foster Family
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Generate Report
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Update
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Foster Family Network */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-900">Foster Family Network</h2>
              </div>
            </div>

            <div className="p-6 space-y-6 max-h-[800px] overflow-y-auto">
              {fosterFamilies.map((family) => (
                <div key={family.id} className="border border-gray-200 rounded-lg p-6 relative">
                  <div
                    className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(family.status)}`}
                  >
                    {getStatusLabel(family.status)}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{family.name}</h3>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-500">Specialization:</span>
                          <span className="ml-2 text-gray-900">{family.specialization}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Experience:</span>
                          <span className="ml-2 text-gray-900">{family.experience}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-2 text-gray-900">{family.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Rating:</span>
                          <span className="ml-2">{renderStars(family.rating)}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-sm text-gray-500 mb-2">Foster Specialties</div>
                        <div className="flex flex-wrap gap-2">
                          {family.specialties.map((specialty, index) => (
                            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{family.currentFostering}</div>
                          <div className="text-xs text-gray-500">Successful Fosters</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{family.capacity}</div>
                          <div className="text-xs text-gray-500">Current Capacity</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{family.successRate}</div>
                          <div className="text-xs text-gray-500">Success Rate</div>
                        </div>
                      </div>

                      {family.currentAnimals && (
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-2">Currently Fostering</div>
                          <div className="space-y-2">
                            {family.currentAnimals.map((animal, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                  <span className="text-purple-600 font-medium text-sm">{animal.name.charAt(0)}</span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {animal.name.split(" - ")[0]} - {animal.name.split(" - ")[1]}
                                  </div>
                                  <div className="text-xs text-gray-500">{animal.details}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                          Contact
                        </button>
                        <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                          {family.status === "fostering"
                            ? "Assign Request"
                            : family.status === "at-capacity"
                              ? "Check In"
                              : "Assign Request"}
                        </button>
                        <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                          Schedule Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Animals Needing Foster */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Home className="w-5 h-5 text-red-500" />
                  Animals Needing Foster
                </h3>
              </div>
              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                {animalsNeedingFoster.map((animal, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${getPriorityColor(animal.priority)}`}>
                    <div className="font-medium text-sm text-gray-900 mb-1">{animal.name}</div>
                    <div className="text-xs text-gray-600">{animal.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foster Training */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Foster Training</h3>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-900">Medical Foster Training</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-900">Kitten Care Specialist</span>
                    <span className="text-sm text-gray-500">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-900">Behavioral Support</span>
                    <span className="text-sm text-gray-500">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-4 space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-gray-50 rounded-md"
                  >
                    <action.icon className={`w-5 h-5 ${action.color}`} />
                    <span className="text-sm text-gray-900">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Network Stats */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Network Stats</h3>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                {networkStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
