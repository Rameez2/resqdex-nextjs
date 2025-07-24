"use client"

import { useState } from "react"
import {
  Users,
  Heart,
  Handshake,
  DollarSign,
  Plus,
  FileText,
  Send,
  MapPin,
  TrendingUp,
  BarChart3,
  UserPlus,
  FileCheck,
  Clock,
  ChevronDown,
} from "lucide-react"

export default function PartnerNetwork() {
  const [searchTerm, setSearchTerm] = useState("")

  const metrics = [
    {
      title: "Total Partners",
      value: "47",
      change: "+3 new this month",
      icon: Users,
      color: "text-emerald-600",
    },
    {
      title: "Animals Helped Together",
      value: "892",
      change: "+127 this month",
      icon: Heart,
      color: "text-emerald-600",
    },
    {
      title: "Active Collaborations",
      value: "34",
      change: "+8% this quarter",
      icon: Handshake,
      color: "text-emerald-600",
    },
    {
      title: "Shared Resource Value",
      value: "$45K",
      change: "+22% cost savings",
      icon: DollarSign,
      color: "text-emerald-600",
    },
  ]

  const partners = [
    {
      id: 1,
      name: "Austin Animal Center",
      status: "Featured Partner",
      statusColor: "bg-orange-500",
      strength: "Excellent",
      strengthColor: "text-emerald-600",
      strengthProgress: 90,
      location: "Austin, TX",
      partnershipSince: "January 2022",
      capacity: "247 animals",
      contact: "Dr. Sarah Wilson",
      services: ["Transport Coordination", "Medical Referrals", "Supply Sharing", "Foster Network"],
      metrics: {
        animalsTransferred: 347,
        jointTransports: 89,
        sharedResources: 23,
      },
    },
    {
      id: 2,
      name: "Forever Friends Rescue",
      status: "Active",
      statusColor: "bg-emerald-500",
      strength: "Good",
      strengthColor: "text-yellow-600",
      strengthProgress: 70,
      location: "Round Rock, TX",
      partnershipSince: "May 2023",
      capacity: "Senior Dogs",
      contact: "Jennifer Martinez",
      services: ["Foster Network", "Supply Exchange", "Cross Referrals"],
      metrics: {
        animalsTransferred: 67,
        jointTransports: 23,
        sharedResources: 12,
      },
    },
    {
      id: 3,
      name: "Dallas Transport Network",
      status: "Pending Approval",
      statusColor: "bg-yellow-500",
      strength: "Developing",
      strengthColor: "text-orange-600",
      strengthProgress: 40,
      location: "Dallas, TX",
      partnershipSince: "July 15, 2025",
      capacity: "15 drivers",
      contact: "Mike Rodriguez",
      services: ["Regional Transport", "Emergency Response", "Cross State Moves"],
      approvalSteps: ["Pending Approval", "Under Review", "Background Check"],
      isPending: true,
    },
    {
      id: 4,
      name: "Emergency Vet Clinic",
      status: "Active",
      statusColor: "bg-emerald-500",
      strength: "Excellent",
      strengthColor: "text-emerald-600",
      strengthProgress: 90,
      location: "Austin, TX",
      partnershipSince: "June 2021",
      capacity: "24/7 Emergency",
      contact: "Dr. Emily Santos",
      services: ["Emergency Care", "Surgery Services", "24/7 Hotline", "Emergency Transport"],
      metrics: {
        emergencyCases: 234,
        successRate: "98%",
        avgResponse: "18min",
      },
      isEmergency: true,
    },
  ]

  const partnershipRequests = [
    {
      name: "Dallas Transport Network",
      type: "Regional transport",
      details: "15 drivers • Submitted 4 days ago",
      status: "Approve",
    },
    {
      name: "San Antonio Cat Rescue",
      type: "Cat specialization",
      details: "Foster network • Submitted 2 days ago",
      status: "Approve",
    },
    {
      name: "Houston Mobile Vet",
      type: "Mobile veterinary service",
      details: "Submitted 1 day ago",
      status: "Approve",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-600 to-emerald-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
                    <div className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded">{metric.change}</div>
                  </div>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>All Partners</option>
                      <option>Active</option>
                      <option>Pending</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>All Types</option>
                      <option>Rescue</option>
                      <option>Transport</option>
                      <option>Medical</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>All Locations</option>
                      <option>Austin</option>
                      <option>Dallas</option>
                      <option>Houston</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>

                  <input
                    type="text"
                    placeholder="Search partners..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 min-w-48 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    Add New Partner
                  </button>
                  <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                    <FileText className="h-4 w-4" />
                    Partnership Report
                  </button>
                  <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                    <Send className="h-4 w-4" />
                    Send Network Update
                  </button>
                </div>
              </div>
            </div>

            {/* Partnership Network Header */}
            <div className="flex items-center gap-2 text-white">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <h2 className="text-lg font-semibold">Partnership Network</h2>
            </div>

            {/* Partner Cards */}
            <div className="space-y-4">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-white rounded-lg shadow-sm border-l-4 border-l-yellow-400">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                        <span
                          className={`inline-block ${partner.statusColor} text-white text-xs px-2 py-1 rounded mt-1`}
                        >
                          {partner.status}
                        </span>
                      </div>
                      {partner.status === "Featured Partner" && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium">FEATURED</span>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600">Partnership Strength:</span>
                        <span className={`text-sm font-medium ${partner.strengthColor}`}>{partner.strength}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${partner.strengthProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">{partner.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Partnership Since</p>
                        <p className="font-medium">{partner.partnershipSince}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Capacity</p>
                        <p className="font-medium">{partner.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Contact</p>
                        <p className="font-medium">{partner.contact}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Services & Collaboration</p>
                      <div className="flex flex-wrap gap-2">
                        {partner.services.map((service, index) => (
                          <span key={index} className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {partner.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">
                            {partner.metrics.animalsTransferred || partner.metrics.emergencyCases}
                          </p>
                          <p className="text-xs text-gray-600">
                            {partner.metrics.animalsTransferred ? "Animals Transferred" : "Emergency Cases"}
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">
                            {partner.metrics.jointTransports || partner.metrics.successRate}
                          </p>
                          <p className="text-xs text-gray-600">
                            {partner.metrics.jointTransports ? "Joint Transports" : "Success Rate"}
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">
                            {partner.metrics.sharedResources || partner.metrics.avgResponse}
                          </p>
                          <p className="text-xs text-gray-600">
                            {partner.metrics.sharedResources ? "Shared Resources" : "Avg Response"}
                          </p>
                        </div>
                      </div>
                    )}

                    {partner.approvalSteps && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-600 mb-2">
                          {partner.approvalSteps.map((step, index) => (
                            <span key={index}>{step}</span>
                          ))}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        Contact
                      </button>
                      {partner.isPending ? (
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                          Approve
                        </button>
                      ) : partner.isEmergency ? (
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                          Emergency
                        </button>
                      ) : (
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                          {partner.name === "Forever Friends Rescue" ? "Collaborate" : "New Project"}
                        </button>
                      )}
                      <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                        {partner.isPending ? "Review" : "Details"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Partnership Map */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Partnership Map
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-gray-50 p-3 rounded text-center">
                  <MapPin className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Interactive Network Map</p>
                  <p className="text-xs text-gray-500">(Geographic partner distribution)</p>
                </div>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <MapPin className="h-4 w-4" />
                  Find Partners Near Me
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <BarChart3 className="h-4 w-4" />
                  Network Analytics
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <TrendingUp className="h-4 w-4" />
                  Expand Coverage
                </button>
              </div>
            </div>

            {/* Partnership Requests */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <FileCheck className="h-4 w-4" />
                  Partnership Requests
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {partnershipRequests.map((request, index) => (
                  <div key={index} className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-sm">{request.name}</h4>
                    <p className="text-xs text-gray-600">{request.type}</p>
                    <p className="text-xs text-gray-500 mb-2">{request.details}</p>
                    <div className="flex gap-2">
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Approve
                      </button>
                      <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Metrics */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Network Metrics
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">47</p>
                    <p className="text-xs text-gray-600">Total Partners</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">89%</p>
                    <p className="text-xs text-gray-600">Active Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-600">3</p>
                    <p className="text-xs text-gray-600">Pending</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">4.8</p>
                    <p className="text-xs text-gray-600">Avg Rating</p>
                  </div>
                </div>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <BarChart3 className="h-4 w-4" />
                  Detailed Analytics
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <TrendingUp className="h-4 w-4" />
                  Performance Trends
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Quick Actions
                </h3>
              </div>
              <div className="p-4 space-y-2">
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors">
                  <UserPlus className="h-4 w-4" />
                  Add New Partner
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors">
                  <Send className="h-4 w-4" />
                  Send Network Update
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors">
                  <FileCheck className="h-4 w-4" />
                  Partnership Agreement
                </button>
                <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors">
                  <Clock className="h-4 w-4" />
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
