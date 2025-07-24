"use client"

import { useState } from "react"

const PublicPageEditor = () => {
  const [activeTab, setActiveTab] = useState("Design")
  const [selectedTheme, setSelectedTheme] = useState("Flora & Fauna")
  const [showOnMobile, setShowOnMobile] = useState(true)
  const [showButton2, setShowButton2] = useState(true)
  const [showButton3, setShowButton3] = useState(false)

  const themes = [
    { name: "Flora & Fauna", color: "bg-green-500" },
    { name: "Ocean Blue", color: "bg-blue-500" },
    { name: "Warm Sunset", color: "bg-orange-500" },
    { name: "Purple Dream", color: "bg-purple-500" },
  ]

  const pageComponents = [
    { name: "Hero Section", icon: "🏠" },
    { name: "Available Animals", icon: "🐕" },
    { name: "About Us", icon: "ℹ️" },
    { name: "Success Stories", icon: "⭐" },
    { name: "Contact Form", icon: "📧" },
    { name: "Donation Button", icon: "💝" },
    { name: "Volunteer Signup", icon: "🙋" },
    { name: "Social Media", icon: "📱" },
    { name: "News & Updates", icon: "📰" },
    { name: "Photo Gallery", icon: "📸" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">🌐</span>
            </div>
            <h1 className="text-xl font-semibold">Public Page Editor</h1>
          </div>
          <p className="text-blue-100 text-sm">Customize your public website appearance and content layout</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-1">
            {["Design", "Mobile", "Social"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  activeTab === tab ? "bg-blue-500 text-white" : "bg-blue-700 text-blue-200 hover:bg-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">👁️ Preview</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
              💾 Save Draft
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600">
              🚀 Publish Changes
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
          {/* Choose Theme */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Choose Theme</h3>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setSelectedTheme(theme.name)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedTheme === theme.name
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-full h-16 ${theme.color} rounded mb-2`}></div>
                  <p className="text-xs font-medium text-gray-700">{theme.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Page Components */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Page Components</h3>
            <div className="space-y-2">
              {pageComponents.map((component) => (
                <div
                  key={component.name}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">{component.icon}</span>
                  </div>
                  <span className="text-sm text-gray-700">{component.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {["Reset Layout", "Import Template", "Export Design"].map((action) => (
                <button key={action} className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Browser Bar */}
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 ml-4">austinanimalsrescue.org</div>
              </div>
            </div>

            {/* Website Preview */}
            <div className="bg-white">
              {/* Hero Section */}
              <div className="bg-green-500 text-white text-center py-16 px-8">
                <h1 className="text-4xl font-bold mb-4">Austin Animal Rescue</h1>
                <p className="text-xl mb-8">Saving lives, one paw at a time</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white text-green-500 px-6 py-2 rounded font-medium hover:bg-gray-100">
                    Adopt Today
                  </button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700">
                    Volunteer
                  </button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700">
                    Donate
                  </button>
                </div>
              </div>

              {/* Animals Section */}
              <div className="py-12 px-8">
                <h2 className="text-3xl font-bold text-center mb-4">Find Your New Best Friend</h2>
                <p className="text-gray-600 text-center mb-8">Meet our adorable animals looking for loving homes</p>

                <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { name: "Buddy", breed: "Golden Retriever", age: "3 years", gender: "Male" },
                    { name: "Luna", breed: "Domestic Shorthair", age: "2 years", gender: "Female" },
                    { name: "Max", breed: "Labrador Mix", age: "5 years", gender: "Male" },
                  ].map((animal) => (
                    <div key={animal.name} className="bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                        <span className="text-6xl">🐕</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{animal.name}</h3>
                        <p className="text-sm text-gray-600">
                          {animal.breed} • {animal.age} • {animal.gender}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Element Properties</h3>
            <p className="text-sm text-gray-600 mb-4">Selected: Hero Section</p>

            {/* Content Section */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <span className="mr-2">📝</span> Content
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Main Title</label>
                  <input
                    type="text"
                    defaultValue="Austin Animal Rescue"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Subtitle</label>
                  <input
                    type="text"
                    defaultValue="Saving lives, one paw at a time"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Background Image</h4>
              <button className="w-full py-8 border-2 border-dashed border-gray-300 rounded text-sm text-gray-500 hover:border-gray-400">
                Upload Image
              </button>
            </div>

            {/* Styling */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <span className="mr-2">🎨</span> Styling
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Background Color</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded border"></div>
                    <input
                      type="text"
                      defaultValue="#22c55e"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Text Color</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded border"></div>
                    <input
                      type="text"
                      defaultValue="#ffffff"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Font Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Text Alignment</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                    <option>Center</option>
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Layout */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <span className="mr-2">📐</span> Layout
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Section Height</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Padding</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Show on Mobile */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Show on Mobile</span>
                <button
                  onClick={() => setShowOnMobile(!showOnMobile)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showOnMobile ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showOnMobile ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <span className="mr-2">🔘</span> Buttons
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Button 1 Text</label>
                  <input
                    type="text"
                    defaultValue="Adopt Today"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Show Button 2</span>
                  <button
                    onClick={() => setShowButton2(!showButton2)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      showButton2 ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showButton2 ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Show Button 3</span>
                  <button
                    onClick={() => setShowButton3(!showButton3)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      showButton3 ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showButton3 ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Apply Changes Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700">
              Apply Changes
            </button>

            {/* Additional Actions */}
            <div className="mt-4 space-y-2">
              <button className="w-full text-left py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded">
                Reset Section
              </button>
              <button className="w-full text-left py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded">
                Duplicate Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicPageEditor
