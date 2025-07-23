import {
  DollarSign,
  Heart,
  Sparkles,
  LineChart,
  PieChart,
  Gauge,
  BarChart,
  Download,
  FileText,
  Save,
  TrendingUp,
  TrendingDown,
  Handshake,
  Home,
  ClipboardList,
  PiggyBank,
  FileBarChart,
  FilePieChart,
  FileBadge,
  Settings,
} from "lucide-react"

export default function FinancialPerformance() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header Section */}
      <header className="bg-[#700B0D] py-4 px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            This Week
          </button>
          <button className="px-4 py-2 rounded-md bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90">This Month</button>
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            This Quarter
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            This Year
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            Custom Range
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            <Download className="mr-2 h-4 w-4" />
            Export Financial Data
          </button>
          <button className="px-4 py-2 rounded-md bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90">
            <FileText className="mr-2 h-4 w-4" />
            Generate Budget Report
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-[#333333] hover:bg-gray-100">
            <Save className="mr-2 h-4 w-4" />
            Save Template
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6 md:p-10 lg:p-16 grid gap-8">
        {/* Financial Performance Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
            <DollarSign className="mr-2 h-6 w-6 text-[#8a0e10]" />
            Financial Performance Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#8a0e10] text-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">{"41,697$"}</div>
              <p className="text-sm opacity-90">Total Revenue</p>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {"+4,234$ vs last month"}
              </p>
            </div>
            <div className="p-6 bg-[#8a0e10] text-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">{"28,457$"}</div>
              <p className="text-sm opacity-90">Total Expenses</p>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {"+1,456$ vs last month"}
              </p>
            </div>
            <div className="p-6 bg-[#8a0e10] text-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">{"13,240$"}</div>
              <p className="text-sm opacity-90">Net Surplus</p>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {"+2,778$ vs last month"}
              </p>
            </div>
            <div className="p-6 bg-[#8a0e10] text-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">{"347$"}</div>
              <p className="text-sm opacity-90">Cost Per Adoption</p>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                {"-23$ improvement"}
              </p>
            </div>
            <div className="p-6 bg-[#8a0e10] text-white rounded-lg shadow-md col-span-full sm:col-span-1">
              <div className="text-4xl font-bold mb-2">68%</div>
              <p className="text-sm opacity-90">Expense Ratio</p>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -3% optimization
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Streams */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
              <Heart className="mr-2 h-6 w-6 text-[#8a0e10]" />
              Revenue Streams
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Individual Donations",
                  description: "456 donors • Average $52.30 • +18% vs last month",
                  value: "23,847$",
                },
                {
                  title: "Adoption Fees",
                  description: "127 adoptions • $140 average • +12% vs last month",
                  value: "17,850$",
                },
                {
                  title: "Grant Funding",
                  description: "State grant • Medical care program • Quarterly",
                  value: "8,500$",
                },
                {
                  title: "Corporate Sponsorships",
                  description: "3 sponsors • PetSmart, Local Vet, Feed Store",
                  value: "3,200$",
                },
                {
                  title: "Fundraising Events",
                  description: "Adoption events • Merchandise sales • Raffles",
                  value: "2,850$",
                },
                {
                  title: "Merchandise & Services",
                  description: "Pet supplies • Training services • Photography",
                  value: "1,450$",
                },
              ].map((item, index) => (
                <div key={index} className="p-4 flex items-center justify-between rounded-lg shadow-sm bg-white">
                  <div>
                    <h3 className="font-semibold text-[#333333]">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.description}</p>
                  </div>
                  <span className="font-bold text-[#8a0e10]">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Expense Categories */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
              <Sparkles className="mr-2 h-6 w-6 text-[#EF5350]" />
              Expense Categories
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Medical & Veterinary Care",
                  description: "567 treatments • Emergency care • Preventive medicine",
                  value: "12,340$",
                  progress: 70,
                },
                {
                  title: "Food & Supplies",
                  description: "Premium pet food • Bedding • Toys • Cleaning supplies",
                  value: "6,850$",
                  progress: 50,
                },
                {
                  title: "Facility Operations",
                  description: "Rent • Utilities • Insurance • Maintenance",
                  value: "4,200$",
                  progress: 30,
                },
                {
                  title: "Transportation",
                  description: "Fuel • Vehicle maintenance • Emergency transport",
                  value: "2,890$",
                  progress: 20,
                },
                {
                  title: "Staff & Administration",
                  description: "Part-time coordinator • Administrative costs",
                  value: "1,677$",
                  progress: 10,
                },
                {
                  title: "Marketing & Outreach",
                  description: "Website • Social media • Adoption events",
                  value: "500$",
                  progress: 5,
                },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg shadow-sm bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-[#333333]">{item.title}</h3>
                      <p className="text-sm text-[#666666]">{item.description}</p>
                    </div>
                    <span className="font-bold text-[#EF5350]">{item.value}</span>
                  </div>
                  <div className="w-full h-2 bg-[#E0E0E0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#EF5350]"
                      style={{ width: `${item.progress}%` }}
                      role="progressbar"
                      aria-valuenow={item.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
              <LineChart className="mr-2 h-6 w-6 text-blue-500" />
              Revenue vs Expenses Trend
            </h2>
            <div className="p-6 h-80 flex flex-col items-center justify-center rounded-lg shadow-md relative bg-white">
              <div className="text-center text-[#666666]">
                <BarChart className="h-12 w-12 mx-auto mb-2 text-blue-400" />
                <p className="font-semibold">Interactive Financial Trend Chart</p>
                <p className="text-sm">Monthly revenue and expense tracking with projections</p>
              </div>
              <span className="absolute bottom-4 right-4 bg-[#8a0e10] text-white text-xs px-2 py-1 rounded-full">
                32% profit margin this month
              </span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
              <PieChart className="mr-2 h-6 w-6 text-orange-500" />
              Expense Breakdown
            </h2>
            <div className="p-6 h-80 flex flex-col items-center justify-center rounded-lg shadow-md relative bg-white">
              <div className="text-center text-[#666666]">
                <PieChart className="h-12 w-12 mx-auto mb-2 text-orange-400" />
                <p className="font-semibold">Interactive Expense Pie Chart</p>
                <p className="text-sm">Category-wise expense distribution</p>
              </div>
              <span className="absolute bottom-4 right-4 bg-[#8a0e10] text-white text-xs px-2 py-1 rounded-full">
                Medical: 43% of expenses
              </span>
            </div>
          </section>
        </div>

        {/* Key Financial Indicators */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
            <Gauge className="mr-2 h-6 w-6 text-pink-500" />
            Key Financial Indicators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                value: "284%",
                label: "Return on Investment",
                change: "+12% vs last quarter",
                icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
              },
              {
                value: "3.2",
                label: "Months Operating Reserve",
                change: "+0.4 months",
                icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
              },
              {
                value: "52.30$",
                label: "Average Donation Size",
                change: "+3.20$ vs last month",
                icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
              },
              {
                value: "89%",
                label: "Program Expense Ratio",
                change: "2% more direct impact",
                icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
              },
              {
                value: "8,234$",
                label: "Cost Savings (Partnerships)",
                change: "+1,200$ vs last month",
                icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md text-center bg-white">
                <div className="text-4xl font-bold text-[#8a0e10] mb-2">{item.value}</div>
                <p className="text-sm text-[#333333] mb-1">{item.label}</p>
                <p className="text-xs text-[#666666] flex items-center justify-center">
                  {item.icon}
                  <span className="ml-1">{item.change}</span>
                </p>
              </div>
            ))}
            <div className="p-6 rounded-lg shadow-md text-center bg-white">
              <div className="text-4xl font-bold text-[#8a0e10] mb-2">67%</div>
              <p className="text-sm text-[#333333] mb-1">Donor Retention Rate</p>
              <p className="text-xs text-[#666666]">— Stable performance</p>
            </div>
          </div>
        </section>

        {/* Donor Analytics */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
            <Heart className="mr-2 h-6 w-6 text-red-500" />
            Donor Analytics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: "456", label: "Total Donors This Month" },
              { value: "78", label: "New Donors" },
              { value: "67%", label: "Retention Rate" },
              { value: "23", label: "Major Donors ($500+)" },
              { value: "89", label: "Monthly Recurring" },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md text-center bg-white border-2 border-[#8a0e10]/20">
                <div className="text-4xl font-bold text-[#8a0e10] mb-2">{item.value}</div>
                <p className="text-sm text-[#333333]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Reports */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
            <BarChart className="mr-2 h-6 w-6 text-purple-500" />
            Financial Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Monthly Financial Statement",
                description:
                  "Comprehensive monthly financial performance including revenue, expenses, and net surplus with variance analysis and trends.",
                icon: <FileBarChart className="h-6 w-6 text-[#8a0e10]" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Donor Impact Report",
                description:
                  "Detailed donor analytics showing contribution patterns, retention rates, and impact metrics to demonstrate value to supporters.",
                icon: <Handshake className="h-6 w-6 text-red-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Cost Per Adoption Analysis",
                description:
                  "In-depth analysis of adoption costs including medical care, housing, and administrative expenses with optimization recommendations.",
                icon: <Home className="h-6 w-6 text-green-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Grant Compliance Report",
                description:
                  "Grant funding compliance tracking with expense allocation, outcome metrics, and documentation for funding agencies.",
                icon: <ClipboardList className="h-6 w-6 text-orange-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Budget vs Actual Performance",
                description:
                  "Detailed budget variance analysis comparing planned vs actual revenue and expenses with forecasting and recommendations.",
                icon: <PiggyBank className="h-6 w-6 text-pink-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Tax-Exempt Status Report",
                description:
                  "Annual tax-exempt organization reporting including program expenses, administrative costs, and compliance documentation.",
                icon: <FileBadge className="h-6 w-6 text-blue-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Fundraising ROI Analysis",
                description:
                  "Return on investment analysis for fundraising activities including event costs, donor acquisition, and campaign effectiveness.",
                icon: <DollarSign className="h-6 w-6 text-[#8a0e10]" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Board Financial Dashboard",
                description:
                  "Executive summary for board meetings including key financial metrics, trends, and strategic recommendations for governance.",
                icon: <FilePieChart className="h-6 w-6 text-purple-500" />,
                buttons: [
                  {
                    text: "Generate Now",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Schedule",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
              {
                title: "Custom Financial Report",
                description:
                  "Build custom financial reports with specific metrics, date ranges, and categories tailored to your organization's unique needs.",
                icon: <Settings className="h-6 w-6 text-gray-500" />,
                buttons: [
                  {
                    text: "Build Custom",
                    className: "bg-[#8a0e10] text-white hover:bg-[#8a0e10]/90",
                  },
                  {
                    text: "Templates",
                    className: "bg-[#FFEB3B] text-[#333333] hover:bg-[#FFEB3B]/90 border border-gray-300",
                  },
                ],
              },
            ].map((report, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md flex flex-col justify-between bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-[#333333]">{report.title}</h3>
                  {report.icon}
                </div>
                <p className="text-sm text-[#666666] mb-4">{report.description}</p>
                <div className="flex gap-2 mt-auto">
                  {report.buttons.map((button, btnIndex) => (
                    <button key={btnIndex} className={`px-4 py-2 rounded-md text-sm font-medium ${button.className}`}>
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
