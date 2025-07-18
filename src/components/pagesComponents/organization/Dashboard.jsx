import React from 'react';

const Dashboard = () => {
    return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Paws & Hearts Rescue</h1>
          <p className="text-gray-500">Verified Organization • Austin, TX</p>
        </div>

        {/* Mission Control Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-blue-500 rounded"></div>
              <div className="w-2 h-6 bg-green-500 rounded mt-2"></div>
              <div className="w-2 h-4 bg-yellow-500 rounded mt-4"></div>
              <div className="w-2 h-7 bg-red-500 rounded mt-1"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Mission Control</h2>
          </div>
          <p className="text-gray-500 text-sm">Last updated: 7:28:40 PM</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Operational Metrics */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                <h3 className="text-lg font-semibold text-gray-900">Operational Metrics</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Available Pets */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Available Pets</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">23</span>
                      <span className="text-gray-500 ml-1">total</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">(14 dogs, 7 cats, 2 small)</p>
                </div>

                {/* Applications */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Applications Needing Review</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-red-500">12</span>
                      <span className="text-gray-500 ml-1">pending</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-sm text-red-500">(8 new, 4 overdue)</span>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">URGENT</span>
                    <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded">Review Now</span>
                  </div>
                </div>

                {/* Adoptions */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Adoptions This Month</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-500">4</span>
                      <span className="text-gray-500 ml-1">completed</span>
                    </div>
                  </div>
                  <p className="text-sm text-green-600">87% success</p>
                </div>

                {/* Active Transports */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Active Transports</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">3</span>
                      <span className="text-gray-500 ml-1">active</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">(2 incoming today, 1 departing)</p>
                </div>

                {/* Foster Placements */}
                <div className="space-y-2 md:col-span-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Foster Placements</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-500">18</span>
                      <span className="text-gray-500 ml-1">active</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">with 32 foster families</p>
                </div>
              </div>
            </div>

            {/* Health & Care and Community sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Health & Care */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Health & Care</h3>
                </div>

                <div className="space-y-4">
                  {/* Medical Items */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Medical Items Pending</span>
                      <span className="text-2xl font-bold text-red-500">6</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-sm text-red-500">items</span>
                      <span className="text-sm text-gray-500">(vaccinations, health checks, meds)</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">URGENT</span>
                      <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded">Address Now</span>
                    </div>
                  </div>

                  {/* Facility Capacity */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Facility Capacity</span>
                      <span className="text-2xl font-bold text-gray-900">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500">(23/30 kennels)</p>
                  </div>
                </div>
              </div>

              {/* Community & Resources */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Community & Resources</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Volunteer</span>
                      <span className="text-2xl font-bold text-gray-900">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Priority Items */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Priority Items</h3>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-600">Urgent</span>
                  <span className="text-2xl font-bold text-red-500 ml-4">7</span>
                  <span className="text-red-500 ml-2">needing</span>
                </div>
                <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded">Review</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Today's Agenda */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                <h3 className="text-lg font-semibold text-gray-900">Today's Agenda</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">9:30 AM - Vet appointment (Bella)</p>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">URGENT</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">11:00 AM - Meet & greet (Max)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">2:00 PM - Transport pickup</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Add Pet</p>
                </button>
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Review Apps</p>
                </button>
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Emergency Contacts</p>
                </button>
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Log Expense</p>
                </button>
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Call Vet</p>
                </button>
                <button className="p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg border">
                  <p className="font-medium text-gray-900">Check In</p>
                </button>
              </div>
            </div>

            {/* Weather & Transport */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-yellow-400 rounded"></div>
                <h3 className="text-lg font-semibold text-gray-900">Weather & Transport</h3>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900">72°F - Sunny</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Transports:</p>
                  <p className="text-gray-600">Houston→Dallas: 2:30 PM</p>
                  <p className="text-gray-600">Austin pickup: 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Dashboard;
