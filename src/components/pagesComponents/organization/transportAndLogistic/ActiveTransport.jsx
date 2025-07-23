"use client"

import {
  Car,
  Truck,
  AlertCircle,
  Phone,
  BarChart,
  Settings,
  Map,
  MapPin,
  Home,
  Hospital,
  User,
  PartyPopper,
  Search,
  BookOpen,
  HeartHandshake,
  ClipboardList,
  BellRing,
} from "lucide-react"

export default function ActiveTransport() {
  return (
    <div className="min-h-screen w-full bg-[#2E5C4E] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-gray-900">8</div>
            <p className="text-sm text-gray-600 mt-1">Currently Active</p>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-100 text-green-800 mt-2">
              +2 from yesterday
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-gray-900">3</div>
            <p className="text-sm text-gray-600 mt-1">Emergency Priority</p>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-100 text-red-800 mt-2">
              Requires attention
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
            <div className="text-4xl font-bold">94%</div>
            <p className="text-sm mt-1">On-Time Rate</p>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white bg-opacity-20 text-white mt-2">
              +3% this week
            </span>
          </div>
        </div>

        {/* Avg Transit Time Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl font-bold text-gray-900">2.4hrs</div>
          <p className="text-sm text-gray-600 mt-1">Avg Transit Time</p>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-100 text-green-800 mt-2">
            Within targets
          </span>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="p-0 pb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <BellRing className="h-5 w-5 text-orange-500" /> Quick Actions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <button className="px-4 py-2 rounded-md text-white flex items-center gap-2 bg-red-500 hover:bg-red-600">
              <AlertCircle className="h-4 w-4" /> Emergency Alert
            </button>
            <button className="px-4 py-2 rounded-md text-white flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
              <Phone className="h-4 w-4" /> Contact All Drivers
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2">
              <BarChart className="h-4 w-4 text-blue-500" /> Generate Report
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2">
              <Settings className="h-4 w-4 text-gray-500" /> Update Routes
            </button>
            <button className="px-4 py-2 rounded-md text-white flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
              <BookOpen className="h-4 w-4" /> View All Routes
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2">
              <Car className="h-4 w-4 text-gray-500" /> Traffic Conditions
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Transport Tracking */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="p-0 pb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Truck className="h-5 w-5 text-green-600" /> Live Transport Tracking
                </h2>
              </div>

              {/* Transport Card 1: EMERGENCY */}
              <div className="border border-red-500 rounded-lg p-4 mb-4 relative">
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-500 text-white">
                  EMERGENCY
                </span>
                <AlertCircle className="absolute top-4 right-20 h-5 w-5 text-red-500" /> {/* Exclamation icon */}
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <span className="text-gray-700">T-2024-089</span>
                  <MapPin className="h-4 w-4 text-red-500" /> Austin Animal Control
                  <span className="mx-2 text-gray-400">→</span>
                  <Hospital className="h-4 w-4 text-purple-500" /> Emergency Vet Clinic
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Driver</span>
                    <br />
                    <span className="font-medium">Mike Rodriguez</span>
                  </div>
                  <div>
                    <span className="text-gray-500">ETA</span>
                    <br />
                    <span className="font-medium">8 minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Distance Left</span>
                    <br />
                    <span className="font-medium">3.2 miles</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Priority</span>
                    <br />
                    <span className="font-medium text-red-600">CRITICAL</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Animals (1)</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Rocky - Injured Dog
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-full bg-orange-500 rounded-full w-[70%]"></div> {/* Placeholder for progress */}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600">
                    Emergency Contact
                  </button>
                  <button className="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600">
                    Track Live
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Vet Alert
                  </button>
                </div>
              </div>

              {/* Transport Card 2: IN TRANSIT */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 relative">
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                  IN TRANSIT
                </span>
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <span className="text-gray-700">T-2024-087</span>
                  <MapPin className="h-4 w-4 text-red-500" /> Houston Rescue Center
                  <span className="mx-2 text-gray-400">→</span>
                  <Home className="h-4 w-4 text-green-500" /> Dallas Forever Homes
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Driver</span>
                    <br />
                    <span className="font-medium">Sarah Martinez</span>
                  </div>
                  <div>
                    <span className="text-gray-500">ETA</span>
                    <br />
                    <span className="font-medium">2:30 PM</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Distance Left</span>
                    <br />
                    <span className="font-medium">45 miles</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status</span>
                    <br />
                    <span className="font-medium">On Schedule</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Animals (3)</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Bella - Golden Retriever
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Max - German Shepherd
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Luna - Siamese
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-full bg-orange-500 rounded-full w-[40%]"></div> {/* Placeholder for progress */}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600">
                    Track Live
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Contact Driver
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Update Status
                  </button>
                </div>
              </div>

              {/* Transport Card 3: IN TRANSIT */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 relative">
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                  IN TRANSIT
                </span>
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <span className="text-gray-700">T-2024-088</span>
                  <MapPin className="h-4 w-4 text-red-500" /> San Antonio Shelter
                  <span className="mx-2 text-gray-400">→</span>
                  <HeartHandshake className="h-4 w-4 text-yellow-500" /> Adoption Meetup Center
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Driver</span>
                    <br />
                    <span className="font-medium">Jennifer Adams</span>
                  </div>
                  <div>
                    <span className="text-gray-500">ETA</span>
                    <br />
                    <span className="font-medium">1:15 PM</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Distance Left</span>
                    <br />
                    <span className="font-medium">12 miles</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status</span>
                    <br />
                    <span className="font-medium text-green-600">Early</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Animals (2)</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Cooper - Border Collie
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Princess - Persian Cat
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-full bg-orange-500 rounded-full w-[90%]"></div> {/* Placeholder for progress */}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600">
                    Track Live
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Contact Driver
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Notify Adopters
                  </button>
                </div>
              </div>

              {/* Transport Card 4: URGENT */}
              <div className="border border-red-500 rounded-lg p-4 relative">
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-500 text-white">
                  URGENT
                </span>
                <AlertCircle className="absolute top-4 right-20 h-5 w-5 text-red-500" /> {/* Exclamation icon */}
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <span className="text-gray-700">T-2024-090</span>
                  <MapPin className="h-4 w-4 text-red-500" /> Rural Pickup Location
                  <span className="mx-2 text-gray-400">→</span>
                  <Home className="h-4 w-4 text-green-500" /> Foster Emergency Care
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Driver</span>
                    <br />
                    <span className="font-medium">David Wilson</span>
                  </div>
                  <div>
                    <span className="text-gray-500">ETA</span>
                    <br />
                    <span className="font-medium">45 minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Distance Left</span>
                    <br />
                    <span className="font-medium">28 miles</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Priority</span>
                    <br />
                    <span className="font-medium text-red-600">HIGH</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Animals (1)</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                    Shadow - Abandoned Puppy
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-full bg-orange-500 rounded-full w-[20%]"></div> {/* Placeholder for progress */}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600">
                    Emergency Contact
                  </button>
                  <button className="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600">
                    Track Live
                  </button>
                  <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Foster Alert
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Map View & Emergency Contacts */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Map View */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="p-0 pb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Map className="h-5 w-5 text-blue-500" /> Live Map View
                </h2>
              </div>
              <div className="border border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center text-center text-gray-500 mb-4">
                <div>
                  <MapPin className="h-6 w-6 mx-auto mb-2" />
                  Interactive Map
                  <br />
                  (Real-time GPS tracking)
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 justify-start">
                  <Search className="h-4 w-4 text-orange-500" /> Zoom to Transport
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 justify-start">
                  <BarChart className="h-4 w-4 text-orange-500" /> Route Analytics
                </button>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="p-0 pb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <PartyPopper className="h-5 w-5 text-red-500" /> Emergency Contacts
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 justify-start">
                  <Hospital className="h-4 w-4 text-orange-500" /> Emergency Vet Clinic
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 justify-start">
                  <User className="h-4 w-4 text-orange-500" /> Dr. Sarah Johnson
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 justify-start">
                  <ClipboardList className="h-4 w-4 text-orange-500" /> Transport Coordinator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
