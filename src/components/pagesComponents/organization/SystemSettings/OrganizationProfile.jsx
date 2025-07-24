"use client"

import { useState } from "react"

export default function OrganizationProfile() {
  const [formData, setFormData] = useState({
    organizationName: "Austin Animal Rescue",
    tagline: "Saving lives, one paw at a time",
    aboutUs:
      "Austin Animal Rescue has been dedicated to saving and improving the lives of homeless animals since 2018. We provide medical care, rehabilitation, and loving foster homes while working tirelessly to find permanent, loving homes for every animal in our care.",
    organizationType: "501(c)(3) Nonprofit",
    foundedYear: "2018",
    taxId: "XX-XXXXXXX",
    licenseNumber: "TX-AR-2018-045",
    phoneNumber: "(512) 555-0123",
    email: "info@austinanimalrescue.org",
    mailingAddress: "1234 Rescue Lane",
    city: "Austin",
    state: "Texas",
    zipCode: "78701",
    county: "Travis County",
    primaryColor: "#22c55e",
    secondaryColor: "#3b82f6",
    specialNotes: "Closed on major holidays",
    donationUrl: "https://austinanimalrescue.org/donate",
    volunteerUrl: "https://austinanimalrescue.org/volunteer",
  })

  const [settings, setSettings] = useState({
    showAdoptions: true,
    enableContactForm: true,
    showSuccessStories: true,
    volunteerSignup: true,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSettingToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">🏢</div>
          <h1 className="text-2xl font-bold">Organization Profile</h1>
        </div>
        <p className="text-green-100">Public-facing organization information and branding management</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PUBLISHED</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
              <input
                type="text"
                value={formData.organizationName}
                onChange={(e) => handleInputChange("organizationName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tagline / Mission Statement</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleInputChange("tagline", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About Us Description</label>
              <textarea
                rows={4}
                value={formData.aboutUs}
                onChange={(e) => handleInputChange("aboutUs", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                <select
                  value={formData.organizationType}
                  onChange={(e) => handleInputChange("organizationType", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option>501(c)(3) Nonprofit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Founded Year</label>
                <input
                  type="text"
                  value={formData.foundedYear}
                  onChange={(e) => handleInputChange("foundedYear", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / EIN</label>
                <input
                  type="text"
                  value={formData.taxId}
                  onChange={(e) => handleInputChange("taxId", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo & Branding */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Logo & Branding</h2>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CURRENT</span>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
              Current Logo
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">📷</div>
            <h3 className="font-medium text-gray-800 mb-2">Upload New Logo</h3>
            <p className="text-sm text-gray-600">PNG, JPG up to 2MB • Recommended: 400x400px</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Organization Colors</label>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">Primary:</label>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded border"></div>
                  <input
                    type="text"
                    value={formData.primaryColor}
                    onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">Secondary:</label>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded border"></div>
                  <input
                    type="text"
                    value={formData.secondaryColor}
                    onChange={(e) => handleInputChange("secondaryColor", e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Save Branding
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Reset to Default
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">VERIFIED</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Main Phone Number</label>
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mailing Address</label>
              <input
                type="text"
                value={formData.mailingAddress}
                onChange={(e) => handleInputChange("mailingAddress", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option>Texas</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
                <input
                  type="text"
                  value={formData.county}
                  onChange={(e) => handleInputChange("county", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hours of Operation */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Hours of Operation</h2>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PUBLIC</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Monday</div>
              <div className="text-sm text-gray-600">9AM - 6PM</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Tuesday</div>
              <div className="text-sm text-gray-600">9AM - 6PM</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Wednesday</div>
              <div className="text-sm text-gray-600">10AM - 6PM</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Thursday</div>
              <div className="text-sm text-gray-600">9AM - 6PM</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Friday</div>
              <div className="text-sm text-gray-600">9AM - 6PM</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">Saturday</div>
              <div className="text-sm text-gray-600">10AM - 4PM</div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="font-medium text-gray-800 mb-1">Sunday</div>
            <div className="text-sm text-gray-600">12PM - 4PM</div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
            <input
              type="text"
              value={formData.specialNotes}
              onChange={(e) => handleInputChange("specialNotes", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Edit Hours
          </button>
        </div>

        {/* Social Media & Website */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Social Media & Website</h2>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">4 CONNECTED</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">🌐</div>
              <span className="text-sm text-gray-700">https://austinanimalrescue.org</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">f</div>
              <span className="text-sm text-gray-700">https://facebook.com/austinanimalrescue</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
              <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center text-white text-sm">📷</div>
              <span className="text-sm text-gray-700">https://instagram.com/austinanimalrescue</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-sm">🐦</div>
              <span className="text-sm text-gray-700">https://twitter.com/austinrescue</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Donation Page URL</label>
              <input
                type="url"
                value={formData.donationUrl}
                onChange={(e) => handleInputChange("donationUrl", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Volunteer Application URL</label>
              <input
                type="url"
                value={formData.volunteerUrl}
                onChange={(e) => handleInputChange("volunteerUrl", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Public Page Settings */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Public Page Settings</h2>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">LIVE</span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Show Adoption Listings</h3>
                <p className="text-sm text-gray-600">Display available animals</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={settings.showAdoptions}
                  onChange={() => handleSettingToggle("showAdoptions")}
                />
                <div
                  className={`w-12 h-6 rounded-full shadow-inner cursor-pointer ${settings.showAdoptions ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleSettingToggle("showAdoptions")}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${settings.showAdoptions ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Enable Contact Form</h3>
                <p className="text-sm text-gray-600">Allow visitor inquiries</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={settings.enableContactForm}
                  onChange={() => handleSettingToggle("enableContactForm")}
                />
                <div
                  className={`w-12 h-6 rounded-full shadow-inner cursor-pointer ${settings.enableContactForm ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleSettingToggle("enableContactForm")}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${settings.enableContactForm ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Show Success Stories</h3>
                <p className="text-sm text-gray-600">Display adoption success</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={settings.showSuccessStories}
                  onChange={() => handleSettingToggle("showSuccessStories")}
                />
                <div
                  className={`w-12 h-6 rounded-full shadow-inner cursor-pointer ${settings.showSuccessStories ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleSettingToggle("showSuccessStories")}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${settings.showSuccessStories ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Volunteer Signup</h3>
                <p className="text-sm text-gray-600">Enable volunteer applications</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={settings.volunteerSignup}
                  onChange={() => handleSettingToggle("volunteerSignup")}
                />
                <div
                  className={`w-12 h-6 rounded-full shadow-inner cursor-pointer ${settings.volunteerSignup ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleSettingToggle("volunteerSignup")}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${settings.volunteerSignup ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
