"use client"

import Link from "next/link"
import {
  PawPrint,
  Bolt,
  ClipboardList,
  Stethoscope,
  Camera,
  Truck,
  Home,
  FileText,
  BarChart2,
  Clock,
  Syringe,
  MapPin,
  Save,
  Eye,
  CheckCircle,
} from "lucide-react"

export default function QuickAddPet() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#8a63d2] to-[#6a40a8] text-gray-800">
      {/* Header */}
      <header className="bg-white/20 backdrop-blur-md p-4 md:p-6 flex items-center justify-between text-white shadow-sm">
        <div className="flex items-center gap-2">
          <PawPrint className="h-6 w-6" />
          <span className="text-xl font-bold">ResQDx</span>
        </div>
        <nav className="text-sm">
          <Link href="#" className="hover:underline">
            Animals
          </Link>
          <span className="mx-2">{">"}</span>
          <Link href="#" className="font-semibold">
            Quick Add Pet
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 flex flex-col items-center">
        {/* Page Title */}
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Bolt className="h-8 w-8 text-orange-300" /> Quick Add Pet
          </h1>
          <p className="text-lg mt-2">Fast and efficient animal intake form for immediate rescue processing</p>
        </div>

        {/* Single Main Card for Form and Sidebar */}
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column (Form Sections) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <PawPrint className="h-5 w-5 text-orange-500" />
                <h2 className="text-lg font-semibold">Basic Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="pet-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pet Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="pet-name"
                    placeholder="Enter pet name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="species"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Species <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="species"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select species</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="breed"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Breed
                  </label>
                  <input
                    id="breed"
                    placeholder="Enter breed or mix"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex flex-wrap gap-2 text-sm">
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      Golden Retriever
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      German Shepherd Mix
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      Domestic Shorthair
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="age"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Age
                  </label>
                  <div className="relative">
                    <select
                      id="age"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select age</option>
                      <option value="puppy">Puppy (0-1 yr)</option>
                      <option value="adult">Adult (1-7 yrs)</option>
                      <option value="senior">Senior (7+ yrs)</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unknown">Unknown</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="weight"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Weight (lbs)
                  </label>
                  <input
                    id="weight"
                    placeholder="Enter weight"
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Medical Status Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <Syringe className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Medical Status</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="health-status"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Health Status
                  </label>
                  <div className="relative">
                    <select
                      id="health-status"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select status</option>
                      <option value="healthy">Healthy</option>
                      <option value="minor-issues">Minor Issues</option>
                      <option value="major-issues">Major Issues</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="spay-neuter-status"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Spay/Neuter Status
                  </label>
                  <div className="relative">
                    <select
                      id="spay-neuter-status"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select status</option>
                      <option value="spayed">Spayed</option>
                      <option value="neutered">Neutered</option>
                      <option value="intact">Intact</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Vaccinations
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="rabies"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label
                        htmlFor="rabies"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Rabies
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="dhpp"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label
                        htmlFor="dhpp"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        DHPP
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="fvrcp"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label
                        htmlFor="fvrcp"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        FVRCP
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bordetella"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label
                        htmlFor="bordetella"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Bordetella
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="unknown-vaccine"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label
                        htmlFor="unknown-vaccine"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Unknown
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label
                    htmlFor="medical-notes"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Medical Notes
                  </label>
                  <textarea
                    id="medical-notes"
                    placeholder="Enter any medical concerns, treatments needed, or health observations..."
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Intake Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <MapPin className="h-5 w-5 text-pink-500" />
                <h2 className="text-lg font-semibold">Intake Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="intake-source"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Intake Source <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="intake-source"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="">Select source</option>
                      <option value="owner-surrender">Owner Surrender</option>
                      <option value="stray">Stray</option>
                      <option value="transfer">Transfer</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="priority-level"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Priority Level
                  </label>
                  <div className="relative">
                    <select
                      id="priority-level"
                      defaultValue="normal"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none pr-8"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label
                    htmlFor="intake-notes"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Intake Notes
                  </label>
                  <textarea
                    id="intake-notes"
                    placeholder="Circumstances of rescue, behavioral observations, special needs..."
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <Camera className="h-5 w-5 text-gray-500" />
                <h2 className="text-lg font-semibold">Photos</h2>
              </div>
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
                <Camera className="h-12 w-12 text-gray-400 mb-3" />
                <p className="font-semibold text-gray-700">Click to upload photos</p>
                <p className="text-sm text-gray-500">or drag and drop files here</p>
                <p className="text-xs text-gray-400">JPG, PNG up to 10MB each</p>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Sections) */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Quick Actions Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <Bolt className="h-5 w-5 text-orange-500" />
                <h2 className="text-lg font-semibold">Quick Actions</h2>
              </div>
              <div className="space-y-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full justify-start bg-gradient-to-r from-[#8a63d2] to-[#6a40a8] text-white hover:from-[#7a53c2] hover:to-[#5a3098]">
                  <ClipboardList className="mr-2 h-4 w-4" /> View All Animals
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-gray-700 hover:bg-gray-100 bg-transparent">
                  <Stethoscope className="mr-2 h-4 w-4 text-purple-500" /> Schedule Medical Exam
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-gray-700 hover:bg-gray-100 bg-transparent">
                  <Camera className="mr-2 h-4 w-4 text-orange-500" /> Upload More Photos
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-gray-700 hover:bg-gray-100 bg-transparent">
                  <Truck className="mr-2 h-4 w-4 text-blue-500" /> Request Transport
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-gray-700 hover:bg-gray-100 bg-transparent">
                  <Home className="mr-2 h-4 w-4 text-green-500" /> Find Foster Home
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-gray-700 hover:bg-gray-100 bg-transparent">
                  <FileText className="mr-2 h-4 w-4 text-pink-500" /> Create Adoption Listing
                </button>
              </div>
            </div>

            {/* Today's Intake Stats Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <BarChart2 className="h-5 w-5 text-green-500" />
                <h2 className="text-lg font-semibold">Today{"'"}s Intake Stats</h2>
              </div>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-purple-700">8</div>
                <p className="text-sm text-gray-600">New Intakes Today</p>
                <div className="flex justify-center items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">5</div>
                    <p className="text-sm text-gray-600">Dogs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">3</div>
                    <p className="text-sm text-gray-600">Cats</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-100 text-red-700 hover:bg-red-100 px-3 py-1 rounded-full text-xs font-medium">
                  2 High Priority
                </span>
              </div>
            </div>

            {/* Recent Additions Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 pb-4">
                <Clock className="h-5 w-5 text-gray-500" />
                <h2 className="text-lg font-semibold">Recent Additions</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      B
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Bella</p>
                    <p className="text-sm text-gray-600">Golden Retriever • 15 min ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      M
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Max</p>
                    <p className="text-sm text-gray-600">Tabby Cat • 32 min ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      L
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Luna</p>
                    <p className="text-sm text-gray-600">German Shepherd Mix • 1 hr ago</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-white p-4 md:p-6 border-t border-gray-200 shadow-lg flex justify-center gap-4 z-10">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-700 hover:bg-gray-100 bg-transparent">
          <Save className="mr-2 h-4 w-4" /> Save as Draft
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-700 hover:bg-gray-100 bg-transparent">
          <Eye className="mr-2 h-4 w-4" /> Preview
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green-500 text-white hover:bg-green-600">
          <CheckCircle className="mr-2 h-4 w-4" /> Add Pet to System
        </button>
      </footer>
    </div>
  )
}
