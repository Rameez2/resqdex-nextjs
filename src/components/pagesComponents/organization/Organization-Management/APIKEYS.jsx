"use client"

import { useState } from "react"

const APIKEYS = () => {
  const [newKeyName, setNewKeyName] = useState("")
  const [selectedEnvironment, setSelectedEnvironment] = useState("Production")
  const [permissions, setPermissions] = useState({
    readAnimals: true,
    writeAnimals: false,
    readApplications: true,
    writeApplications: false,
    transportAccess: false,
    analyticsAccess: false,
  })

  const apiKeys = [
    {
      name: "Production API",
      status: "Active",
      created: "Dec 15, 2024",
      lastUsed: "2 hours ago",
      callsThisMonth: "1,847",
      permissions: "Read/Write",
      key: "rqdk_prod_ak_1f2e3d4c5b6a7890abcdef123456789",
    },
    {
      name: "Development API",
      status: "Active",
      created: "Nov 28, 2024",
      lastUsed: "1 day ago",
      callsThisMonth: "543",
      permissions: "Read Only",
      key: "rqdk_dev_ak_987654321fedcba0987654321abcdef",
    },
    {
      name: "Mobile App",
      status: "Limited",
      created: "Oct 12, 2024",
      lastUsed: "5 minutes ago",
      callsThisMonth: "89",
      permissions: "Mobile Only",
      key: "rqdk_mob_ak_abcdef123456789fedcba0987654321",
    },
  ]

  const integrations = [
    {
      name: "PetFinder Sync",
      description: "Automatic animal listing sync",
      status: "ACTIVE",
      icon: "PF",
      color: "bg-blue-500",
    },
    {
      name: "Website Bridge",
      description: "Public website integration",
      status: "ACTIVE",
      icon: "WB",
      color: "bg-green-500",
    },
    {
      name: "Mobile App",
      description: "Staff mobile application",
      status: "LIMITED",
      icon: "MA",
      color: "bg-orange-500",
    },
    {
      name: "Facebook Auto-Post",
      description: "Social media automation",
      status: "ACTIVE",
      icon: "FB",
      color: "bg-purple-500",
    },
  ]

  const usageData = [
    { day: "Mon", calls: 280 },
    { day: "Tue", calls: 320 },
    { day: "Wed", calls: 380 },
    { day: "Thu", calls: 420 },
    { day: "Fri", calls: 350 },
    { day: "Sat", calls: 290 },
    { day: "Sun", calls: 250 },
  ]

  const maxCalls = Math.max(...usageData.map((d) => d.calls))

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const handlePermissionChange = (permission, checked) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: checked,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-yellow-300 text-3xl">🔑</div>
            <h1 className="text-3xl font-bold">API Keys</h1>
          </div>
          <p className="text-purple-100">Developer tools and system integrations management</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* API Overview */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📊</span>
                  </div>
                  <h2 className="text-lg font-semibold">API Overview</h2>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">5 ACTIVE</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                    <div className="text-sm text-gray-600">Active Keys</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">2.4K</div>
                    <div className="text-sm text-gray-600">Monthly Calls</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">12ms</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-yellow-600 text-lg">⚠️</span>
                  <div className="text-yellow-800 text-sm">
                    <strong>Reminder:</strong> API keys should be kept secure and rotated regularly
                  </div>
                </div>
              </div>
            </div>

            {/* Active API Keys */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🔑</span>
                  </div>
                  <h2 className="text-lg font-semibold">Active API Keys</h2>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>+</span>
                  Create New Key
                </button>
              </div>
              <div className="p-6 space-y-6">
                {apiKeys.map((key, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{key.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          key.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {key.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Created</span>
                        <div className="font-medium">{key.created}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Last Used</span>
                        <div className="font-medium">{key.lastUsed}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Calls This Month</span>
                        <div className="font-medium">{key.callsThisMonth}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Permissions</span>
                        <div className="font-medium">{key.permissions}</div>
                      </div>
                    </div>

                    <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm flex items-center justify-between">
                      <span>{key.key}</span>
                      <button
                        onClick={() => copyToClipboard(key.key)}
                        className="ml-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs flex items-center gap-1"
                      >
                        📋 Copy
                      </button>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 flex items-center gap-1">
                        ✏️ Edit
                      </button>
                      <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 flex items-center gap-1">
                        🔄 Regenerate
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1">
                        🗑️ Revoke
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Usage Analytics */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">📈</span>
                  </div>
                  <h2 className="text-lg font-semibold">Usage Analytics</h2>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">REAL-TIME</span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>API Calls (Last 7 Days)</span>
                    <span>Daily Usage</span>
                  </div>

                  <div className="flex items-end justify-between h-32 mb-4">
                    {usageData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-8 bg-purple-500 rounded-t"
                          style={{ height: `${(data.calls / maxCalls) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{data.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-blue-600">2,180</div>
                    <div className="text-xs text-gray-600">This Week</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-green-600">+12%</div>
                    <div className="text-xs text-gray-600">vs Last Week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Create New API Key */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">➕</span>
                  </div>
                  <h2 className="text-lg font-semibold">Create New API Key</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-blue-200 rounded-lg p-4 space-y-4">
                  <div>
                    <label htmlFor="keyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Key Name
                    </label>
                    <input
                      id="keyName"
                      type="text"
                      placeholder="e.g., Website Integration"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="environment" className="block text-sm font-medium text-gray-700 mb-1">
                      Environment
                    </label>
                    <select
                      id="environment"
                      value={selectedEnvironment}
                      onChange={(e) => setSelectedEnvironment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Production">Production</option>
                      <option value="Development">Development</option>
                      <option value="Staging">Staging</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input
                          id="readAnimals"
                          type="checkbox"
                          checked={permissions.readAnimals}
                          onChange={(e) => handlePermissionChange("readAnimals", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="readAnimals" className="text-sm text-gray-700">
                          Read Animals
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="writeAnimals"
                          type="checkbox"
                          checked={permissions.writeAnimals}
                          onChange={(e) => handlePermissionChange("writeAnimals", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="writeAnimals" className="text-sm text-gray-700">
                          Write Animals
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="readApplications"
                          type="checkbox"
                          checked={permissions.readApplications}
                          onChange={(e) => handlePermissionChange("readApplications", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="readApplications" className="text-sm text-gray-700">
                          Read Applications
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="writeApplications"
                          type="checkbox"
                          checked={permissions.writeApplications}
                          onChange={(e) => handlePermissionChange("writeApplications", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="writeApplications" className="text-sm text-gray-700">
                          Write Applications
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="transportAccess"
                          type="checkbox"
                          checked={permissions.transportAccess}
                          onChange={(e) => handlePermissionChange("transportAccess", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="transportAccess" className="text-sm text-gray-700">
                          Transport Access
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="analyticsAccess"
                          type="checkbox"
                          checked={permissions.analyticsAccess}
                          onChange={(e) => handlePermissionChange("analyticsAccess", e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="analyticsAccess" className="text-sm text-gray-700">
                          Analytics Access
                        </label>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
                    🔑 Generate API Key
                  </button>
                </div>
              </div>
            </div>

            {/* Active Integrations */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">⚙️</span>
                  </div>
                  <h2 className="text-lg font-semibold">Active Integrations</h2>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">12 CONNECTED</span>
              </div>
              <div className="p-6 space-y-3">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {integration.icon}
                      </div>
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        <div className="text-sm text-gray-500">{integration.description}</div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        integration.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : integration.status === "LIMITED"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {integration.status}
                    </span>
                  </div>
                ))}

                <button className="w-full mt-4 text-purple-600 border border-purple-200 hover:bg-purple-50 bg-transparent py-2 px-4 rounded-lg font-medium">
                  Manage All Integrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APIKEYS
