import { Search, Users, BarChart, Lock, FileText, CheckCircle, AlertTriangle, Zap, BellRing } from "lucide-react"

export default function UserActivityLog() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-[#6B46C1]" />,
      value: "47",
      label: "Active Users Today",
      bgColor: "bg-[#EDE9FE]",
    },
    {
      icon: <BarChart className="h-8 w-8 text-[#4C51BF]" />,
      value: "1,284",
      label: "Activities This Week",
      bgColor: "bg-[#E0E7FF]",
    },
    {
      icon: <Lock className="h-8 w-8 text-[#D69E2E]" />,
      value: "156",
      label: "Login Sessions",
      bgColor: "bg-[#FEF3C7]",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#DD6B20]" />,
      value: "892",
      label: "Record Updates",
      bgColor: "bg-[#FEE2E2]",
    },
    {
      icon: <BellRing className="h-8 w-8 text-[#E53E3E]" />,
      value: "3",
      label: "Security Alerts",
      bgColor: "bg-[#FEE2E2]",
    },
  ]

  const activityLogs = [
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Created new animal record: Bella (Golden Retriever)",
      description: "Added complete intake information, medical status, and photos",
      user: "Sarah Martinez",
      time: "2 minutes ago",
      ip: "192.168.1.45",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: 'Updated application status: APP-2024-156 to "Approved"',
      description: "Processed adoption application for Max (Tabby Cat)",
      user: "Mike Johnson",
      time: "8 minutes ago",
      ip: "192.168.1.32",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "User login successful",
      description: "Accessed system from desktop application",
      user: "Jennifer Adams",
      time: "15 minutes ago",
      ip: "192.168.1.67",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Created transport request: Austin → Dallas",
      description: "Assigned driver: Mike Rodriguez, 3 animals scheduled",
      user: "Emily Santos",
      time: "22 minutes ago",
      ip: "192.168.1.89",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Updated medical record: Luna - vaccination complete",
      description: "Added DHPP and Rabies vaccination records",
      user: "Dr. Emily Santos",
      time: "35 minutes ago",
      ip: "192.168.1.12",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Generated financial report export",
      description: "Monthly financial summary exported to PDF",
      user: "Sarah Martinez",
      time: "1 hour ago",
      ip: "192.168.1.45",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Removed duplicate animal record",
      description: "Deleted duplicate entry for Cooper (German Shepherd)",
      user: "Mike Johnson",
      time: "1 hour ago",
      ip: "192.168.1.32",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Added new volunteer: David Wilson",
      description: "Completed volunteer onboarding and training assignment",
      user: "Jennifer Adams",
      time: "2 hours ago",
      ip: "192.168.1.67",
    },
  ]

  const activeUsers = [
    { initials: "SM", name: "Sarah Martinez", activity: "Editing animal records" },
    { initials: "MJ", name: "Mike Johnson", activity: "Processing applications" },
    { initials: "JA", name: "Jennifer Adams", activity: "Managing volunteers" },
    { initials: "ES", name: "Emily Santos", activity: "Transport coordination" },
  ]

  const activitySummary = [
    { category: "Animal Records", count: 127 },
    { category: "Applications", count: 89 },
    { category: "Transport", count: 34 },
    { category: "Medical Updates", count: 45 },
    { category: "User Logins", count: 156 },
    { category: "Report Generation", count: 23 },
  ]

  const securityChecks = [
    { text: "No suspicious activities", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { text: "All access within policy", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { text: "3 failed login attempts", icon: <AlertTriangle className="h-4 w-4 text-orange-500" /> },
    { text: "Data backups current", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B46C1] to-[#4C51BF] p-4 md:p-8 lg:p-12">
      <header className="text-center text-white mb-8">
        <div className="flex items-center justify-center mb-2">
          <Search className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">User Activity Logs</h1>
        </div>
        <p className="text-lg text-gray-200">Comprehensive activity tracking, audit trails, and system monitoring</p>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Filter and Action Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-auto">
            <div>
              <label htmlFor="time-period" className="block text-sm font-medium text-gray-700 mb-1">
                Time Period
              </label>
              <div className="relative">
                <select
                  id="time-period"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                  defaultValue="24-hours"
                >
                  <option value="24-hours">Last 24 Hours</option>
                  <option value="7-days">Last 7 Days</option>
                  <option value="30-days">Last 30 Days</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div>
              <label htmlFor="activity-type" className="block text-sm font-medium text-gray-700 mb-1">
                Activity Type
              </label>
              <div className="relative">
                <select
                  id="activity-type"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                  defaultValue="all-activities"
                >
                  <option value="all-activities">All Activities</option>
                  <option value="logins">Logins</option>
                  <option value="updates">Updates</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div>
              <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">
                User
              </label>
              <div className="relative">
                <select
                  id="user"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                  defaultValue="all-users"
                >
                  <option value="all-users">All Users</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-grow md:ml-4 w-full md:w-auto">
            <label htmlFor="search-activities" className="sr-only">
              Search activities
            </label>
            <input
              id="search-activities"
              placeholder="Search activities..."
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#6B46C1] hover:bg-[#5A3A9F] text-white flex items-center gap-2">
              <BarChart className="h-4 w-4" /> Generate Report
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Export Logs
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#D69E2E] hover:bg-[#B88A27] text-white flex items-center gap-2">
              <Lock className="h-4 w-4" /> Security Analysis
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col items-center text-center shadow-md"
            >
              <div className={`rounded-full p-3 mb-2 flex items-center justify-center ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity Log */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:col-span-2 p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-600" /> Recent Activity Log
            </h2>
            <div className="space-y-4">
              {activityLogs.map((log, index) => (
                <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-b-0">
                  <div className="flex-shrink-0">
                    <img src={log.icon || "/placeholder.svg"} alt="Activity icon" className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-gray-900">{log.title}</p>
                    <p className="text-sm text-gray-600">{log.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <a href="#" className="text-[#6B46C1] hover:underline">
                        {log.user}
                      </a>
                      <span>{log.time}</span>
                      <span>{log.ip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav className="flex items-center justify-center w-full overflow-auto mt-6">
              <ul className="flex flex-row items-center gap-1">
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Previous Page</span>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Security Alert */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-[#E53E3E] text-white p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Security Alert
              </h3>
              <p className="text-sm">
                3 failed login attempts detected from IP 203.45.67.89 in the last hour. Account temporarily locked for
                security.
              </p>
            </div>

            {/* Currently Active Users */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600" /> Currently Active Users
              </h3>
              <div className="space-y-4">
                {activeUsers.map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#6B46C1] text-white">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        {user.initials}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.activity}</p>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Summary (24hrs) */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart className="h-5 w-5 text-gray-600" /> Activity Summary (24hrs)
              </h3>
              <div className="space-y-2">
                {activitySummary.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-gray-700">
                    <span>{item.category}</span>
                    <span className="font-medium text-[#6B46C1]">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Overview */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-gray-600" /> Security Overview
              </h3>
              <div className="text-center mb-4">
                <p className="text-5xl font-bold text-[#6B46C1]">98%</p>
                <p className="text-sm text-gray-500">Security Score</p>
              </div>
              <div className="space-y-2">
                {securityChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    {check.icon}
                    <span>{check.text}</span>
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
