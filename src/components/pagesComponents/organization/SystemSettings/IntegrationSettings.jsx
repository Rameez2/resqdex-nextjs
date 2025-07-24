export default function IntegrationSettings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl font-bold">Integration Settings</h1>
        </div>
        <p className="text-purple-100">Third-party service connections and API management</p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              All Integrations
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
              Connected
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
              Available
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
              Failed
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Sync All
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Add Integration
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Integrations */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
              Active Integrations
            </h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">12 CONNECTED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PetFinder */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    PF
                  </div>
                  <div>
                    <h3 className="font-semibold">PetFinder</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Connected</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Animal Listing Platform - Automatic animal listing sync and adoption listings and updates
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                  Sync Now
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Disconnect</button>
              </div>
            </div>

            {/* Adopt-a-Pet */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                    AP
                  </div>
                  <div>
                    <h3 className="font-semibold">Adopt-a-Pet</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Connected</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Animal Listing Platform - Automatic animal adoption listings and updates
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                  Sync Now
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Disconnect</button>
              </div>
            </div>

            {/* Facebook Auto Post */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    f
                  </div>
                  <div>
                    <h3 className="font-semibold">Facebook Auto Post</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Connected</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Social Media Automation - Automatic posting of new animals and adoption updates
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                  Post Now
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Disconnect</button>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    📷
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Auth Error</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Social Media Platform - Photo sharing and social media marketing
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-purple-600 text-white text-sm px-3 py-1 rounded hover:bg-purple-700">
                  Reconnect
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Remove</button>
              </div>
            </div>

            {/* Mailchimp */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <h3 className="font-semibold">Mailchimp</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Connected</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Email Marketing - Newsletter management and donor communications
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                  Sync Lists
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Disconnect</button>
              </div>
            </div>

            {/* QuickBooks */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    QB
                  </div>
                  <div>
                    <h3 className="font-semibold">QuickBooks</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Connected</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Accounting Software - Financial data sync and donation tracking
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                  Configure
                </button>
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                  Sync Data
                </button>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">Disconnect</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* API Configuration */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">●</span>
                </div>
                API Configuration
              </h2>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">5 KEYS</span>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Global API Settings</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">API Rate Limit:</span>
                    <span>Professional (5000/hour)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Default Sync Frequency:</span>
                    <span>Every 15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Master API Key:</span>
                    <span className="font-mono">••••••••••••••••••••••••</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enable Auto-Retry on failures:</span>
                    <div className="w-10 h-6 bg-purple-600 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Log All API Calls:</span>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-3 hover:bg-purple-700">
                  Save Configuration
                </button>
                <button className="w-full text-gray-600 py-2 rounded-lg mt-2 border border-gray-300 hover:bg-gray-50">
                  Test Connection
                </button>
              </div>
            </div>
          </div>

          {/* Available Integrations */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">●</span>
                </div>
                Available Integrations
              </h2>
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">8 AVAILABLE</span>
            </div>

            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <h3 className="font-medium text-green-900 mb-2 flex items-center gap-2">🏪 Integration Marketplace</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>🐕</span>
                  <div>
                    <div className="font-medium text-sm">Best Friends API</div>
                    <div className="text-xs text-gray-600">Connect with Best Friends Animal Society network</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>💳</span>
                  <div>
                    <div className="font-medium text-sm">Stripe Payments</div>
                    <div className="text-xs text-gray-600">Process online donations and adoption fees</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <div>
                    <div className="font-medium text-sm">Twilio SMS</div>
                    <div className="text-xs text-gray-600">Send SMS notifications and alerts</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <div>
                    <div className="font-medium text-sm">SendGrid Email</div>
                    <div className="text-xs text-gray-600">Professional email delivery service</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>📊</span>
                  <div>
                    <div className="font-medium text-sm">Google Analytics</div>
                    <div className="text-xs text-gray-600">Track website and adoption analytics</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <div>
                    <div className="font-medium text-sm">Google Calendar</div>
                    <div className="text-xs text-gray-600">Sync appointments and events</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700">
              Browse All Integrations
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sync Status */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
              Sync Status
            </h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">ALL CURRENT</span>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <h3 className="font-medium text-blue-900 mb-3 flex items-center gap-2">📊 Last Sync Activity</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">247</div>
                <div className="text-xs text-gray-600">Animals Synced</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">2.4K</div>
                <div className="text-xs text-gray-600">API Calls</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15min</div>
                <div className="text-xs text-gray-600">Last Sync</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">PetFinder sync completed successfully</div>
                <div className="text-xs text-gray-600">15 minutes ago • 24 animals updated</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Mailchimp subscriber list updated</div>
                <div className="text-xs text-gray-600">1 hour ago • 12 new subscribers</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Instagram authentication expired</div>
                <div className="text-xs text-gray-600">2 hours ago • Authentication required</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">QuickBooks financial data synced</div>
                <div className="text-xs text-gray-600">6 hours ago • Donations and expenses updated</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Facebook posts published</div>
                <div className="text-xs text-gray-600">1 day ago • 3 new animal listings posted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Webhook Configuration */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
              Webhook Configuration
            </h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">3 ACTIVE</span>
          </div>

          <div className="bg-orange-50 p-3 rounded-lg mb-4">
            <h3 className="font-medium text-orange-900 mb-2 flex items-center gap-2">⚠️ Webhook Endpoints</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-medium">Animal Updates Webhook</div>
                <div className="text-xs text-gray-600 font-mono">https://api.example.com/webhooks/animals</div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ACTIVE</span>
              </div>
              <div>
                <div className="font-medium">Adoption Events Webhook</div>
                <div className="text-xs text-gray-600 font-mono">https://api.example.com/webhooks/adoptions</div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ACTIVE</span>
              </div>
              <div>
                <div className="font-medium">Emergency Alerts Webhook</div>
                <div className="text-xs text-gray-600 font-mono">https://api.example.com/webhooks/emergency</div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">FAILED</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="text-blue-600 text-sm px-3 py-1 border border-blue-200 rounded hover:bg-blue-50">
                Add Webhook
              </button>
              <button className="text-gray-600 text-sm px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">
                Test All
              </button>
              <button className="text-gray-600 text-sm px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">
                View Logs
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Webhook Secret Key</label>
              <div className="font-mono text-sm bg-gray-100 p-2 rounded">••••••••••••••••••••••••</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Retry Attempts</label>
              <div className="text-sm">5 attempts</div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Enable Webhook Signing</span>
              <div className="w-10 h-6 bg-green-500 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700">
            Save Webhook Settings
          </button>
        </div>

        {/* Integration Health */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
              Integration Health
            </h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">HEALTHY</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98.7%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">145ms</div>
              <div className="text-xs text-gray-600">Avg Response</div>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2 flex items-center gap-2">✅ System Health Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">API Connectivity:</span>
                <span className="text-green-600">Excellent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data Sync Status:</span>
                <span className="text-green-600">Current</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Error Rate:</span>
                <span className="text-green-600">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Full Sync:</span>
                <span>15 min ago</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Health Report
            </button>
            <button className="text-gray-600 px-3 py-2 border border-gray-200 rounded hover:bg-gray-50">
              Troubleshoot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
