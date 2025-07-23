"use client"

import { useState } from "react"
import {
  PawPrint,
  ChevronDown,
  Phone,
  FileText,
  Plus,
  Users,
  Bell,
  AlertCircle,
  CheckCircle,
  BarChart2,
  Star,
  MapPin,
  Truck,
  Clock,
  ClipboardList,
  User,
  Calendar,
  Map,
  CalendarDays,
} from "lucide-react"

// Utility function for conditional class names (simplified cn)
const cn = (...classes) => classes.filter(Boolean).join(" ")

export default function AvailableDrivers() {
  const [allDriversOpen, setAllDriversOpen] = useState(false)
  const [allLocationsOpen, setAllLocationsOpen] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState({}) // State for accordion items

  const toggleAccordion = (driverName) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [driverName]: !prev[driverName],
    }))
  }

  const driverData = [
    {
      name: "Sarah Martinez",
      status: "available",
      location: "Austin, TX",
      experience: "3 years",
      vehicleType: "Large Van",
      rating: 4.9,
      transports: 127,
      onTimePercentage: 98,
      animalsTransported: 847,
      availability: [
        { time: "8AM", status: "available" },
        { time: "12PM", status: "available" },
        { time: "4PM", status: "available" },
        { time: "8PM", status: "available" },
      ],
    },
    {
      name: "Mike Rodriguez",
      status: "on-transport",
      location: "En Route",
      vehicleType: "SUV",
      rating: 4.8,
      transports: 89,
      onTimePercentage: 94,
      animalsTransported: 523,
      availability: [
        { time: "8AM", status: "busy" },
        { time: "12PM", status: "busy" },
        { time: "4PM", status: "available" },
        { time: "8PM", status: "available" },
      ],
      currentTransport: {
        route: "Austin Animal Control → Emergency Vet",
        eta: "15 minutes",
        animals: "1 animal (Rocky - Emergency)",
        location: "Austin, TX",
        availableAgain: "4:30 PM",
      },
    },
    {
      name: "Jennifer Adams",
      status: "available",
      location: "Dallas, TX",
      experience: "5 years",
      vehicleType: "Pickup Truck",
      rating: 5.0,
      transports: 203,
      onTimePercentage: 99,
      animalsTransported: 1247,
      availability: [
        { time: "8AM", status: "busy" },
        { time: "12PM", status: "available" },
        { time: "4PM", status: "available" },
        { time: "8PM", status: "available" },
      ],
    },
    {
      name: "David Wilson",
      status: "offline",
      location: "Houston, TX",
      lastActive: "2 hours ago",
      vehicleType: "Van",
      rating: 4.6,
      transports: 67,
      onTimePercentage: 92,
      animalsTransported: 398,
      availability: [
        { time: "8AM", status: "busy" },
        { time: "12PM", status: "busy" },
        { time: "4PM", status: "busy" },
        { time: "8PM", status: "busy" },
      ],
    },
    {
      name: "Lisa Thompson",
      status: "available",
      location: "San Antonio, TX",
      experience: "2 years",
      vehicleType: "Small Van",
      rating: 4.7,
      transports: 45,
      onTimePercentage: 96,
      animalsTransported: 234,
      availability: [
        { time: "8AM", status: "available" },
        { time: "12PM", status: "available" },
        { time: "4PM", status: "available" },
        { time: "8PM", status: "available" },
      ],
    },
  ]

  const notifications = [
    {
      icon: AlertCircle,
      iconColor: "text-resqdx-icon-orange",
      text: "Sarah Martinez completed transport successfully",
    },
    {
      icon: AlertCircle,
      iconColor: "text-resqdx-icon-orange",
      text: "Mike Rodriguez reports 15min delay due to traffic",
    },
    {
      icon: CheckCircle,
      iconColor: "text-resqdx-icon-green",
      text: "Jennifer Adams is now available for assignments",
    },
    {
      icon: FileText,
      iconColor: "text-resqdx-icon-red",
      text: "New driver application: Alex Johnson",
    },
  ]

  const networkData = [
    { time: "8AM - 12PM", drivers: 6 },
    { time: "12PM - 5PM", drivers: 8 },
    { time: "5PM - 9PM", drivers: 4 },
    { time: "Emergency", drivers: 3, status: "on-call" },
  ]

  const statusColors = {
    available: "bg-resqdx-status-available text-resqdx-green-dark",
    "on-transport": "bg-resqdx-status-inprogress text-resqdx-orange",
    offline: "bg-resqdx-status-offline text-resqdx-icon-red",
  }

  const availabilityColors = {
    available: "bg-resqdx-green-dark",
    busy: "bg-resqdx-orange",
  }

  return (
    <div className="min-h-screen bg-resqdx-green-dark p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <header className="flex items-center gap-2 text-resqdx-text-dark mb-6">
          <PawPrint className="h-8 w-8 text-resqdx-green-dark" />
          <h1 className="text-3xl font-bold">ResQDx</h1>
          <span className="text-3xl font-semibold ml-4">Available Drivers</span>
        </header>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Stat Card 1 */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border p-6">
            <p className="text-resqdx-text-medium text-sm mb-2">Total Active Drivers</p>
            <h2 className="text-4xl font-bold text-resqdx-text-dark mb-3">23</h2>
            <p className="text-resqdx-text-medium text-sm"></p>
            <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block bg-resqdx-status-available text-resqdx-green-dark">
              +2 new this week
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border p-6">
            <p className="text-resqdx-text-medium text-sm mb-2">Currently Available</p>
            <h2 className="text-4xl font-bold text-resqdx-text-dark mb-3">12</h2>
            <p className="text-resqdx-text-medium text-sm"></p>
            <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block bg-resqdx-status-available text-resqdx-green-dark">
              Ready for pickup
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border p-6">
            <p className="text-resqdx-text-medium text-sm mb-2">On Active Transports</p>
            <h2 className="text-4xl font-bold text-resqdx-text-dark mb-3">8</h2>
            <p className="text-resqdx-text-medium text-sm"></p>
            <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block bg-resqdx-status-inprogress text-resqdx-orange">
              In progress
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border p-6">
            <p className="text-resqdx-text-medium text-sm mb-2">Success Rate</p>
            <h2 className="text-4xl font-bold text-resqdx-text-dark mb-3">96%</h2>
            <p className="text-resqdx-text-medium text-sm"></p>
            <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block bg-resqdx-status-available text-resqdx-green-dark">
              +2% this month
            </div>
          </div>
        </div>

        {/* Driver Filters */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          {/* All Drivers Dropdown */}
          <div className="relative flex-1 md:flex-none w-full md:w-auto">
            <button
              onClick={() => setAllDriversOpen(!allDriversOpen)}
              className="flex items-center justify-between w-full px-4 py-2 rounded-md border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-resqdx-green-dark focus:ring-offset-2"
            >
              All Drivers <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {allDriversOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-resqdx-card-bg shadow-lg border border-resqdx-border">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    Available
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    On Transport
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    Offline
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* All Locations Dropdown */}
          <div className="relative flex-1 md:flex-none w-full md:w-auto">
            <button
              onClick={() => setAllLocationsOpen(!allLocationsOpen)}
              className="flex items-center justify-between w-full px-4 py-2 rounded-md border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-resqdx-green-dark focus:ring-offset-2"
            >
              All Locations <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {allLocationsOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-resqdx-card-bg shadow-lg border border-resqdx-border">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    New York
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    Los Angeles
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-resqdx-text-dark hover:bg-gray-100">
                    Chicago
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search drivers..."
            className="flex-1 w-full md:w-auto px-4 py-2 rounded-md border border-resqdx-border text-resqdx-text-dark bg-resqdx-card-bg focus:outline-none focus:ring-2 focus:ring-resqdx-green-dark focus:ring-offset-2"
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-resqdx-orange text-white hover:bg-resqdx-orange/90 rounded-md px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Phone className="h-4 w-4" /> Contact All Available
            </button>
            <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto">
              <FileText className="h-4 w-4" /> Generate Report
            </button>
            <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Plus className="h-4 w-4" /> Add Driver
            </button>
          </div>
        </div>

        {/* Driver Network, Notifications, Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Driver Network */}
          <div className="lg:col-span-1 bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border">
            <div className="p-6 pb-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-resqdx-text-dark">
                <Users className="h-5 w-5 text-resqdx-green-dark" /> Driver Network
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-3">
              {networkData.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-resqdx-text-medium text-sm">
                  <span>{item.time}</span>
                  <span className="font-medium text-resqdx-text-dark">
                    {item.drivers} {item.status || "drivers"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Driver Notifications */}
            <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border">
              <div className="p-6 pb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-resqdx-text-dark">
                  <Bell className="h-5 w-5 text-resqdx-green-dark" /> Driver Notifications
                </h3>
              </div>
              <div className="p-6 pt-0 space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <notification.icon className={cn("h-5 w-5 flex-shrink-0", notification.iconColor)} />
                    <p className="text-resqdx-text-medium text-sm">{notification.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border">
              <div className="p-6 pb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-resqdx-text-dark">
                  <BarChart2 className="h-5 w-5 text-resqdx-green-dark" /> Quick Stats
                </h3>
              </div>
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-green-dark">52%</span>
                  <span className="text-resqdx-text-medium text-xs">Available</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-orange">35%</span>
                  <span className="text-resqdx-text-medium text-xs">On Transport</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-icon-red">13%</span>
                  <span className="text-resqdx-text-medium text-xs">Offline</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-green-dark">4.8</span>
                  <span className="text-resqdx-text-medium text-xs">Avg Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Driver Cards */}
        <div className="space-y-6 mb-6">
          {driverData.map((driver, index) => (
            <div
              key={index}
              className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border overflow-hidden"
            >
              <div className="flex flex-row items-center justify-between p-4 pb-2">
                <h3 className="text-xl font-semibold text-resqdx-text-dark">{driver.name}</h3>
                <span
                  className={cn("px-3 py-1 rounded-full text-xs font-medium uppercase", statusColors[driver.status])}
                >
                  {driver.status.replace("-", " ")}
                </span>
              </div>
              <div className="p-4 pt-0">
                {driver.currentTransport && (
                  <div className="w-full mb-4">
                    <button
                      onClick={() => toggleAccordion(driver.name)}
                      className="flex items-center justify-between w-full text-left text-resqdx-orange font-semibold text-sm py-2 hover:underline focus:outline-none"
                    >
                      Currently Transporting
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", accordionOpen[driver.name] ? "rotate-180" : "")}
                      />
                    </button>
                    {accordionOpen[driver.name] && (
                      <div className="text-resqdx-text-medium text-sm space-y-1 pb-2">
                        <p className="font-semibold">{driver.currentTransport.route}</p>
                        <p>
                          ETA: {driver.currentTransport.eta} • {driver.currentTransport.animals}
                        </p>
                        <p>Location: {driver.currentTransport.location}</p>
                        <p>Available Again: {driver.currentTransport.availableAgain}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-resqdx-text-medium mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-resqdx-text-light" />
                    <span>Location: {driver.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-resqdx-text-light" />
                    <span>Vehicle Type: {driver.vehicleType}</span>
                  </div>
                  {driver.experience && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-resqdx-text-light" />
                      <span>Experience: {driver.experience}</span>
                    </div>
                  )}
                  {driver.lastActive && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-resqdx-text-light" />
                      <span>Last Active: {driver.lastActive}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>Rating: {driver.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-2xl font-bold text-resqdx-text-dark">{driver.transports}</span>
                    <span className="text-resqdx-text-medium text-xs">Transports</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-2xl font-bold text-resqdx-text-dark">{driver.onTimePercentage}%</span>
                    <span className="text-resqdx-text-medium text-xs">On-Time</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-2xl font-bold text-resqdx-text-dark">{driver.animalsTransported}</span>
                    <span className="text-resqdx-text-medium text-xs">Animals</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-resqdx-text-medium text-sm mb-2">Today's Availability</p>
                  <div className="flex h-6 rounded-md overflow-hidden">
                    {driver.availability.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={cn(
                          "flex-1 flex items-center justify-center text-xs text-white font-medium",
                          availabilityColors[slot.status],
                        )}
                      >
                        {slot.time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-resqdx-orange text-white hover:bg-resqdx-orange/90 rounded-md px-4 py-2 flex items-center justify-center gap-2 flex-1">
                    <Phone className="h-4 w-4" /> Contact
                  </button>
                  {driver.status === "on-transport" ? (
                    <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 flex-1">
                      <MapPin className="h-4 w-4" /> Track
                    </button>
                  ) : (
                    <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 flex-1">
                      <ClipboardList className="h-4 w-4" /> Assign
                    </button>
                  )}
                  <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 flex-1">
                    <User className="h-4 w-4" /> Profile
                  </button>
                  {driver.status !== "on-transport" && (
                    <button className="border border-resqdx-border text-resqdx-text-medium bg-resqdx-card-bg hover:bg-gray-50 rounded-md px-4 py-2 flex items-center justify-center gap-2 flex-1">
                      <Calendar className="h-4 w-4" /> Schedule
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map and Today's Shifts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coverage Map */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border">
            <div className="p-6 pb-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-resqdx-text-dark">
                <Map className="h-5 w-5 text-resqdx-green-dark" /> Coverage Map
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="h-48 border-2 border-dashed border-resqdx-border rounded-md flex items-center justify-center text-resqdx-text-medium text-center">
                Driver Coverage
                <br />
                (Interactive Map)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-text-dark">4</span>
                  <span className="text-resqdx-text-medium text-xs">Cities</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                  <span className="text-2xl font-bold text-resqdx-text-dark">85%</span>
                  <span className="text-resqdx-text-medium text-xs">Coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Shifts */}
          <div className="bg-resqdx-card-bg rounded-lg shadow-sm border border-resqdx-card-border">
            <div className="p-6 pb-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-resqdx-text-dark">
                <CalendarDays className="h-5 w-5 text-resqdx-green-dark" /> Today's Shifts
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-resqdx-text-medium text-sm">No shifts scheduled for today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
