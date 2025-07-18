"use client"

import { useState } from "react"

const animals = [
  {
    id: "bella",
    emoji: "🐕",
    name: "Bella",
    status: "Medical",
    statusColor: "bg-green-500",
    statusTextColor: "text-white",
    details: {
      id: "#A001",
      breed: "Golden Retriever",
      age: "3 years",
      size: "Large",
      daysInCare: "45 days",
      tags: [{ text: "Medical attention needed", bgColor: "bg-red-100", textColor: "text-red-800" }],
      backInfo: {
        alert: { emoji: "💉", text: "Vaccination due in 3 days", bgColor: "bg-red-50", textColor: "text-red-600" },
        lastVetVisit: "Oct 15, 2024",
        spayedNeutered: true,
        microchipped: true,
        currentMedications: "None",
        medicalCosts: "$347",
      },
    },
  },
  {
    id: "whiskers",
    emoji: "🐱",
    name: "Whiskers",
    status: "Pending",
    statusColor: "bg-orange-500",
    statusTextColor: "text-white",
    details: {
      id: "#A002",
      breed: "Tabby Mix",
      age: "2 years",
      size: "Medium",
      daysInCare: "12 days",
      tags: [{ text: "Indoor only", bgColor: "bg-orange-100", textColor: "text-orange-800" }],
      backInfo: {
        alert: { emoji: "📋", text: "Application pending review", bgColor: "bg-blue-50", textColor: "text-blue-600" },
        lastVetVisit: "Oct 10, 2024",
        spayedNeutered: true,
        microchipped: true,
        currentMedications: "None",
        medicalCosts: "$125",
      },
    },
  },
  {
    id: "max",
    emoji: "🐕",
    name: "Max",
    status: "Medical",
    statusColor: "bg-red-500",
    statusTextColor: "text-white",
    details: {
      id: "#A003",
      breed: "German Shepherd",
      age: "5 years",
      size: "Large",
      daysInCare: "67 days",
      tags: [
        { text: "Urgent medical", bgColor: "bg-red-500", textColor: "text-white" },
        { text: "Special needs", bgColor: "bg-orange-100", textColor: "text-orange-800" },
      ],
      backInfo: {
        alert: {
          emoji: "🚨",
          text: "Urgent medical attention required",
          bgColor: "bg-red-50",
          textColor: "text-red-600",
        },
        lastVetVisit: "Oct 18, 2024",
        spayedNeutered: true,
        microchipped: true,
        currentMedications: "Pain medication, Antibiotics",
        medicalCosts: "$892",
      },
    },
  },
  
  
]

