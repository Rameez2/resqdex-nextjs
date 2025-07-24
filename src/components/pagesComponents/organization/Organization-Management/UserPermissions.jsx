export default function UserPermissions() {
  const roles = [
    {
      title: "Super Admin",
      badge: "Admin",
      badgeColor: "bg-red-100 text-red-600",
      description:
        "Full system access with all administrative privileges including user management and system configuration.",
      users: 3,
      access: 100,
      permissions: [
        { name: "All Modules", color: "bg-green-100 text-green-600" },
        { name: "User Management", color: "bg-blue-100 text-blue-600" },
        { name: "System Config", color: "bg-purple-100 text-purple-600" },
        { name: "Billing", color: "bg-yellow-100 text-yellow-600" },
      ],
    },
    {
      title: "Operations Manager",
      badge: "Manager",
      badgeColor: "bg-orange-100 text-orange-600",
      description: "Manage daily operations including animals, applications, transport, and volunteer coordination.",
      users: 8,
      access: 85,
      permissions: [
        { name: "Animals", color: "bg-green-100 text-green-600" },
        { name: "Applications", color: "bg-blue-100 text-blue-600" },
        { name: "Transport", color: "bg-purple-100 text-purple-600" },
        { name: "Analytics", color: "bg-cyan-100 text-cyan-600" },
      ],
    },
    {
      title: "Veterinary Staff",
      badge: "Staff",
      badgeColor: "bg-green-100 text-green-600",
      description: "Medical staff with access to animal health records, medical history, and treatment protocols.",
      users: 6,
      access: 65,
      permissions: [
        { name: "Medical Records", color: "bg-green-100 text-green-600" },
        { name: "Animals", color: "bg-blue-100 text-blue-600" },
        { name: "Applications", color: "bg-purple-100 text-purple-600" },
        { name: "Billing", color: "bg-yellow-100 text-yellow-600" },
      ],
    },
    {
      title: "Transport Coordinator",
      badge: "Staff",
      badgeColor: "bg-green-100 text-green-600",
      description: "Manage transport schedules, driver assignments, and emergency rescue coordination.",
      users: 5,
      access: 60,
      permissions: [
        { name: "Transport", color: "bg-green-100 text-green-600" },
        { name: "Emergency", color: "bg-red-100 text-red-600" },
        { name: "Animals", color: "bg-blue-100 text-blue-600" },
        { name: "Volunteers", color: "bg-purple-100 text-purple-600" },
      ],
    },
    {
      title: "Adoption Specialist",
      badge: "Staff",
      badgeColor: "bg-green-100 text-green-600",
      description: "Process adoption applications, conduct interviews, and manage the adoption pipeline.",
      users: 12,
      access: 70,
      permissions: [
        { name: "Applications", color: "bg-green-100 text-green-600" },
        { name: "Interviews", color: "bg-blue-100 text-blue-600" },
        { name: "Animals", color: "bg-purple-100 text-purple-600" },
        { name: "Communications", color: "bg-cyan-100 text-cyan-600" },
      ],
    },
    {
      title: "Volunteer Coordinator",
      badge: "Volunteer",
      badgeColor: "bg-blue-100 text-blue-600",
      description: "Manage volunteer database, foster network, and community resource coordination.",
      users: 15,
      access: 45,
      permissions: [
        { name: "Volunteers", color: "bg-green-100 text-green-600" },
        { name: "Foster Network", color: "bg-blue-100 text-blue-600" },
        { name: "Events", color: "bg-purple-100 text-purple-600" },
        { name: "Communications", color: "bg-cyan-100 text-cyan-600" },
      ],
    },
  ]

  const stats = [
    { icon: "🔒", value: "4", label: "Total Roles", subtitle: "4 custom roles" },
    { icon: "👥", value: "47", label: "Total Users", subtitle: "34 active staff" },
    { icon: "🛡️", value: "96%", label: "Security Score", subtitle: "Excellent rating" },
    { icon: "⚡", value: "12", label: "Recent Changes", subtitle: "Last 30 days" },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">👥</span>
          <h1 className="text-3xl font-bold text-white">User Permissions</h1>
        </div>
        <p className="text-purple-100">Role-based access control, security permissions, and user management</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors">
            All Roles
          </button>
          <button className="px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2">
            All Permissions
            <span className="text-xs">▼</span>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search users or roles..."
              className="px-4 py-2 bg-white/20 text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 w-64"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2">
            📊 Export Permissions
          </button>
          <button className="px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2">
            📋 Audit Log
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Create Role
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Roles List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🏷️</span>
            <h2 className="text-xl font-semibold text-gray-800">User Roles & Permissions</h2>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Cards</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Matrix</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {roles.map((role, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{role.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${role.badgeColor}`}>
                      {role.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{role.users}</div>
                  <div className="text-sm text-gray-500">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{role.access}%</div>
                  <div className="text-sm text-gray-500">Access</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Key Permissions:</div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission, permIndex) => (
                    <span key={permIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${permission.color}`}>
                      {permission.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  View
                </button>
                <button className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-800">
                  <span className="text-orange-500">✏️</span>
                  Edit
                </button>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                  <span className="text-blue-500">👥</span>
                  Users
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
