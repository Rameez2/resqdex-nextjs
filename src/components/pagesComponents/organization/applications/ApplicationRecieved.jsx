import {
  Search,
  ClipboardList,
  Mail,
  CalendarCheck,
  AlertCircle,
  Gift,
  Eye,
  Star,
  Clock,
  Phone,
  Cat,
  Dog,
  X,
  Check,
  FileText,
  ChevronRight,
} from "lucide-react"

// Mock Data
const applications = [
  {
    id: "1",
    applicantName: "Sarah Johnson",
    applicationId: "APP-2024-0156",
    submittedDaysAgo: 7,
    animal: {
      name: "Bella",
      breed: "Golden Retriever",
      age: 3,
      size: "Large",
      animalId: "#A001",
      icon: <Dog className="w-4 h-4" />,
    },
    experienceLevel: "Experienced",
    housing: "House with yard",
    otherPets: "1 Cat",
    contactEmail: "sarah.j@email.com",
    status: "overdue",
    overdueDays: 6,
    preApproved: true,
  },
  {
    id: "2",
    applicantName: "Mike Rodriguez",
    applicationId: "APP-2024-0157",
    submittedDaysAgo: 2,
    animal: {
      name: "Whiskers",
      breed: "Tabby Mix",
      age: 2,
      size: "Medium",
      animalId: "#A002",
      icon: <Cat className="w-4 h-4" />,
    },
    experienceLevel: "First-time owner",
    housing: "Apartment",
    otherPets: "None",
    status: "new",
    preApproved: false,
    contactEmail: "mike.r@email.com",
  },
  {
    id: "3",
    applicantName: "Emily Chen",
    applicationId: "APP-2024-0155",
    submittedDaysAgo: 4,
    animal: {
      name: "Max",
      breed: "German Shepherd",
      age: 5,
      size: "Large",
      animalId: "#A003",
      icon: <Dog className="w-4 h-4" />,
    },
    experienceLevel: "Very experienced",
    housing: "House with large yard",
    otherPets: "2 Dogs",
    status: "under-review",
    preApproved: true,
    contactEmail: "emily.c@email.com",
  },
  {
    id: "4",
    applicantName: "David Lee",
    applicationId: "APP-2024-0154",
    submittedDaysAgo: 10,
    animal: {
      name: "Mittens",
      breed: "Siamese",
      age: 1,
      size: "Small",
      animalId: "#A004",
      icon: <Cat className="w-4 h-4" />,
    },
    experienceLevel: "Experienced",
    housing: "Condo",
    otherPets: "None",
    status: "approved",
    preApproved: false,
    contactEmail: "david.l@email.com",
  },
  {
    id: "5",
    applicantName: "Jessica Kim",
    applicationId: "APP-2024-0153",
    submittedDaysAgo: 1,
    animal: {
      name: "Buddy",
      breed: "Beagle",
      age: 4,
      size: "Medium",
      animalId: "#A005",
      icon: <Dog className="w-4 h-4" />,
    },
    experienceLevel: "First-time owner",
    housing: "House",
    otherPets: "1 Bird",
    status: "new",
    preApproved: true,
    contactEmail: "jessica.k@email.com",
  },
]

const filterButtons = [
  { label: "All Applications", count: 12, status: "all" },
  { label: "Pre-approved", count: 3, status: "pre-approved" },
  { label: "Overdue", count: 4, status: "overdue" },
  { label: "New", count: 8, status: "new" },
  { label: "Under Review", count: 5, status: "under-review" },
  { label: "Approved", count: 3, status: "approved" },
  { label: "Rejected", count: 2, status: "rejected" },
]

export default function ApplicationRecieved() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      {/* Dashboard Header */}
      <div className="relative bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-gray-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Applications Received</h1>
              <p className="text-sm text-gray-500">Animals {">"} Applications Received</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2 text-gray-700 bg-transparent">
              <ClipboardList className="w-4 h-4" />
              Export Applications
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2 text-gray-700 bg-transparent">
              <Mail className="w-4 h-4" />
              Bulk Email
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 hover:bg-orange-600 text-white h-10 px-4 py-2 flex items-center gap-2">
              <span className="relative">
                <CalendarCheck className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs bg-white text-orange-500 border border-orange-500 rounded-full">
                  17
                </span>
              </span>
              Schedule Interviews
            </button>
          </div>
        </div>
        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full uppercase">
          Overdue
        </span>

        {/* Dashboard Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-red-500">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="whitespace-nowrap text-sm font-medium text-gray-600">Overdue Applications</h3>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-red-600">4</div>
              <p className="text-xs text-gray-500">Need immediate review</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-orange-500">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="whitespace-nowrap text-sm font-medium text-gray-600">New Applications</h3>
              <Gift className="h-4 w-4 text-orange-500" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-xs text-gray-500">This week</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="whitespace-nowrap text-sm font-medium text-gray-600">Under Review</h3>
              <Eye className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-gray-800">5</div>
              <p className="text-xs text-gray-500">In progress</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="whitespace-nowrap text-sm font-medium text-gray-600">Pre-approved</h3>
              <Star className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <p className="text-xs text-gray-500">Priority applicants</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="whitespace-nowrap text-sm font-medium text-gray-600">Average Response Time</h3>
              <Clock className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-gray-800">2.3</div>
              <p className="text-xs text-gray-500">Days to review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Applications */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Search className="w-5 h-5" /> Search & Filter Applications
          </h2>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 hover:text-gray-800">
            Clear All Filters
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search by applicant name, animal name, or application ID..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 hover:bg-orange-600 text-white h-10 px-4 py-2">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((filter) => (
            <button
              key={filter.status}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2
                ${
                  filter.status === "pre-approved"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : filter.status === "overdue"
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Recent Applications List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Applications - Showing {applications.length} of 27 total applications
        </h2>
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow grid gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-gray-800">{app.applicantName}</h3>
                    <div className="flex items-center gap-2">
                      {app.preApproved && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-100 text-green-700">
                          <Check className="w-3 h-3 mr-1" /> Pre-approved by us
                        </span>
                      )}
                      {app.status === "overdue" && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-500 text-white">
                          {app.overdueDays} Days Overdue
                        </span>
                      )}
                      {app.status === "new" && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-blue-500 text-white">
                          New Application
                        </span>
                      )}
                      {app.status === "under-review" && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500 text-white">
                          Under Review
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Application #{app.applicationId} • Submitted {app.submittedDaysAgo} days ago
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 text-sm mt-2">
                    {app.animal.icon}
                    <span className="font-semibold">{app.animal.name}</span> - {app.animal.breed}
                    <span className="text-gray-500">
                      {app.animal.age} years old - {app.animal.size} - {app.animal.animalId}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm mt-2">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Experience Level</span>
                      <span className="font-medium">{app.experienceLevel}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Housing</span>
                      <span className="font-medium">{app.housing}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Other Pets</span>
                      <span className="font-medium">{app.otherPets}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Contact</span>
                      <span className="font-medium">{app.contactEmail}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-4 md:mt-0">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2 text-gray-700 bg-transparent">
                    <Phone className="w-4 h-4" /> Contact
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 flex items-center gap-2">
                    <X className="w-4 h-4" /> Reject
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> {app.status === "new" ? "Start Review" : "Review Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