export default function AnimalDashboard() {
  const [activeTab, setActiveTab] = useState("all")
  const [activeDetailTab, setActiveDetailTab] = useState("medical")
  const [flippedCards, setFlippedCards] = useState({
    // bella: true,
    // whiskers: false,
    // max: false,
  })

  const flipCard = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  // Inline styles for flip animation
  const flipCardStyle = {
    perspective: "1000px",
    width: "100%",
  }

  const flipCardInnerStyle = (isFlipped) => ({
    position: "relative" ,
    width: "100%",
    textAlign: "center" ,
    transition: "transform 0.8s",
    transformStyle: "preserve-3d" ,
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  })

  const flipCardFaceStyle = {
    width: "100%",
    WebkitBackfaceVisibility: "hidden" ,
    backfaceVisibility: "hidden" ,
    borderRadius: "0.5rem",
    background: "white",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    border: "1px solid rgb(229 231 235)",
  }

  const flipCardBackStyle = {
    position: "absolute" ,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden" ,
    backfaceVisibility: "hidden" ,
    borderRadius: "0.5rem",
    background: "white",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    border: "1px solid rgb(229 231 235)",
    transform: "rotateY(180deg)",
  }

  const flipCardHeaderStyle = {
    background: "rgb(31 41 55)",
    color: "white",
    borderRadius: "0.5rem 0.5rem 0 0",
    position: "relative" ,
    padding: "1rem",
  }

  const flipCardContentStyle = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column" ,
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🐕</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Animals</h1>
              <p className="text-gray-600">Manage all animals in your care</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Export Data
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Animal
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Animals</p>
                  <p className="text-3xl font-bold">23</p>
                  <p className="text-sm text-gray-500">Currently in care</p>
                </div>
                <div className="text-2xl">🐾</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Available for Adoption</p>
                  <p className="text-3xl font-bold">18</p>
                  <p className="text-sm text-gray-500">Ready for homes</p>
                </div>
                <div className="text-2xl">🏠</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">In Foster Care</p>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm text-gray-500">With foster families</p>
                </div>
                <div className="text-2xl">💖</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending Applications</p>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-gray-500">Awaiting review</p>
                </div>
                <div className="text-2xl">📋</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Medical Attention</p>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-sm text-gray-500">Need care</p>
                </div>
                <div className="text-2xl">🏥</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h2 className="text-xl font-semibold">Search & Filter Animals</h2>
              </div>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">Clear All Filters</button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by name, ID, breed, or description..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors">
                Search
              </button>
            </div>

            {/* Custom Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: "all", label: "All Animals (23)", active: true },
                  { id: "dogs", label: "Dogs (14)" },
                  { id: "cats", label: "Cats (7)" },
                  { id: "small", label: "Small Animals (2)" },
                  { id: "available", label: "Available (18)" },
                  { id: "foster", label: "Foster (5)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id || (tab.active && activeTab === "all")
                        ? "border-green-500 text-green-600 bg-green-500 text-white px-4 rounded-full"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Status</option>
                <option>Available</option>
                <option>Pending</option>
                <option>Foster</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus://ring-orange-500 focus:border-transparent">
                <option>All Ages</option>
                <option>Puppy/Kitten</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Sizes</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Genders</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All</option>
                <option>Special Needs</option>
                <option>Medical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Animal Cards Grid */}
        <div className="flex flex-wrap gap-6">
          {animals.map((animal) => (
            <div key={animal.id} className="col-span-1 min-w-[280px]">
              <div style={flipCardStyle}>
                <div style={flipCardInnerStyle(flippedCards[animal.id])}>
                  {/* Front Side */}
                  <div style={flipCardFaceStyle}>
                    <div style={flipCardHeaderStyle}>
                      <div className="absolute top-2 right-2">
                        <span
                          className={`${animal.statusColor} ${animal.statusTextColor} px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          {animal.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <button onClick={() => flipCard(animal.id)} className="hover:text-gray-300 transition-colors">
                          👆 Click to flip
                        </button>
                      </div>
                      <div className="text-center py-4">
                        <div className="text-4xl mb-2">{animal.emoji}</div>
                        <h3 className="text-xl font-bold">{animal.name}</h3>
                      </div>
                    </div>
                    <div style={flipCardContentStyle}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-gray-500">{animal.details.id}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Breed:</span>
                          <span>{animal.details.breed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Age:</span>
                          <span>{animal.details.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Size:</span>
                          <span>{animal.details.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Days in care:</span>
                          <span>{animal.details.daysInCare}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4 flex-wrap">
                        {animal.details.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`${tag.bgColor} ${tag.textColor} px-2 py-1 rounded-full text-xs font-medium inline-block`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto flex-wrap">
                        <button className="grow shrink basis-0 min-w-0 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
                          View Profile
                        </button>
                        {animal.id === "bella" || animal.id === "max" ? (
                          <button className="grow shrink basis-0 min-w-0 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition-colors">
                            Medical Alert
                          </button>
                        ) : (
                          <button className="grow shrink basis-0 min-w-0 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition-colors">
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div style={flipCardBackStyle}>
                    <div style={flipCardHeaderStyle}>
                      <div className="absolute top-2 right-2">
                        <span
                          className={`${animal.statusColor} ${animal.statusTextColor} px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          {animal.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <button onClick={() => flipCard(animal.id)} className="hover:text-gray-300 transition-colors">
                          👆 Click to flip
                        </button>
                      </div>
                      <h3 className="text-xl font-bold">{animal.name} - Detailed Info</h3>
                    </div>
                    <div style={flipCardContentStyle}>
                      {/* Custom Detail Tabs */}
                      <div className="border-b border-gray-200 mb-4">
                        <nav className="flex space-x-8">
                          {[
                            { id: "medical", label: "Medical", active: true },
                            { id: "applications", label: "Applications" },
                            { id: "stats", label: "Stats" },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveDetailTab(tab.id)}
                              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeDetailTab === tab.id || (tab.active && activeDetailTab === "medical")
                                  ? "border-green-500 text-green-600 bg-green-500 text-white px-4 rounded-full"
                                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </nav>
                      </div>

                      {activeDetailTab === "medical" && (
                        <div className="space-y-3 flex-1">
                          <div
                            className={`${animal.details.backInfo.bgColor} ${animal.details.backInfo.alert.textColor} border ${animal.details.backInfo.alert.textColor.replace("text-", "border-").replace("-600", "-200")} rounded-lg p-3`}
                          >
                            <div className="flex items-center gap-2">
                              <span>{animal.details.backInfo.alert.emoji}</span>
                              <span className="font-medium">{animal.details.backInfo.alert.text}</span>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Last Vet Visit:</span>
                              <span className="font-medium">{animal.details.backInfo.lastVetVisit}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Spayed/Neutered:</span>
                              <div className="flex items-center gap-1 text-green-600">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{animal.details.backInfo.spayedNeutered ? "Yes" : "No"}</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Microchipped:</span>
                              <div className="flex items-center gap-1 text-green-600">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{animal.details.backInfo.microchipped ? "Yes" : "No"}</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Current Medications:</span>
                              <span className="font-medium">{animal.details.backInfo.currentMedications}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Medical Costs:</span>
                              <span className="font-medium">{animal.details.backInfo.medicalCosts}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => flipCard(animal.id)}
                        className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 py-2 transition-colors mt-auto"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        Back to Overview
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
  )
}
