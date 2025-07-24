export default function CurrentListings() {
  const animals = [
    {
      id: 1,
      name: "Bella",
      breed: "Golden Retriever Mix",
      age: "Female • 3 years old",
      description: "Friendly, energetic, great with kids. Loves playing fetch and long walks.",
      status: "Available",
      statusColor: "bg-green-100 text-green-800",
      bgGradient: "bg-gradient-to-br from-orange-200 to-pink-200",
      image: "🐕",
    },
    {
      id: 2,
      name: "Max",
      breed: "Domestic Shorthair",
      age: "Male • 2 years old",
      description: "Calm, independent cat. Perfect for quiet households.",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
      bgGradient: "bg-gradient-to-br from-blue-200 to-purple-200",
      image: "🐱",
    },
    {
      id: 3,
      name: "Luna",
      breed: "German Shepherd Mix",
      age: "Female • 5 years old",
      description: "Intelligent, loyal, well-trained. Great dog and companion.",
      status: "Available",
      statusColor: "bg-green-100 text-green-800",
      bgGradient: "bg-gradient-to-br from-orange-200 to-pink-200",
      image: "🐕",
    },
    {
      id: 4,
      name: "Shadow",
      breed: "Labrador Mix",
      age: "Male • 4 years old",
      description: "Gentle giant, loves attention. Good with other cats and dogs.",
      status: "On Hold",
      statusColor: "bg-orange-100 text-orange-800",
      bgGradient: "bg-gradient-to-br from-orange-200 to-pink-200",
      image: "🐕",
    },
    {
      id: 5,
      name: "Rocky",
      breed: "Pit Bull Mix",
      age: "Male • 6 years old",
      description: "Sweet, gentle soul. Recovering from surgery, will be ready soon.",
      status: "Available",
      statusColor: "bg-green-100 text-green-800",
      bgGradient: "bg-gradient-to-br from-blue-200 to-purple-200",
      image: "🐕",
    },
    {
      id: 6,
      name: "Princess",
      breed: "Persian Mix",
      age: "Female • 1 year old",
      description: "Playful kitten with royal attitude. Loves toys and treats.",
      status: "Available",
      statusColor: "bg-green-100 text-green-800",
      bgGradient: "bg-gradient-to-br from-blue-200 to-purple-200",
      image: "🐱",
    },
  ]

  const quickFilters = [
    { name: "Available for Adoption", count: 89 },
    { name: "Dogs", count: 72 },
    { name: "Cats", count: 48 },
    { name: "Puppies & Kittens", count: 23 },
    { name: "Senior Animals", count: 15 },
    { name: "Special Needs", count: 8 },
    { name: "In Foster Care", count: 12 },
  ]

  const recentActivity = [
    { action: "Bella added to database", time: "2h ago", icon: "➕" },
    { action: "Cooper was adopted!", time: "1d ago", icon: "🏠" },
    { action: "Max's medical updated", time: "2d ago", icon: "📋" },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🐾</span>
            <h1 className="text-3xl font-bold text-white">Current Listings</h1>
          </div>
          <p className="text-purple-100">Comprehensive animal database with advanced search and management tools</p>
        </div>

        {/* Navigation Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">Filter:</span>
            <select className="bg-white/20 text-white border border-white/30 rounded-lg px-3 py-1 text-sm backdrop-blur-sm">
              <option>All Species</option>
              <option>Dogs</option>
              <option>Cats</option>
            </select>
            <select className="bg-white/20 text-white border border-white/30 rounded-lg px-3 py-1 text-sm backdrop-blur-sm">
              <option>All Status</option>
              <option>Available</option>
              <option>Pending</option>
            </select>
            <select className="bg-white/20 text-white border border-white/30 rounded-lg px-3 py-1 text-sm backdrop-blur-sm">
              <option>All Ages</option>
              <option>Puppy/Kitten</option>
              <option>Adult</option>
            </select>
          </div>
          <div className="flex gap-2 ml-auto">
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm hover:bg-white/30 transition-colors">
              📊 Generate Report
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm hover:bg-white/30 transition-colors">
              📤 Export Data
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Add New Animal
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl mb-2">🐾</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">127</div>
              <div className="text-gray-600 text-sm">Total Animals</div>
              <div className="text-green-600 text-xs mt-1">+8 this month</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">89</div>
              <div className="text-gray-600 text-sm">Available for Adoption</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl mb-2">🏠</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">23</div>
              <div className="text-gray-600 text-sm">In Foster Care</div>
              <div className="text-blue-600 text-xs mt-1">+3 placements</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl mb-2">⏳</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">15</div>
              <div className="text-gray-600 text-sm">Pending Adoption</div>
              <div className="text-orange-600 text-xs mt-1">Processing</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Database Header */}
            <div className="bg-white rounded-t-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">📋</span>
                <span className="font-semibold">Animal Database</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Grid</button>
                <button className="text-gray-600 px-3 py-1 rounded text-sm">List</button>
                <button className="text-gray-600 px-3 py-1 rounded text-sm">Table</button>
              </div>
            </div>

            {/* Animal Cards */}
            <div className="bg-white rounded-b-xl p-6 shadow-lg">
              <div className="space-y-6">
                {animals.map((animal) => (
                  <div key={animal.id} className="border rounded-xl overflow-hidden">
                    <div className={`h-32 ${animal.bgGradient} flex items-center justify-center relative`}>
                      <span className="text-4xl">{animal.image}</span>
                      <span
                        className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${animal.statusColor}`}
                      >
                        {animal.status}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-1">{animal.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {animal.breed} • {animal.age}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">{animal.description}</p>
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 text-sm hover:underline">👁 View</button>
                        <button className="text-blue-600 text-sm hover:underline">✏️ Edit</button>
                        <button className="text-blue-600 text-sm hover:underline">📱 Apps</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <button className="text-gray-600 text-sm">← Previous</button>
                <div className="flex items-center gap-2">
                  <button className="bg-blue-600 text-white w-8 h-8 rounded text-sm">1</button>
                  <button className="text-gray-600 w-8 h-8 rounded text-sm hover:bg-gray-100">2</button>
                  <button className="text-gray-600 w-8 h-8 rounded text-sm hover:bg-gray-100">3</button>
                  <button className="text-gray-600 w-8 h-8 rounded text-sm hover:bg-gray-100">4</button>
                  <button className="text-gray-600 w-8 h-8 rounded text-sm hover:bg-gray-100">5</button>
                  <span className="text-gray-400">...</span>
                </div>
                <button className="text-gray-600 text-sm">Next →</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            {/* Quick Filters */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500">🔍</span>
                <h3 className="font-semibold">Quick Filters</h3>
              </div>
              <div className="space-y-3">
                {quickFilters.map((filter, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{filter.name}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{filter.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-500">📊</span>
                <h3 className="font-semibold">Quick Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">72</div>
                  <div className="text-xs text-gray-600">Dogs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">48</div>
                  <div className="text-xs text-gray-600">Cats</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">18</div>
                  <div className="text-xs text-gray-600">Days Avg Stay</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">87%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-500">🕒</span>
                <h3 className="font-semibold">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
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
