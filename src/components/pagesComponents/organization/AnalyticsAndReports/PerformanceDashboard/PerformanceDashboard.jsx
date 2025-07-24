import {
  TrendingUp,
  Target,
  DollarSign,
  CheckCircle,
  Search,
  BarChart3,
  Users,
  Activity,
  AlertTriangle,
  Download,
  FileText,
  Zap,
} from "lucide-react"

export default function PerformanceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center text-white space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Performance Analytics</h1>
          </div>
          <p className="text-purple-100">
            Operational efficiency tracking, performance optimization insights, and advanced analytics
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="flex justify-center gap-2 flex-wrap">
          <button className="px-4 py-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors">
            7 Days
          </button>
          <button className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors">
            30 Days
          </button>
          <button className="px-4 py-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors">
            90 Days
          </button>
          <button className="px-4 py-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors">
            1 Year
          </button>
          <button className="px-4 py-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors">
            Custom
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-2 flex-wrap">
          <button className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate Report
          </button>
          <button className="px-4 py-2 bg-red-500/80 text-white rounded-md hover:bg-red-500 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Optimize Performance
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">85%</div>
                <div className="text-sm text-gray-600 mb-2">Overall Efficiency</div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  +7% vs last month
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
                <div className="text-sm text-gray-600 mb-2">Avg Days to Adoption</div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  -2 days improvement
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">$347</div>
                <div className="text-sm text-gray-600 mb-2">Cost Per Adoption</div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  -$23 reduction
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">94%</div>
                <div className="text-sm text-gray-600 mb-2">Process Success Rate</div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  +3% improvement
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Operational Performance Metrics */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Operational Performance Metrics</h3>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    View Details
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    Compare
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">2.3hrs</div>
                  <div className="text-sm text-gray-600 mb-2">Intake Processing Time</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Excellent
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">76%</div>
                  <div className="text-sm text-gray-600 mb-2">Application Approval Rate</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Good
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">94%</div>
                  <div className="text-sm text-gray-600 mb-2">Medical Success Rate</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Excellent
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
                  <div className="text-sm text-gray-600 mb-2">Transport On-Time Rate</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Excellent
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
                  <div className="text-sm text-gray-600 mb-2">Volunteer Retention</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Good
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">96%</div>
                  <div className="text-sm text-gray-600 mb-2">Foster Success Rate</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Excellent
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Efficiency Score */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Efficiency Score</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="85, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">85%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-sm text-gray-600">Overall Operational Efficiency</div>
                </div>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Performance Trends</h3>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Adoption Speed</span>
                  <span className="text-sm font-medium text-blue-600">+12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cost Efficiency</span>
                  <span className="text-sm font-medium text-blue-600">+8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Medical Outcomes</span>
                  <span className="text-sm font-medium text-blue-600">+3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Volunteer Engagement</span>
                  <span className="text-sm font-medium text-blue-600">+5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Transport Efficiency</span>
                  <span className="text-sm font-medium text-blue-600">+7%</span>
                </div>
              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Industry Benchmarks</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Adoption Rate</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Return Rate</span>
                    <span>4.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Volunteer Retention</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "89%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cost per Adoption</span>
                    <span>$347</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Above industry average</span>
                  <div className="w-2 h-2 bg-gray-300 rounded-full ml-2"></div>
                  <span>At industry level</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Optimization Insights */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Performance Optimization Insights</h3>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                  Priority Actions
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                  Full Analysis
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adoption Process Acceleration</h4>
                  <p className="text-sm text-gray-600">
                    Average adoption time reduced by 2.4 days through streamlined application processing. Consider
                    implementing pre-approval system for further improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost Optimization Success</h4>
                  <p className="text-sm text-gray-600">
                    Resource sharing partnerships reduced cost per adoption by $23. Expand partnership network for
                    additional 15% cost reduction potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Volunteer Engagement Opportunity</h4>
                  <p className="text-sm text-gray-600">
                    89% volunteer retention is good but has 11% improvement potential. Implement recognition program and
                    skills development to reach 95% target.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medical Efficiency Excellence</h4>
                  <p className="text-sm text-gray-600">
                    94% medical success rate exceeds industry standards. Document best practices to share with partner
                    organizations and maintain excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Performance Alert</h4>
                <p className="text-sm text-red-700">
                  Application approval rate (76%) is below 80% target. Review criteria and implement pre-screening to
                  improve efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
