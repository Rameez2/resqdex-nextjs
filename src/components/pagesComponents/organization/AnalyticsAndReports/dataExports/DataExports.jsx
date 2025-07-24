"use client"

import { useState } from "react"
import {
  BarChart3,
  FileText,
  Users,
  DollarSign,
  Calendar,
  Download,
  Database,
  Truck,
  Heart,
  TrendingUp,
  Save,
  Eye,
  HardDrive,
  ChevronDown,
} from "lucide-react"

const DataExports = () => {
  const [selectedCategory, setSelectedCategory] = useState("animal-database")
  const [startDate, setStartDate] = useState("2024-01-01")
  const [endDate, setEndDate] = useState("2024-12-31")
  const [timePeriod, setTimePeriod] = useState("last-30")
  const [fileFormat, setFileFormat] = useState("excel")

  const statsCards = [
    {
      icon: BarChart3,
      value: "1,247",
      label: "Total Animals",
      subtitle: "Available for export",
      color: "text-blue-500",
    },
    {
      icon: FileText,
      value: "456",
      label: "Applications",
      subtitle: "Ready to export",
      color: "text-orange-500",
    },
    {
      icon: Users,
      value: "234",
      label: "Volunteers",
      subtitle: "Complete records",
      color: "text-purple-500",
    },
    {
      icon: DollarSign,
      value: "$41.7K",
      label: "Financial Data",
      subtitle: "Monthly totals",
      color: "text-yellow-500",
    },
    {
      icon: Calendar,
      value: "23",
      label: "Scheduled Exports",
      subtitle: "Active automations",
      color: "text-green-500",
    },
  ]

  const dataCategories = [
    {
      id: "animal-database",
      icon: Heart,
      title: "Animal Database",
      description: "Complete animal records including intake data, medical history, photos, and adoption status",
      records: "1,247 records",
      size: "15.2 MB",
    },
    {
      id: "applications",
      icon: FileText,
      title: "Applications",
      description: "Adoption applications, approvals, interviews, and adopter communications",
      records: "456 applications",
      size: "6.8 MB",
    },
    {
      id: "transport",
      icon: Truck,
      title: "Transport Data",
      description: "Transport requests, routes, driver assignments, and delivery tracking",
      records: "892 transports",
      size: "5.4 MB",
    },
    {
      id: "volunteers",
      icon: Users,
      title: "Volunteers & Foster",
      description: "Volunteer database, hours tracking, foster families, and resource coordinators",
      records: "234 volunteers",
      size: "4.1 MB",
    },
    {
      id: "financial",
      icon: DollarSign,
      title: "Financial Reports",
      description: "Donations, expenses, adoption fees, and comprehensive financial analytics",
      records: "12 months data",
      size: "2.8 MB",
    },
    {
      id: "analytics",
      icon: TrendingUp,
      title: "Analytics & Metrics",
      description: "Performance analytics, success metrics, and operational insights",
      records: "All time data",
      size: "3.7 MB",
    },
  ]

  const quickExports = [
    { icon: Database, title: "Complete Animal Database", color: "bg-blue-500" },
    { icon: DollarSign, title: "Monthly Financial Report", color: "bg-yellow-500" },
    { icon: Users, title: "Volunteer Contact List", color: "bg-purple-500" },
    { icon: Heart, title: "Foster Family Directory", color: "bg-pink-500" },
    { icon: BarChart3, title: "Success Metrics Summary", color: "bg-green-500" },
    { icon: Truck, title: "Transport History", color: "bg-blue-600" },
  ]

  const scheduledExports = [
    {
      title: "Monthly Financial Report",
      schedule: "Every 1st of month",
      format: "Excel format",
    },
    {
      title: "Weekly Animal Update",
      schedule: "Every Monday",
      format: "CSV format",
    },
    {
      title: "Volunteer Hours",
      schedule: "Bi-weekly",
      format: "PDF report",
    },
  ]

  const recentExports = [
    {
      name: "Animal_Database_2024.xlsx",
      time: "Today, 2:30 PM",
      size: "15.2 MB",
    },
    {
      name: "Financial_Report_Dec.pdf",
      time: "Yesterday",
      size: "2.8 MB",
    },
    {
      name: "Volunteer_Hours_Q4.csv",
      time: "3 days ago",
      size: "1.2 MB",
    },
    {
      name: "Transport_Summary.xlsx",
      time: "1 week ago",
      size: "6.4 MB",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Data Exports</h1>
          </div>
          <p className="text-purple-100 text-lg">
            Export data in multiple formats with scheduled reporting and custom configurations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Export Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Select Data Category
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {dataCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCategory === category.id
                        ? "border-purple-300 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-start gap-3">
                      <category.icon className="w-6 h-6 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{category.records}</span>
                          <span>~{category.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Export Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">📅 Date Range</label>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Time Period</label>
                        <div className="relative">
                          <select
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm appearance-none pr-8"
                          >
                            <option value="last-30">Last 30 Days</option>
                            <option value="last-90">Last 90 Days</option>
                            <option value="custom">Custom Range</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Start Date</label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">End Date</label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">📄 Export Format</label>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">File Format</label>
                        <div className="relative">
                          <select
                            value={fileFormat}
                            onChange={(e) => setFileFormat(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm appearance-none pr-8"
                          >
                            <option value="excel">Excel (.xlsx)</option>
                            <option value="csv">CSV (.csv)</option>
                            <option value="pdf">PDF (.pdf)</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 mb-2 block">Include Fields</label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="photos" defaultChecked className="rounded" />
                            <label htmlFor="photos" className="text-xs">
                              Photos & Images
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="medical" defaultChecked className="rounded" />
                            <label htmlFor="medical" className="text-xs">
                              Medical Records
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="notes" defaultChecked className="rounded" />
                            <label htmlFor="notes" className="text-xs">
                              Notes & Comments
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="contact" className="rounded" />
                            <label htmlFor="contact" className="text-xs">
                              Contact Information
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Template
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    Preview Export
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    Export Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Exports */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Quick Exports
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {quickExports.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className={`w-6 h-6 rounded ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scheduled Exports */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  Scheduled Exports
                </h3>
              </div>
              <div className="p-4 space-y-4">
                {scheduledExports.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-medium">{item.title}</h4>
                      <div className="flex gap-1">
                        <button className="px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                          Edit
                        </button>
                        <button className="px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                          Run
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      {item.schedule} • {item.format}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Exports */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Recent Exports
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {recentExports.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.time} • {item.size}
                      </p>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Download className="w-3 h-3 text-blue-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage Usage */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-purple-600" />
                  Storage Usage
                </h3>
              </div>
              <div className="p-4">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold">2.1 GB</div>
                  <div className="text-xs text-gray-500">Used of 10 GB</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                </div>
                <p className="text-xs text-gray-500 text-center">67% of storage capacity used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataExports
