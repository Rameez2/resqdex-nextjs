export default function AnalyticalReports() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <input type="date" defaultValue="2025-06-21" className="border rounded px-3 py-1 text-sm" />
              <span className="text-gray-500">to</span>
              <input type="date" defaultValue="2025-07-21" className="border rounded px-3 py-1 text-sm" />
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">7 Days</button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">30 Days</button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">90 Days</button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">1 Year</button>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
              <span className="text-gray-600">📊</span>
              Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <span>📅</span>
              Schedule Report
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Animals Rescued */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Total Animals Rescued</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +15% vs last month
            </div>
          </div>

          {/* Successful Adoptions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Successful Adoptions</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">892</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +12% vs last month
            </div>
          </div>

          {/* Adoption Success Rate */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Adoption Success Rate</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +3% vs last month
            </div>
          </div>

          {/* Average Time to Adoption */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Average Time to Adoption</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">18 days</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>4 days improvement
            </div>
          </div>

          {/* Active Volunteers */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Active Volunteers</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">234</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +12 new volunteers
            </div>
          </div>

          {/* Volunteer Hours */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Volunteer Hours</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1,847</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +142 hours this month
            </div>
          </div>

          {/* Foster Placements */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Foster Placements</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">67</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              +8 placements this week
            </div>
          </div>

          {/* Cost Per Adoption */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Cost Per Adoption</h3>
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$347</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">📈</span>
              $21 cost reduction
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Adoption Trends Chart */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📈</span>
              <h3 className="text-lg font-semibold">Adoption Trends Over Time</h3>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📊</div>
                <div className="font-medium">Interactive Line Chart</div>
                <div className="text-sm">Monthly adoption rates with trend analysis</div>
              </div>
            </div>
            <div className="text-center">
              <button className="text-blue-500 text-sm hover:underline">View Adoptions this month</button>
            </div>
          </div>

          {/* Animals by Type Chart */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🐾</span>
              <h3 className="text-lg font-semibold">Animals by Type</h3>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🥧</div>
                <div className="font-medium">Interactive Pie Chart</div>
                <div className="text-sm">Distribution by animal species</div>
              </div>
            </div>
            <div className="text-center">
              <button className="text-blue-500 text-sm hover:underline">Dogs: 45% | Cats: 38%</button>
            </div>
          </div>
        </div>

        {/* Performance Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Operational Performance */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">🎯</span>
              <h3 className="text-lg font-semibold">Operational Performance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Intake Processing Time</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">2.3 hours</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Application Approval Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">76%</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-15 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Medical Treatment Success</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">94%</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-19 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Transport On-Time Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">92%</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Volunteer Retention Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">89%</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-17 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Foster Success Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">96%</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-19 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Performance */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">💰</span>
              <h3 className="text-lg font-semibold">Financial Performance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Monthly Donations</span>
                <span className="text-sm font-medium">$23,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Adoption Fees Collected</span>
                <span className="text-sm font-medium">$17,850</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Medical Expenses</span>
                <span className="text-sm font-medium">$12,340</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Supply Costs</span>
                <span className="text-sm font-medium">$4,567</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Resource Sharing Savings</span>
                <span className="text-sm font-medium">$8,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cost Per Animal Saved</span>
                <span className="text-sm font-medium">$247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">ROI on Investments</span>
                <span className="text-sm font-medium">284%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Available Reports */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">📋</span>
            <h3 className="text-lg font-semibold">Available Reports</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monthly Operations Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Monthly Operations Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive overview of all operations including adoptions, intakes, medical care, and volunteer
                activities for the month.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Adoption Success Analysis */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Adoption Success Analysis</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Detailed analysis of adoption trends, success rates, and factors contributing to successful placements
                by animal type and adopter demographics.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Financial Performance Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Financial Performance Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Complete financial analysis including donations, expenses, cost per adoption, and budget performance
                with recommendations for optimization.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Volunteer Performance Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Volunteer Performance Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Analysis of volunteer engagement, hours contributed, retention rates, and impact metrics across all
                volunteer activities and programs.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Medical Outcomes Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Medical Outcomes Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Medical treatment success rates, cost analysis, common conditions, and veterinary partnership
                performance with health outcome trends.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Foster Network Analysis */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Foster Network Analysis</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Foster family performance, placement success rates, capacity utilization, and foster-to-adoption
                conversion analysis.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Transport Efficiency Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Transport Efficiency Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Transport network performance including on-time rates, cost efficiency, driver performance and route
                optimization analysis.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Partnership Impact Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Partnership Impact Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Analysis of partner network contributions, resource sharing value, collaboration success, and
                partnership ROI across the rescue network.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Generate Now
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Schedule
                </button>
              </div>
            </div>

            {/* Custom Analytics Report */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Custom Analytics Report</h4>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Build custom reports with specific metrics, date ranges, and filters tailored to your organization's
                unique reporting needs.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Build Custom
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                  Templates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
