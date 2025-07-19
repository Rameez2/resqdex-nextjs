"use client"

import Image from "next/image"
import {
  Mail,
  Download,
  Zap,
  CalendarDays,
  BarChart,
  AlertTriangle,
  Clock,
  Check,
  X,
  Search,
  Home,
  Dog,
  Cat,
  Briefcase,
  Calendar,
  Users,
  Award,
  FileText,
  Play,
} from "lucide-react"

// Reusable Button Component (Pure JSX)
function CustomButton({ children, className = "", variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
  let variantClasses = ""

  switch (variant) {
    case "outline":
      variantClasses = "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      break
    case "ghost":
      variantClasses = "hover:bg-accent hover:text-accent-foreground"
      break
    default: // default variant
      variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90"
      break
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Reusable Card Component (Pure JSX)
function CustomCard({ children, className = "" }) {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

// Reusable Checkbox Component (Pure JSX)
function CustomCheckbox({ id, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${className}`}
      {...props}
    />
  )
}

// Reusable Input Component (Pure JSX)
function CustomInput({ className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

// Reusable Badge Component (Pure JSX)
function CustomBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </span>
  )
}

// HeaderSection Component
function HeaderSection() {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-6">
      <div className="flex items-center space-x-2">
        <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">New Applications</h1>
          <span className="text-sm text-gray-500">Applications &gt; New Applications</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <CustomButton variant="outline" className="hidden sm:flex items-center space-x-2 text-gray-700 bg-transparent">
          <Mail className="w-4 h-4" />
          <span>Send Welcome Emails</span>
        </CustomButton>
        <CustomButton variant="outline" className="hidden sm:flex items-center space-x-2 text-gray-700 bg-transparent">
          <Download className="w-4 h-4" />
          <span>Export New Applications</span>
        </CustomButton>
        <CustomButton className="bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2">
          <Zap className="w-4 h-4" />
          <span>Quick Review Mode</span>
        </CustomButton>
      </div>
    </div>
  )
}

// StatsCard Component
function StatsCard({ title, value, description, change, icon: Icon, valueColor, changeColor }) {
  return (
    <CustomCard className="p-4 flex flex-col justify-between h-full rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {Icon && <Icon className="w-5 h-5 text-gray-400" />}
      </div>
      <div className="flex items-baseline space-x-2 mb-1">
        <span className={`text-3xl font-bold ${valueColor}`}>{value}</span>
        {change && <span className={`text-sm font-medium ${changeColor || "text-gray-500"}`}>{change}</span>}
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </CustomCard>
  )
}

// BulkActionsSection Component
function BulkActionsSection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Bulk Actions for Selected Applications</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <CustomButton className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-2 rounded-full px-4 py-2">
            <Check className="w-4 h-4" />
            <span>Bulk Approve (0)</span>
          </CustomButton>
          <CustomButton className="bg-red-500 hover:bg-red-600 text-white flex items-center space-x-2 rounded-full px-4 py-2">
            <X className="w-4 h-4" />
            <span>Bulk Decline (0)</span>
          </CustomButton>
          <CustomButton className="bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2 rounded-full px-4 py-2">
            <Mail className="w-4 h-4" />
            <span>Bulk Contact (0)</span>
          </CustomButton>
        </div>
        <div className="flex items-center space-x-2">
          <CustomCheckbox id="select-all" className="rounded" />
          <label htmlFor="select-all" className="text-sm font-medium text-gray-700 cursor-pointer">
            Select all applications
          </label>
          <span className="text-sm text-gray-500 ml-4">0 of 15 applications selected</span>
        </div>
      </div>
    </div>
  )
}

// FilterSection Component
function FilterSection() {
  const filterButtons = [
    { label: "All New", count: 15, active: true },
    { label: "Today", count: 8 },
    { label: "Adoption", count: 9 },
    { label: "Volunteer", count: 4 },
    { label: "Foster", count: 2 },
    { label: "Transport", count: 1 },
    { label: "Auto-Qualified", count: 6 },
  ]

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filter New Applications</h2>
        <CustomButton variant="ghost" className="text-blue-600 hover:text-blue-700">
          Clear All Filters
        </CustomButton>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <CustomInput
            placeholder="Search by applicant name, email, phone, or application details..."
            className="pl-9 pr-2 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full"
          />
        </div>
        <CustomButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
          Search
        </CustomButton>
      </div>
      <div className="flex flex-wrap gap-2">
        {filterButtons.map((button) => (
          <CustomButton
            key={button.label}
            variant={button.active ? "default" : "outline"}
            className={`rounded-full px-4 py-2 text-sm ${
              button.active
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {button.label} ({button.count})
          </CustomButton>
        ))}
      </div>
    </div>
  )
}

// ApplicationCard Component
function ApplicationCard({ name, applicationId, submittedTime, email, type, status, details, description }) {
  const typeColor = type === "Pet Adoption" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
  const statusColor = status === "TODAY" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"

  return (
    <CustomCard className="p-4 rounded-xl shadow-sm mb-4 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">
            Application #{applicationId} &bull; Submitted {submittedTime} &bull; {email}
          </p>
          <CustomBadge className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${typeColor}`}>{type}</CustomBadge>
        </div>
        <CustomBadge className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>{status}</CustomBadge>
      </div>

      {details.interest && (
        <div className="flex items-center text-gray-700 text-sm mb-3">
          <Dog className="w-4 h-4 mr-2 text-gray-500" />
          <span>Interested in: {details.interest}</span>
        </div>
      )}

      {details.volunteerInterest && (
        <div className="flex items-center text-gray-700 text-sm mb-3">
          <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
          <span>Volunteer Interest: {details.volunteerInterest}</span>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 text-sm text-gray-700 mb-3">
        {details.experienceLevel && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Experience Level</span>
            <span>{details.experienceLevel}</span>
          </div>
        )}
        {details.housing && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Housing</span>
            <span className="flex items-center">
              <Home className="w-3 h-3 mr-1" />
              {details.housing}
            </span>
          </div>
        )}
        {details.otherPets && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Other Pets</span>
            <span className="flex items-center">
              <Cat className="w-3 h-3 mr-1" />
              {details.otherPets}
            </span>
          </div>
        )}
        {details.availability && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Availability</span>
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {details.availability}
            </span>
          </div>
        )}
        {details.references && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">References</span>
            <span className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {details.references}
            </span>
          </div>
        )}
        {details.autoScore && (
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Auto-Score</span>
            <span className="flex items-center text-emerald-600 font-semibold">
              {details.autoScore} <Award className="w-3 h-3 ml-1" />
            </span>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        <CustomButton
          variant="outline"
          className="flex items-center space-x-2 text-gray-700 border-gray-300 bg-transparent"
        >
          <FileText className="w-4 h-4" />
          <span>Full Application</span>
        </CustomButton>
        <CustomButton className="bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>Contact Applicant</span>
        </CustomButton>
        <CustomButton className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-2">
          <Check className="w-4 h-4" />
          <span>Fast-Track Approve</span>
        </CustomButton>
        <CustomButton className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Play className="w-4 h-4" />
          <span>Start Review</span>
        </CustomButton>
      </div>
    </CustomCard>
  )
}

// Main NewApplications Component
export default function NewApplications() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <HeaderSection />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard
          title="Today's Applications"
          value={8}
          description="Submitted in last 24 hours"
          change="↑ +3 vs yesterday"
          icon={CalendarDays}
          valueColor="text-emerald-600"
          changeColor="text-emerald-500"
        />
        <StatsCard
          title="This Week"
          value={15}
          description="Total new applications"
          change="↑ +7 vs last week"
          icon={BarChart}
          valueColor="text-blue-600"
          changeColor="text-blue-500"
        />
        <StatsCard
          title="Urgent Review"
          value={3}
          description="Applications over 48 hours"
          change="Need immediate attention"
          icon={AlertTriangle}
          valueColor="text-red-600"
          changeColor="text-red-500"
        />
        <StatsCard
          title="Average Review Time"
          value="18h"
          description="Time to first response"
          change="↗ 6h improvement"
          icon={Clock}
          valueColor="text-blue-600"
          changeColor="text-emerald-500"
        />
      </div>

      <BulkActionsSection />

      <FilterSection />

      {/* Recent Applications */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Applications - Showing 15 new applications</h2>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <CustomButton variant="outline" className="rounded-full px-4 py-2 text-sm bg-transparent">
              Detailed View
            </CustomButton>
            <CustomButton variant="outline" className="rounded-full px-4 py-2 text-sm bg-transparent">
              Summary View
            </CustomButton>
          </div>
        </div>

        <ApplicationCard
          name="Sarah Johnson"
          applicationId="APP-2024-0234"
          submittedTime="2 hours ago"
          email="sarah.j@email.com"
          type="Pet Adoption"
          status="TODAY"
          details={{
            interest: "Bella - Golden Retriever",
            experienceLevel: "Very Experienced",
            housing: "House with large yard",
            otherPets: "1 Cat (friendly)",
            availability: "Flexible schedule",
            references: "3 provided (1 vet)",
            autoScore: "94/100",
          }}
          description="We've been looking for a Golden Retriever for our family for over a year. We have experience with large dogs and our current cat gets along well with dogs. We're excited to provide Bella with a loving forever home."
        />

        <ApplicationCard
          name="Mike Rodriguez"
          applicationId="APP-2024-0235"
          submittedTime="4 hours ago"
          email="mike.r@email.com"
          type="Volunteer Application"
          status="NEW"
          details={{
            volunteerInterest: "Dog Walking & Socialization",
            availability: "Week",
          }}
          description="" // Description is empty in the screenshot for Mike
        />
      </div>
    </div>
  )
}
