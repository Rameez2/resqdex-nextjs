"use client"

import { useState } from "react"

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    animalNotifications: {
      intakesArrivals: true,
      medicalUpdates: true,
      adoptions: true,
    },
    systemAdmin: {
      systemAlerts: true,
      staffManagement: true,
    },
    quietHours: {
      enabled: true,
      startTime: "10:00",
      endTime: "07:00",
    },
    emailDigest: "Daily",
    pushFrequency: "Immediate",
    smsAlerts: "Emergency",
    weeklyDigest: "Friday",
    htmlEmail: true,
    smsEnabled: true,
    browserPush: true,
    mobileApp: false,
  })

  const toggleSetting = (category, setting) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting],
      },
    }))
  }

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const Toggle = ({ checked, onChange, size = "default" }) => (
    <div
      className={`relative inline-flex cursor-pointer ${size === "small" ? "h-5 w-9" : "h-6 w-11"}`}
      onClick={onChange}
    >
      <div
        className={`${size === "small" ? "h-5 w-9" : "h-6 w-11"} rounded-full transition-colors ${
          checked ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`${size === "small" ? "h-4 w-4 top-0.5" : "h-5 w-5 top-0.5"} absolute left-0.5 rounded-full bg-white transition-transform ${
            checked ? (size === "small" ? "translate-x-4" : "translate-x-5") : "translate-x-0"
          }`}
        />
      </div>
    </div>
  )

  const NotificationCard = ({ icon, title, children, toggle, active = true }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded ${icon.bg} flex items-center justify-center`}>
            <span className="text-white text-sm">{icon.symbol}</span>
          </div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          {active && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
              {active === true ? "ACTIVE" : active}
            </span>
          )}
        </div>
        {toggle && <Toggle checked={toggle.checked} onChange={toggle.onChange} />}
      </div>
      {children}
    </div>
  )

  const NotificationItem = ({ title, subtitle, emailEnabled, pushEnabled, smsEnabled, onToggle }) => (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-orange-500 rounded"></div>
        <div>
          <div className="font-medium text-sm text-gray-900">{title}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </div>
      <div className="flex gap-2 ml-6">
        <button
          className={`px-2 py-1 text-xs rounded ${emailEnabled ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}
        >
          📧 Email
        </button>
        <button
          className={`px-2 py-1 text-xs rounded ${pushEnabled ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}
        >
          🔔 Push
        </button>
        <button
          className={`px-2 py-1 text-xs rounded ${smsEnabled ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}
        >
          💬 SMS
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🔔</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Notification Settings</h1>
        </div>
        <p className="text-orange-100">Alert preferences and communication settings management</p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Quick Actions:</span>
            <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Enable All</button>
            <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Disable All</button>
            <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Reset Defaults</button>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 flex items-center gap-2">
            💾 Save Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Animal Notifications */}
            <NotificationCard
              icon={{ bg: "bg-orange-500", symbol: "🐾" }}
              title="Animal Notifications"
              active="12 ACTIVE"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📥</span>
                    </div>
                    <span className="font-medium text-sm">Intakes & Arrivals</span>
                  </div>
                  <Toggle
                    checked={settings.animalNotifications.intakesArrivals}
                    onChange={() => toggleSetting("animalNotifications", "intakesArrivals")}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <NotificationItem
                    title="New Animal Intake"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                  <NotificationItem title="Emergency Intake" emailEnabled={true} pushEnabled={true} smsEnabled={true} />
                  <NotificationItem title="Transfer Arrival" emailEnabled={true} pushEnabled={true} smsEnabled={true} />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">🏥</span>
                    </div>
                    <span className="font-medium text-sm">Medical Updates</span>
                  </div>
                  <Toggle
                    checked={settings.animalNotifications.medicalUpdates}
                    onChange={() => toggleSetting("animalNotifications", "medicalUpdates")}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <NotificationItem
                    title="Surgery Scheduled"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                  <NotificationItem title="Medical Alert" emailEnabled={true} pushEnabled={true} smsEnabled={true} />
                  <NotificationItem title="Vaccination Due" emailEnabled={true} pushEnabled={true} smsEnabled={false} />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">🏠</span>
                    </div>
                    <span className="font-medium text-sm">Adoptions</span>
                  </div>
                  <Toggle
                    checked={settings.animalNotifications.adoptions}
                    onChange={() => toggleSetting("animalNotifications", "adoptions")}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <NotificationItem
                    title="Adoption Completed"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                  <NotificationItem
                    title="Application Received"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                  <NotificationItem
                    title="Application Approved"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                </div>
              </div>
            </NotificationCard>

            {/* System & Admin */}
            <NotificationCard icon={{ bg: "bg-orange-500", symbol: "⚙️" }} title="System & Admin" active="8 ACTIVE">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">🚨</span>
                    </div>
                    <span className="font-medium text-sm">System Alerts</span>
                  </div>
                  <Toggle
                    checked={settings.systemAdmin.systemAlerts}
                    onChange={() => toggleSetting("systemAdmin", "systemAlerts")}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <NotificationItem title="System Down" emailEnabled={true} pushEnabled={true} smsEnabled={false} />
                  <NotificationItem title="Data Backup" emailEnabled={true} pushEnabled={false} smsEnabled={false} />
                  <NotificationItem title="Security Alert" emailEnabled={true} pushEnabled={true} smsEnabled={true} />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">👥</span>
                    </div>
                    <span className="font-medium text-sm">Staff Management</span>
                  </div>
                  <Toggle
                    checked={settings.systemAdmin.staffManagement}
                    onChange={() => toggleSetting("systemAdmin", "staffManagement")}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <NotificationItem title="New User Added" emailEnabled={true} pushEnabled={true} smsEnabled={false} />
                  <NotificationItem
                    title="Permission Changes"
                    emailEnabled={true}
                    pushEnabled={true}
                    smsEnabled={false}
                  />
                  <NotificationItem title="Login Failures" emailEnabled={true} pushEnabled={true} smsEnabled={false} />
                </div>
              </div>
            </NotificationCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Frequency Settings */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm">⏰</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Frequency Settings</h3>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">CUSTOM</span>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-600">📊</span>
                  <span className="font-medium text-sm text-blue-600">Notification Frequency</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Email Digest</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={settings.emailDigest}
                      onChange={(e) => updateSetting("emailDigest", e.target.value)}
                    >
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Push Notifications</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={settings.pushFrequency}
                      onChange={(e) => updateSetting("pushFrequency", e.target.value)}
                    >
                      <option>Immediate</option>
                      <option>Hourly</option>
                      <option>Daily</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">SMS Alerts</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={settings.smsAlerts}
                      onChange={(e) => updateSetting("smsAlerts", e.target.value)}
                    >
                      <option>Emergency</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Weekly Summary</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={settings.weeklyDigest}
                      onChange={(e) => updateSetting("weeklyDigest", e.target.value)}
                    >
                      <option>Friday</option>
                      <option>Monday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet Hours */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-600">🌙</span>
                <h3 className="font-medium text-gray-900">Quiet Hours</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Start Time</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      className="flex-1 p-2 border border-gray-300 rounded text-sm"
                      value={settings.quietHours.startTime}
                      onChange={(e) =>
                        updateSetting("quietHours", { ...settings.quietHours, startTime: e.target.value })
                      }
                    />
                    <span className="text-xs text-gray-500">PM</span>
                    <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">⏰</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">End Time</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      className="flex-1 p-2 border border-gray-300 rounded text-sm"
                      value={settings.quietHours.endTime}
                      onChange={(e) => updateSetting("quietHours", { ...settings.quietHours, endTime: e.target.value })}
                    />
                    <span className="text-xs text-gray-500">AM</span>
                    <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">⏰</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Enable Quiet Hours</span>
                <Toggle
                  checked={settings.quietHours.enabled}
                  onChange={() =>
                    updateSetting("quietHours", { ...settings.quietHours, enabled: !settings.quietHours.enabled })
                  }
                />
              </div>

              <div className="bg-orange-100 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-orange-700">
                  <span>⚠️</span>
                  <span className="text-xs">Emergency notifications will still be delivered during quiet hours</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Contact Methods</h3>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">VERIFIED</span>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-600">📧</span>
                  <span className="font-medium text-sm text-green-600">Email Settings</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Primary Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value="admin@austinanimalrescue.org"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Backup Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value="backup@austinanimalrescue.org"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">HTML Email Format</span>
                    <Toggle
                      checked={settings.htmlEmail}
                      onChange={() => updateSetting("htmlEmail", !settings.htmlEmail)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SMS Settings */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-600">💬</span>
                <h3 className="font-medium text-gray-900">SMS Settings</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    value="+1 (512) 555-0123"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Carrier</label>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Verizon</option>
                    <option>AT&T</option>
                    <option>T-Mobile</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SMS Notifications Enabled</span>
                  <Toggle
                    checked={settings.smsEnabled}
                    onChange={() => updateSetting("smsEnabled", !settings.smsEnabled)}
                  />
                </div>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-600">📱</span>
                <h3 className="font-medium text-gray-900">Push Notifications</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Browser Push</div>
                    <div className="text-xs text-gray-500">Desktop notifications</div>
                  </div>
                  <Toggle
                    checked={settings.browserPush}
                    onChange={() => updateSetting("browserPush", !settings.browserPush)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Mobile App</div>
                    <div className="text-xs text-gray-500">iOS/Android push</div>
                  </div>
                  <Toggle
                    checked={settings.mobileApp}
                    onChange={() => updateSetting("mobileApp", !settings.mobileApp)}
                  />
                </div>
              </div>
            </div>

            {/* Test Notifications */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm">🧪</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Test Notifications</h3>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">TESTING</span>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600">🚀</span>
                  <span className="font-medium text-sm text-orange-600">Send Test Notifications</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  Test your notification settings to ensure they're working correctly.
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <button className="p-2 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50 flex flex-col items-center gap-1">
                    <span>📧</span>
                    <span>Test Email</span>
                  </button>
                  <button className="p-2 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50 flex flex-col items-center gap-1">
                    <span>💬</span>
                    <span>Test SMS</span>
                  </button>
                  <button className="p-2 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50 flex flex-col items-center gap-1">
                    <span>🔔</span>
                    <span>Test Push</span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3">Recent Test Results</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Email Test</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅ Success</span>
                      <span className="text-gray-500">(2 min ago)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>SMS Test</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">❌ Failed</span>
                      <span className="text-gray-500">(5 min ago)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Push Test</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅ Success</span>
                      <span className="text-gray-500">(1 hour ago)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings
