export default function EmergencyRequest() {
  const metrics = [
    {
      value: "7",
      label: "Active Emergency Requests",
      sublabel: "+3 in last hour",
      color: "text-red-600",
    },
    {
      value: "3",
      label: "Critical Priority",
      sublabel: "Immediate response needed",
      color: "text-red-600",
    },
    {
      value: "12min",
      label: "Avg Response Time",
      sublabel: "Target: <15min",
      color: "text-red-600",
    },
    {
      value: "5",
      label: "Emergency Drivers Available",
      sublabel: "Ready for dispatch",
      color: "text-red-600",
    },
  ]

  const emergencyRequests = [
    {
      id: "ER-2024-089",
      priority: "CRITICAL",
      time: "03:54",
      animal: "Rocky - German Shepherd Mix",
      condition: "SEVERE INJURY - HIT BY CAR",
      pickup: "Rural Road 287, Austin",
      destination: "Emergency Animal Hospital",
      distance: "23 miles",
      estimatedTime: "28 minutes",
      specialNote: "LIFE-THREATENING - IMMEDIATE TRANSPORT REQUIRED",
      priorityColor: "bg-red-500",
    },
    {
      id: "ER-2024-090",
      priority: "URGENT",
      time: "18:27",
      animal: "Bella - Pregnant Cat",
      condition: "LABOR COMPLICATIONS",
      pickup: "Downtown Austin Shelter",
      destination: "Austin Veterinary Center",
      distance: "8 miles",
      estimatedTime: "15 minutes",
      priorityColor: "bg-orange-500",
    },
    {
      id: "ER-2024-091",
      priority: "CRITICAL",
      time: "07:35",
      animal: "Shadow - Abandoned Puppies (4)",
      condition: "HYPOTHERMIA - FOUND IN COLD",
      pickup: "Warehouse District",
      destination: "24-Hour Animal Emergency",
      distance: "12 miles",
      estimatedTime: "18 minutes",
      specialNote: "TEMPERATURE CRITICAL - WARMING REQUIRED DURING TRANSPORT",
      priorityColor: "bg-red-500",
    },
    {
      id: "ER-2024-092",
      priority: "HIGH",
      time: "45:30",
      animal: "Max - Senior Dog",
      condition: "SEIZURE - ONGOING",
      pickup: "Foster Home - Cedar Park",
      destination: "Specialty Veterinary Hospital",
      distance: "31 miles",
      estimatedTime: "35 minutes",
      priorityColor: "bg-yellow-500",
    },
  ]

  const drivers = [
    { name: "Sarah Martinez", location: "Austin area • ETA 8 min", status: "Away" },
    { name: "Mike Rodriguez", location: "Downtown • ETA 12 min", status: "Away" },
    { name: "Jennifer Adams", location: "South Austin • ETA 15 min", status: "Away" },
    { name: "David Wilson", location: "Cedar Park • ETA 20 min", status: "Away" },
  ]

  const contacts = [
    { name: "Emergency Animal Hospital", subtitle: "24/7 Critical Care" },
    { name: "Dr. Sarah Johnson", subtitle: "Emergency Veterinarian" },
    { name: "Emergency Coordinator", subtitle: "Transport Crisis Manager" },
    { name: "911 Animal Services", subtitle: "" },
  ]

  const protocolItems = [
    "Assess emergency severity",
    "Contact nearest emergency driver",
    "Alert receiving veterinary facility",
    "Provide GPS tracking and ETA",
    "Monitor transport and communicate updates",
  ]

  return (
    <div className="min-h-screen bg-emerald-700 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4">
                <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Response Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 pb-3">
            <h2 className="flex items-center gap-2 text-red-600 text-lg font-semibold">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              Emergency Response Actions
            </h2>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button className="bg-red-600 hover:bg-red-700 text-white h-12 px-4 rounded-md font-medium transition-colors">
                + NEW CRITICAL REQUEST
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-4 rounded-md font-medium transition-colors">
                MASS ALERT ALL DRIVERS
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-4 rounded-md font-medium transition-colors">
                📞 CONTACT EMERGENCY VET
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-4 rounded-md font-medium transition-colors">
                TRACK ALL EMERGENCIES
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-4 rounded-md font-medium transition-colors">
                📞 VETERINARY HOTLINE
              </button>
              <button className="bg-red-800 hover:bg-red-900 text-white h-12 px-4 rounded-md font-medium transition-colors">
                ESCALATE TO SUPERVISOR
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Emergency Requests */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-3">
                <h2 className="flex items-center gap-2 text-red-600 text-lg font-semibold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  Active Emergency Requests
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-4">
                {emergencyRequests.map((request) => (
                  <div key={request.id} className="border-2 border-red-200 rounded-lg">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-semibold text-gray-700">{request.id}</div>
                        <span className={`${request.priorityColor} text-white px-2 py-1 rounded text-xs font-medium`}>
                          {request.priority}
                        </span>
                      </div>

                      <div className="bg-yellow-100 rounded-lg p-3 mb-3 text-center">
                        <div className="text-2xl font-bold text-orange-600">{request.time}</div>
                        <div className="text-sm text-gray-600">Minutes since request</div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="font-semibold text-gray-800">{request.animal}</div>
                        <div className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">{request.condition}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <div className="font-medium text-gray-600">Pickup Location</div>
                          <div className="text-gray-800">{request.pickup}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-600">Destination</div>
                          <div className="text-gray-800">{request.destination}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-600">Distance</div>
                          <div className="text-gray-800">{request.distance}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-600">Estimated Time</div>
                          <div className="text-gray-800">{request.estimatedTime}</div>
                        </div>
                      </div>

                      {request.specialNote && (
                        <div className="bg-red-800 text-white p-3 rounded-lg mb-4 text-center font-semibold text-sm">
                          ⚠️ {request.specialNote}
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white flex-1 py-2 px-4 rounded-md font-medium transition-colors">
                          EMERGENCY ASSIGN
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                          📍 Track
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                          🔺 Escalate
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Emergency Drivers */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-3">
                <h2 className="flex items-center gap-2 text-red-600 text-lg font-semibold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  Emergency Drivers
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-3">
                {drivers.map((driver, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="font-medium text-sm">{driver.name}</div>
                      </div>
                      <div className="text-xs text-gray-600 ml-4">{driver.location}</div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {driver.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-3">
                <h2 className="flex items-center gap-2 text-red-600 text-lg font-semibold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Emergency Contacts
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-3">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-red-50 rounded">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-800">{contact.name}</div>
                      {contact.subtitle && <div className="text-xs text-gray-600">{contact.subtitle}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Protocol */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-3">
                <h2 className="flex items-center gap-2 text-red-600 text-lg font-semibold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Emergency Protocol
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-2">
                {protocolItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="text-gray-700">{item}</div>
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
