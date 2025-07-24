import {
  Users,
  Clock,
  Calendar,
  TrendingUp,
  UserPlus,
  FileText,
  Mail,
  Phone,
  Heart,
  CalendarDays,
  Star,
  MapPin,
  Award,
  Truck,
  Camera,
  Home,
  Shield,
  BarChart3,
  Send,
  BookOpen,
  Zap,
  ChevronDown,
} from "lucide-react"

const VolunteerDatabase = () => {
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  return (
    <div className="min-h-screen w-full bg-emerald-800 p-4 sm:p-6">
      <div className="max-w-full mx-auto space-y-4 sm:space-y-6">
        {/* Top Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-orange-500" />
                <span className="text-2xl sm:text-3xl font-bold text-orange-500">234</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Active Volunteers</p>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">+12 this month</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-6 w-6 text-orange-500" />
                <span className="text-2xl sm:text-3xl font-bold text-orange-500">1,847</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Hours This Month</p>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">+156 vs last month</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-6 w-6 text-orange-500" />
                <span className="text-2xl sm:text-3xl font-bold text-orange-500">67</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Available This Week</p>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Ready for assignments</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-orange-500" />
                <span className="text-2xl sm:text-3xl font-bold text-orange-500">94%</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Retention Rate</p>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">+3% this quarter</div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative w-full sm:w-36">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm appearance-none pr-8">
                    <option>All Volunteers</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative w-full sm:w-32">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm appearance-none pr-8">
                    <option>All Skills</option>
                    <option>Medical</option>
                    <option>Transport</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative w-full sm:w-36">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm appearance-none pr-8">
                    <option>All Locations</option>
                    <option>Austin, TX</option>
                    <option>Dallas, TX</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <input
                  type="text"
                  placeholder="Search volunteers..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <UserPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Add Volunteer</span>
                  <span className="sm:hidden">Add</span>
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Generate Report</span>
                  <span className="sm:hidden">Report</span>
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Send Newsletter</span>
                  <span className="sm:hidden">Newsletter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Volunteer Profile Card */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <h2 className="text-lg font-semibold text-orange-500">Volunteer Network</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="border-l-4 border-emerald-500 pl-4 sm:pl-6">
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Sarah Martinez</h3>
                      <div className="flex gap-2">
                        <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded font-medium">
                          SUPERSTAR
                        </span>
                        <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded font-medium">
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Primary Role</p>
                        <p className="font-medium">Transport Coordinator</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Experience</p>
                        <p className="font-medium">3 years</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Location</p>
                        <p className="font-medium flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Austin, TX
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Rating</p>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="font-medium ml-1">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="border border-red-200 text-red-600 text-xs px-2 py-1 rounded">
                      Licensed Veterinarian
                    </span>
                    <span className="border border-red-200 text-red-600 text-xs px-2 py-1 rounded">Surgery</span>
                    <span className="border border-red-200 text-red-600 text-xs px-2 py-1 rounded">Emergency Care</span>
                    <span className="border border-blue-200 text-blue-600 text-xs px-2 py-1 rounded">Training</span>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">156</div>
                      <div className="text-xs text-gray-500">Medical Cases</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">378</div>
                      <div className="text-xs text-gray-500">Total Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">234</div>
                      <div className="text-xs text-gray-500">Animals Treated</div>
                    </div>
                  </div>

                  {/* Weekly Availability */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">{"This Week's Availability"}</p>
                    <div className="grid grid-cols-7 gap-1">
                      {weekDays.map((day, index) => (
                        <div
                          key={day}
                          className={`text-center p-1 sm:p-2 rounded text-xs ${
                            index < 5 ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 flex-1 transition-colors">
                      <Phone className="h-4 w-4" />
                      Contact
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 flex-1 transition-colors">
                      <Heart className="h-4 w-4" />
                      Medical
                    </button>
                    <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 flex-1 transition-colors">
                      <CalendarDays className="h-4 w-4" />
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Current Opportunities */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-700">Current Opportunities</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-3">
                <div className="flex items-start gap-3 p-2 border-l-4 border-orange-400">
                  <Truck className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm">Transport Driver Needed</p>
                    <p className="text-xs text-gray-500">Austin → Dallas • Tomorrow 2PM • 3 dogs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 border-l-4 border-orange-400">
                  <Camera className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm">Photo Session</p>
                    <p className="text-xs text-gray-500">5 cats need adoption photos • This Saturday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 border-l-4 border-orange-400">
                  <Users className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm">Adoption Event Helper</p>
                    <p className="text-xs text-gray-500">Petmart event • Sunday 10AM-4PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 border-l-4 border-orange-400">
                  <Home className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm">Foster Home Check</p>
                    <p className="text-xs text-gray-500">3 home visits needed • This week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 border-l-4 border-orange-400">
                  <Shield className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm">Administrative Support</p>
                    <p className="text-xs text-gray-500">Data entry • Remote work • Flexible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Progress */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-700">Training Progress</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="truncate">Animal Safety Basics</span>
                    <span className="flex-shrink-0 ml-2">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="truncate">Transport Certification</span>
                    <span className="flex-shrink-0 ml-2">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="truncate">Photography Workshop</span>
                    <span className="flex-shrink-0 ml-2">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="truncate">Event Management</span>
                    <span className="flex-shrink-0 ml-2">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-700">Quick Actions</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-2">
                <button className="w-full flex items-center justify-start gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <UserPlus className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm truncate">Add New Volunteer</span>
                </button>
                <button className="w-full flex items-center justify-start gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <Send className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm truncate">Send Mass Email</span>
                </button>
                <button className="w-full flex items-center justify-start gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <Calendar className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm truncate">Schedule Orientation</span>
                </button>
                <button className="w-full flex items-center justify-start gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <BookOpen className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm truncate">Assign Training</span>
                </button>
                <button className="w-full flex items-center justify-start gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <BarChart3 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm truncate">Volunteer Reports</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-700">Quick Stats</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">67</div>
                    <div className="text-xs text-gray-500">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">23</div>
                    <div className="text-xs text-gray-500">Scheduled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-xs text-gray-500">New This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">4.8</div>
                    <div className="text-xs text-gray-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerDatabase
