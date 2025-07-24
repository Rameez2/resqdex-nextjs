export default function SystemSettings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-700 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 text-pink-300">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold">System Settings</h1>
          </div>
          <p className="text-slate-300">Central system configuration and customization hub</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            <div className="flex items-center gap-2 px-4 py-4 border-b-2 border-orange-500 text-orange-600">
              <span className="text-sm">🏠</span>
              <span className="font-medium">Overview</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-gray-500 hover:text-gray-700">
              <span className="text-sm">🏢</span>
              <span>Organization Profile</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-gray-500 hover:text-gray-700">
              <span className="text-sm">🌐</span>
              <span>Public Page Editor</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-gray-500 hover:text-gray-700">
              <span className="text-sm">🔔</span>
              <span>Notification Settings</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-gray-500 hover:text-gray-700">
              <span className="text-sm">🔗</span>
              <span>Integration Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">System Overview</h2>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  ALL SYSTEMS OPERATIONAL
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-600">System Health</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Active Integrations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-1">15ms</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>

              {/* System Health Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 text-green-600">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-green-800">System Health Status</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-green-800">Operational</div>
                    <div className="text-green-600">Database Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-green-800">Secure</div>
                    <div className="text-green-600">Security Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-green-800">Current</div>
                    <div className="text-green-600">Software Version</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-green-800">Active</div>
                    <div className="text-green-600">Backup Systems</div>
                  </div>
                </div>
              </div>

              {/* Security Alert */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 text-orange-600">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-orange-800">
                    Security update available - Click to review and install
                  </span>
                </div>
              </div>

              {/* Quick Access Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="font-medium text-gray-900">Organization Profile</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="font-medium text-gray-900">Public Page</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔔</span>
                  </div>
                  <div className="font-medium text-gray-900">Notifications</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💾</span>
                  </div>
                  <div className="font-medium text-gray-900">Backup Data</div>
                </div>
              </div>
            </div>

            {/* Configuration Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Configuration Settings</h2>
                </div>
                <span className="text-sm text-gray-500">Advanced Settings</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🏢</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Organization Profile</div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          Configured
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Public organization information, branding, and contact details
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🌐</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Public Page Editor</div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Customize public website appearance and adoption listings</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🔔</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Notification Settings</div>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">
                          Needs Review
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Email alerts, SMS notifications, and communication preferences
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🔗</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Integration Settings</div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          12 Active
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Third-party service connections and API configurations</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">💾</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Backup & Data</div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          Auto-Backup
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Data backup configuration and database management</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🔒</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Security Settings</div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          Enhanced
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Two-factor authentication and access control settings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Changes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">Recent Changes</h3>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  LIVE ACTIVITY
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    A
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">Organization Profile Updated</div>
                    <div className="text-sm text-gray-600">Contact information and hours updated by Admin</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    U
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">Public Page Theme Changed</div>
                    <div className="text-sm text-gray-600">Updated to new "Paws & Hearts" theme</div>
                    <div className="text-xs text-gray-500">6 hours ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    N
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">Notification Settings Modified</div>
                    <div className="text-sm text-gray-600">Email frequency reduced to daily digest</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    I
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">New Integration Added</div>
                    <div className="text-sm text-gray-600">Connected PetFinder API for automatic listings</div>
                    <div className="text-xs text-gray-500">2 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Maintenance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">System Maintenance</h3>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">SCHEDULED</span>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-gray-900">Database Optimization</div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">SCHEDULED</span>
                  </div>
                  <div className="text-sm text-gray-600">Scheduled: Sunday 2:00 AM • Duration: 30 minutes</div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-gray-900">Security Scan</div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">TONIGHT</span>
                  </div>
                  <div className="text-sm text-gray-600">Next: Tonight 11:00 PM • Duration: 15 minutes</div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-gray-900">System Backup</div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">ACTIVE</span>
                  </div>
                  <div className="text-sm text-gray-600">Daily: 3:00 AM • Last: Successful today</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-800">
                  Schedule Maintenance
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
                  View Logs
                </button>
              </div>
            </div>

            {/* System Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">System Information</h3>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800">Technical Details</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">v2.4.1</div>
                  <div className="text-sm text-gray-600">Software Version</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">47 Users</div>
                  <div className="text-sm text-gray-600">Active Accounts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
