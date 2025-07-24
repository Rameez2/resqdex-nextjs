export default function BillingSubscription() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <div className="w-5 h-3 bg-white rounded-sm"></div>
          </div>
          <h1 className="text-2xl font-bold">Billing & Subscription</h1>
        </div>
        <p className="text-green-100">Payment management, subscription plans, and financial administration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Pro Plan Card */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Pro Plan</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-green-100 ml-2">per month</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Unlimited Animals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Transport Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>API Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Custom Reports</span>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Billing Information</h3>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">ACTIVE</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Next Billing Date</span>
                <span className="font-medium">January 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Billing Cycle</span>
                <span className="font-medium">Monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Due</span>
                <span className="font-medium">$149.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Auto-Renewal</span>
                <span className="font-medium">Enabled</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Update Billing
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Change Plan
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">VERIFIED</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-gray-500">Expires 12/26</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Update Card
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Add Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Current Usage */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Current Usage</h3>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">67% USED</span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>API Calls This Month</span>
                <span>1,320 remaining</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "67%" }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">2,680 / 4,000 calls</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-sm text-gray-600">Animals Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">47</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Recent Invoices</h3>
              </div>
              <button className="text-gray-500 hover:text-gray-700 text-sm">View All</button>
            </div>

            <div className="space-y-4">
              {[
                { date: "Dec 15, 2024", invoice: "INV-2024-12", amount: "$149.00" },
                { date: "Nov 15, 2024", invoice: "INV-2024-11", amount: "$149.00" },
                { date: "Oct 15, 2024", invoice: "INV-2024-10", amount: "$149.00" },
                { date: "Sep 15, 2024", invoice: "INV-2024-09", amount: "$149.00" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{item.date}</div>
                    <div className="text-sm text-gray-500">Invoice #{item.invoice}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{item.amount}</div>
                    <div className="text-sm text-green-600">Paid</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Account Actions</h3>
              </div>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">REVIEW</span>
            </div>

            <p className="text-gray-600 text-sm mb-6">Manage your subscription settings and account preferences</p>

            <div className="space-y-3">
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Change Plan
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Update Payment Method
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Download Invoices
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Billing History
              </button>
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Available Plans</h3>
          </div>
          <span className="text-gray-500 text-sm">Compare and upgrade your subscription</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">Basic</h4>
              <div className="text-3xl font-bold text-green-600 mb-1">
                $49<span className="text-lg text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Up to 100 animals</li>
              <li>• Basic reporting</li>
              <li>• Email support</li>
              <li>• 1,000 API calls</li>
            </ul>
            <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium">
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-500 relative">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">Pro</h4>
              <div className="text-3xl font-bold text-green-600 mb-1">
                $149<span className="text-lg text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Unlimited animals</li>
              <li>• Advanced analytics</li>
              <li>• Priority support</li>
              <li>• 4,000 API calls</li>
            </ul>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium">Current Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">Enterprise</h4>
              <div className="text-3xl font-bold text-green-600 mb-1">
                $299<span className="text-lg text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Everything in Pro</li>
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
              <li>• Unlimited API calls</li>
            </ul>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  )
}
