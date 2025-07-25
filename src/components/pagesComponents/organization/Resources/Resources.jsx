export default function Resources() {
  return (
    <div className="min-h-screen bg-emerald-700 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900">47</div>
            <div className="text-gray-600 text-sm mb-2">Partner Organizations</div>
            <div className="text-emerald-600 text-xs">+3 new this month</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900">234</div>
            <div className="text-gray-600 text-sm mb-2">Active Volunteers</div>
            <div className="text-emerald-600 text-xs">+12 this week</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900">89</div>
            <div className="text-gray-600 text-sm mb-2">Foster Families</div>
            <div className="text-emerald-600 text-xs">+5 new approvals</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900">156</div>
            <div className="text-gray-600 text-sm mb-2">Resource Exchanges</div>
            <div className="text-emerald-600 text-xs">$12.5K value saved</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500">⚡</span>
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Add New Partner
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Post Supply Request
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Register Volunteer
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Add Foster Family
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Generate Resource Report
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Send Network Update
            </button>
          </div>
        </div>

        {/* Network Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Partner Network */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">🤝</span>
                <h2 className="text-lg font-semibold text-gray-900">Partner Network</h2>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">View All</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border-l-4 border-emerald-500">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Austin Animal Center</div>
                  <div className="text-xs text-gray-500">Municipal shelter • 247 animals • Transport partner</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-emerald-500">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  F
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Forever Friends Rescue</div>
                  <div className="text-xs text-gray-500">Non-profit rescue • Foster network • Supply sharing</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-emerald-500">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  E
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Emergency Vet Clinic</div>
                  <div className="text-xs text-gray-500">24/7 medical • Emergency referrals • Transport endpoint</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Dallas Transport Network</div>
                  <div className="text-xs text-gray-500">Regional transport • 15 drivers • Cross-state moves</div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-xs text-gray-500">Total Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">892</div>
                <div className="text-xs text-gray-500">Animals Helped</div>
              </div>
            </div>
          </div>

          {/* Supply Exchange */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">📦</span>
                <h2 className="text-lg font-semibold text-gray-900">Supply Exchange</h2>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">View All</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Dog Food - Premium Brand</div>
                  <div className="text-xs text-gray-500">50 lbs available • Austin Animal Center • Expires 12/2025</div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  L
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Large Dog Crates (4)</div>
                  <div className="text-xs text-gray-500">
                    Excellent condition • Forever Friends • Transport included
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  N
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">NEEDED: Cat Antibiotics</div>
                  <div className="text-xs text-gray-500">Urgent need • Upper respiratory • Willing to pay/trade</div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Needed</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  E
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Enrichment Toys</div>
                  <div className="text-xs text-gray-500">Mixed lot • Dog/cat toys • Sanitized and ready</div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-xs text-gray-500">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$12.5K</div>
                <div className="text-xs text-gray-500">Value Saved</div>
              </div>
            </div>
          </div>

          {/* Volunteer Network */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">👥</span>
                <h2 className="text-lg font-semibold text-gray-900">Volunteer Network</h2>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">View All</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Sarah Martinez</div>
                  <div className="text-xs text-gray-500">
                    Transport volunteer • 2 years • 127 transports • Austin area
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Mike Johnson</div>
                  <div className="text-xs text-gray-500">Photography • 2 years • 89 photo sessions • Social media</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  J
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Jennifer Adams</div>
                  <div className="text-xs text-gray-500">Medical coordinator • 5 years • Fundraising specialist</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Dr. Emily Santos</div>
                  <div className="text-xs text-gray-500">Veterinary volunteer • Medical care • Surgery</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Active</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">234</div>
                <div className="text-xs text-gray-500">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1,847</div>
                <div className="text-xs text-gray-500">Hours This Month</div>
              </div>
            </div>
          </div>

          {/* Foster Network */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500">🏠</span>
                <h2 className="text-lg font-semibold text-gray-900">Foster Network</h2>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">View All</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border-l-4 border-purple-500">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  W
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Wilson Family</div>
                  <div className="text-xs text-gray-500">
                    Dogs & cats • 4 years • 23 successful fosters • Cedar Park
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-purple-500">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  C
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Chen Family</div>
                  <div className="text-xs text-gray-500">Cats & kittens • 3 years • 18 fosters • Downtown Austin</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Fostering (3)</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-purple-500">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  R
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Rodriguez Family</div>
                  <div className="text-xs text-gray-500">Medical foster • 6 years • Special needs • South Austin</div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Fostering (1)</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-l-4 border-purple-500">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  T
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Thompson Family</div>
                  <div className="text-xs text-gray-500">Puppies • 1 year • 8 litters • North Austin</div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">89</div>
                <div className="text-xs text-gray-500">Foster Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">67</div>
                <div className="text-xs text-gray-500">Animals in Foster</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Resource Activity */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-purple-500">📋</span>
            <h2 className="text-lg font-semibold text-gray-900">Recent Resource Activity</h2>
          </div>

          <div className="flex gap-6 mb-4 border-b">
            <button className="pb-2 border-b-2 border-purple-500 text-purple-600 font-medium">All Activity</button>
            <button className="pb-2 text-gray-500 hover:text-gray-700">Partnerships</button>
            <button className="pb-2 text-gray-500 hover:text-gray-700">Supply Exchange</button>
            <button className="pb-2 text-gray-500 hover:text-gray-700">Volunteers</button>
            <button className="pb-2 text-gray-500 hover:text-gray-700">Foster Updates</button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                🤝
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  New partnership established with Dallas Transport Network
                </div>
                <div className="text-xs text-gray-500">3 hours ago</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                📦
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Dog food supply shared with Forever Friends Rescue (50 lbs)
                </div>
                <div className="text-xs text-gray-500">4 hours ago</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                👥
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Sarah Martinez completed transport training certification
                </div>
                <div className="text-xs text-gray-500">6 hours ago</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                🏠
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Wilson Family approved for large dog fostering</div>
                <div className="text-xs text-gray-500">8 hours ago</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                🏥
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Urgent cat antibiotics request fulfilled by Emergency Vet Clinic
                </div>
                <div className="text-xs text-gray-500">12 hours ago</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                👥
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">3 new volunteers registered for weekend adoption events</div>
                <div className="text-xs text-gray-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
