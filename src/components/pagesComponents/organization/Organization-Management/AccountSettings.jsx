"use client"

import { useState } from "react"

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("Organization")
  const [formData, setFormData] = useState({
    organizationName: "Austin Animal Rescue",
    displayName: "Austin Animal Rescue",
    organizationType: "Non-Profit Organization",
    taxId: "12-3456789",
    missionStatement:
      "Dedicated to rescuing, rehabilitating, and rehoming animals in need while promoting responsible pet ownership and animal welfare in the Austin community.",
    primaryEmail: "admin@austinanimalrescue.org",
    phoneNumber: "(512) 555-0123",
    website: "https://austinanimalrescue.org",
    socialMedia: "https://facebook.com/austinanimalrescue",
    mailingAddress: "1234 Rescue Lane\nAustin, TX 78701\nUnited States",
    timeZone: "Central Time (CT)",
    currency: "US Dollar ($)",
    operatingHours: "Monday-Friday 9AM-6PM, Saturday",
    serviceAreas: "Austin, Round Rock, Cedar Park, Pflugerville",
    licenseNumber: "TX-RESCUE-4567",
    licenseExpiry: "12/31/2025",
    insuranceProvider: "Animal Welfare Insurance Co.",
    policyNumber: "AWI-789456123",
  })

  const [integrations, setIntegrations] = useState({
    petfinder: true,
    adoptAPet: true,
    paypalDonations: true,
    mailchimp: false,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleIntegrationToggle = (integration) => {
    setIntegrations((prev) => ({ ...prev, [integration]: !prev[integration] }))
  }

  const tabs = [
    { id: "Organization", icon: "🏢", label: "Organization" },
    { id: "Branding", icon: "🎨", label: "Branding" },
    { id: "Notifications", icon: "🔔", label: "Notifications" },
    { id: "Security", icon: "🔒", label: "Security" },
    { id: "Integrations", icon: "🔗", label: "Integrations" },
    { id: "Backup", icon: "💾", label: "Backup" },
  ]

  const quickActions = [
    { icon: "📊", label: "Export Organization Data", color: "bg-purple-600" },
    { icon: "🔄", label: "Sync with External Systems", color: "bg-blue-500" },
    { icon: "📋", label: "Generate Compliance Report", color: "bg-gray-500" },
    { icon: "✉️", label: "Test Email Configuration", color: "bg-blue-400" },
    { icon: "👁️", label: "Preview Public Profile", color: "bg-pink-400" },
    { icon: "🗑️", label: "Delete Organization", color: "bg-red-400" },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="text-3xl">⚙️</div>
            <h1 className="text-4xl font-bold">Account Settings</h1>
          </div>
          <p className="text-purple-100 text-lg">
            Organization configuration, system preferences, and administrative settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-xl">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              {/* Header with save indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🏢</div>
                  <h2 className="text-2xl font-bold text-gray-800">Organization Information</h2>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">All changes saved</span>
                </div>
              </div>

              {/* Basic Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-lg">📝</div>
                  <h3 className="text-lg font-semibold text-gray-700">Basic Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange("organizationName", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Legal name of your rescue organization</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                    <input
                      type="text"
                      value={formData.displayName}
                      onChange={(e) => handleInputChange("displayName", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Public-facing name for your organization</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => handleInputChange("organizationType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option>Non-Profit Organization</option>
                      <option>For-Profit Organization</option>
                      <option>Government Agency</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID / EIN</label>
                    <input
                      type="text"
                      value={formData.taxId}
                      onChange={(e) => handleInputChange("taxId", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Federal tax identification number</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                  <textarea
                    value={formData.missionStatement}
                    onChange={(e) => handleInputChange("missionStatement", e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-lg">💌</div>
                  <h3 className="text-lg font-semibold text-gray-700">Contact Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.primaryEmail}
                      onChange={(e) => handleInputChange("primaryEmail", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Media</label>
                    <input
                      type="url"
                      value={formData.socialMedia}
                      onChange={(e) => handleInputChange("socialMedia", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mailing Address</label>
                  <textarea
                    value={formData.mailingAddress}
                    onChange={(e) => handleInputChange("mailingAddress", e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Operations Settings */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-lg">⚙️</div>
                  <h3 className="text-lg font-semibold text-gray-700">Operations Settings</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                    <select
                      value={formData.timeZone}
                      onChange={(e) => handleInputChange("timeZone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Pacific Time (PT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleInputChange("currency", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option>US Dollar ($)</option>
                      <option>Euro (€)</option>
                      <option>British Pound (£)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Operating Hours</label>
                    <input
                      type="text"
                      value={formData.operatingHours}
                      onChange={(e) => handleInputChange("operatingHours", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Areas</label>
                    <input
                      type="text"
                      value={formData.serviceAreas}
                      onChange={(e) => handleInputChange("serviceAreas", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Legal & Compliance */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-lg">⚖️</div>
                  <h3 className="text-lg font-semibold text-gray-700">Legal & Compliance</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                    <input
                      type="text"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">License Expiry</label>
                    <input
                      type="date"
                      value={formData.licenseExpiry}
                      onChange={(e) => handleInputChange("licenseExpiry", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                    <input
                      type="text"
                      value={formData.insuranceProvider}
                      onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
                    <input
                      type="text"
                      value={formData.policyNumber}
                      onChange={(e) => handleInputChange("policyNumber", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <span>🔄</span>
                  Reset to Defaults
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <span>👁️</span>
                  Preview Changes
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <span>💾</span>
                  Save Settings
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg">⚡</div>
                <h3 className="text-lg font-semibold text-gray-700">Quick Actions</h3>
              </div>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 ${action.color} text-white rounded-lg hover:opacity-90 transition-opacity text-left`}
                  >
                    <span>{action.icon}</span>
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Backup Status */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg">💾</div>
                <h3 className="text-lg font-semibold text-gray-700">Backup Status</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Daily Backup</div>
                    <div className="text-sm text-gray-500">Today, 3:00 AM</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Success</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Weekly Backup</div>
                    <div className="text-sm text-gray-500">Sunday, 2:00 AM</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Success</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Monthly Archive</div>
                    <div className="text-sm text-gray-500">1st of month</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">Scheduled</span>
                </div>
              </div>
            </div>

            {/* Active Integrations */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg">🔗</div>
                <h3 className="text-lg font-semibold text-gray-700">Active Integrations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">PetFinder</div>
                    <div className="text-sm text-gray-500">Syncing animals daily</div>
                  </div>
                  <button
                    onClick={() => handleIntegrationToggle("petfinder")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      integrations.petfinder ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        integrations.petfinder ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Adopt-a-Pet</div>
                    <div className="text-sm text-gray-500">Connected</div>
                  </div>
                  <button
                    onClick={() => handleIntegrationToggle("adoptAPet")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      integrations.adoptAPet ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        integrations.adoptAPet ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">PayPal Donations</div>
                    <div className="text-sm text-gray-500">Processing payments</div>
                  </div>
                  <button
                    onClick={() => handleIntegrationToggle("paypalDonations")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      integrations.paypalDonations ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        integrations.paypalDonations ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Mailchimp</div>
                    <div className="text-sm text-gray-500">Newsletter sync</div>
                  </div>
                  <button
                    onClick={() => handleIntegrationToggle("mailchimp")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      integrations.mailchimp ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        integrations.mailchimp ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Account Health */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg">📊</div>
                <h3 className="text-lg font-semibold text-gray-700">Account Health</h3>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-500">Overall Health Score</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">All required fields completed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Valid license and insurance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Backup systems operational</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <span className="text-gray-700">Consider adding more contact methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
