import {
  Home,
  Sun,
  Heart,
  Users,
  Truck,
  Handshake,
  Trophy,
  Rocket,
  Globe,
  BarChart,
  Target,
  Plus,
  FileText,
  Share2,
  Mail,
  Printer,
  BarChart2,
} from "lucide-react"

// Helper function for conditional class names (similar to cn from shadcn/ui)
const cn = (...classes) => classes.filter(Boolean).join(" ")

export default function SuccessMetrics() {
  // DashboardHeader equivalent
  const DashboardHeader = () => {
    const timeFilters = [
      { label: "This Week", active: false },
      { label: "This Month", active: true },
      { label: "This Quarter", active: false },
      { label: "This Year", active: false },
      { label: "All Time", active: false },
    ]

    const goals = [
      { label: "Monthly Goal", value: "89% Complete", color: "text-dashboard-green-DEFAULT" },
      { label: "Quarterly Goal", value: "76% Complete", color: "text-dashboard-orange-DEFAULT" },
      { label: "Annual Goal", value: "68% Complete", color: "text-dashboard-red-DEFAULT" },
    ]

    return (
      <header className="flex flex-col items-start justify-between gap-4 rounded-xl bg-white p-4 shadow-md md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
          {timeFilters.map((filter) => (
            <button
              key={filter.label}
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                filter.active
                  ? "bg-dashboard-green-DEFAULT text-white hover:bg-dashboard-green-DEFAULT/90"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {goals.map((goal) => (
            <div key={goal.label} className="flex flex-col items-end">
              <span className="text-gray-600">{goal.label}</span>
              <span className={cn("font-semibold", goal.color)}>{goal.value}</span>
            </div>
          ))}
        </div>
      </header>
    )
  }

  // ImpactCard equivalent
  const ImpactCard = ({ value, label, className }) => {
    return (
      <div className={cn("rounded-xl bg-white/20 text-white shadow-none backdrop-blur-sm", className)}>
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="text-4xl font-bold md:text-5xl">{value}</div>
          <p className="text-sm opacity-90">{label}</p>
        </div>
      </div>
    )
  }

  // MetricCard equivalent
  const MetricCard = ({
    title,
    icon: Icon,
    iconBgColor,
    percentage,
    percentageColor,
    metrics,
    progressLabel,
    progressValue,
    improvementText,
    improvementColor,
    progressColor, // Declare the variable here
  }) => {
    return (
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="flex flex-row items-center justify-between space-y-0 p-0 pb-4">
          <div className="text-lg font-semibold text-gray-800">{title}</div>
          <div className={cn("flex size-8 items-center justify-center rounded-md text-white", iconBgColor)}>
            <Icon className="size-5" />
          </div>
        </div>
        <div className="p-0">
          <div className={cn("mb-4 text-5xl font-bold", percentageColor)}>{percentage}</div>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-medium">{metric.label}</span>
                <span>{metric.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="mb-1 text-sm text-gray-600">{progressLabel}</p>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                style={{ transform: `translateX(-${100 - progressValue}%)` }}
                className={cn(
                  "h-full w-full flex-1 transition-all duration-500",
                  progressColor || "bg-dashboard-green-DEFAULT", // Default progress color if not specified
                )}
              ></div>
            </div>
          </div>
          <div className={cn("mt-3 flex items-center text-sm font-medium", improvementColor)}>
            <BarChart2 className="mr-1 size-4" />
            {improvementText}
          </div>
        </div>
      </div>
    )
  }

  // AchievementCard equivalent
  const AchievementCard = ({
    icon: Icon,
    iconBgColor,
    title,
    description,
    progressText,
    progressValue,
    progressColor,
  }) => {
    return (
      <div className="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-md">
        <div className={cn("mb-3 flex size-12 items-center justify-center rounded-full text-white", iconBgColor)}>
          <Icon className="size-7" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mb-3 text-sm text-gray-600">{description}</p>
        <div className="w-full">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              style={{ transform: `translateX(-${100 - progressValue}%)` }}
              className={cn("h-full w-full flex-1 transition-all duration-500", progressColor)}
            ></div>
          </div>
          <p
            className={cn(
              "mt-2 text-sm font-medium",
              progressValue === 100 ? "text-dashboard-green-DEFAULT" : "text-gray-600",
            )}
          >
            {progressText}
          </p>
        </div>
      </div>
    )
  }

  // ChartPlaceholderCard equivalent
  const ChartPlaceholderCard = ({ title, icon: Icon, description, details, footerText, footerColor }) => {
    return (
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="flex flex-row items-center space-y-0 p-0 pb-4">
          <Icon className="mr-2 size-5 text-dashboard-purple-DEFAULT" />
          <div className="text-lg font-semibold text-gray-800">{title}</div>
        </div>
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-center">
          <p className="text-base font-medium text-gray-700">{description}</p>
          <p className="text-sm text-gray-500">{details}</p>
          <p className={cn("mt-4 text-sm font-medium", footerColor)}>{footerText}</p>
        </div>
      </div>
    )
  }

  // ExportButtons equivalent
  const ExportButtons = () => {
    const exportOptions = [
      { label: "Export to Excel", icon: FileText },
      { label: "Generate Success Report", icon: FileText },
      { label: "Email to Board", icon: Mail },
      { label: "Print Dashboard", icon: Printer },
      { label: "Share Mobile Link", icon: Share2 },
    ]

    return (
      <div className="rounded-xl bg-white p-4 shadow-md">
        <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-800">
          <FileText className="mr-2 size-5 text-dashboard-blue-DEFAULT" /> Export Success Metrics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {exportOptions.map((option) => (
            <button
              key={option.label}
              className="flex h-auto flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-6 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <option.icon className="size-6 text-gray-600" />
              <span>{option.label}</span>
            </button>
          ))}
          <button className="flex h-auto flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-6 text-center text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Plus className="size-6 text-gray-600" />
            <span>Set New Goals</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dashboard-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Total Impact Section */}
        <section className="rounded-xl bg-gradient-to-br from-dashboard-green-gradientStart to-dashboard-green-gradientEnd p-6 shadow-lg">
          <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
            <Sun className="mr-2 size-6 text-yellow-300" /> Total Impact This Month
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactCard value="892" label="Lives Saved" />
            <ImpactCard value="1,247" label="Animals Rescued" />
            <ImpactCard value="67" label="Foster Placements" />
            <ImpactCard value="$87K" label="Community Value" />
            <ImpactCard value="1,847" label="Volunteer Hours" className="sm:col-span-2 lg:col-span-1" />
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Adoption Success"
            icon={Home}
            iconBgColor="bg-dashboard-green-DEFAULT"
            percentage="87%"
            percentageColor="text-dashboard-green-DEFAULT"
            metrics={[
              { label: "Successful Adoptions", value: "892 this month" },
              { label: "Return Rate", value: "4.2% (industry: 8%)" },
              { label: "Avg Time to Adoption", value: "18 days" },
              { label: "Adoption Fees", value: "$17,850" },
            ]}
            progressLabel="Success Rate Progress"
            progressValue={87}
            improvementText="+3% improvement this month"
            improvementColor="text-dashboard-green-DEFAULT"
            progressColor="bg-dashboard-green-DEFAULT" // Provide a default value here
          />
          <MetricCard
            title="Medical Success"
            icon={Heart}
            iconBgColor="bg-dashboard-red-DEFAULT"
            percentage="94%"
            percentageColor="text-dashboard-red-DEFAULT"
            metrics={[
              { label: "Treatment Success", value: "567 cases" },
              { label: "Emergency Saves", value: "89 critical cases" },
              { label: "Recovery Time", value: "12 days average" },
              { label: "Medical Costs", value: "$12,340" },
            ]}
            progressLabel="Recovery Rate"
            progressValue={94}
            improvementText="+2% improvement this month"
            improvementColor="text-dashboard-red-DEFAULT"
            progressColor="bg-dashboard-red-DEFAULT" // Provide a default value here
          />
          <MetricCard
            title="Volunteer Engagement"
            icon={Users}
            iconBgColor="bg-dashboard-orange-DEFAULT"
            percentage="89%"
            percentageColor="text-dashboard-orange-DEFAULT"
            metrics={[
              { label: "Active Volunteers", value: "234 members" },
              { label: "Retention Rate", value: "89% (12 months)" },
              { label: "Monthly Hours", value: "1,847 hours" },
              { label: "New Volunteers", value: "+12 this month" },
            ]}
            progressLabel="Engagement Score"
            progressValue={89}
            improvementText="+156 hours vs last month"
            improvementColor="text-dashboard-orange-DEFAULT"
            progressColor="bg-dashboard-orange-DEFAULT" // Provide a default value here
          />
          <MetricCard
            title="Foster Success"
            icon={Home}
            iconBgColor="bg-dashboard-purple-DEFAULT"
            percentage="92%"
            percentageColor="text-dashboard-purple-DEFAULT"
            metrics={[
              { label: "Foster Families", value: "89 active families" },
              { label: "Animals in Foster", value: "67 placements" },
              { label: "Foster-to-Adoption", value: "78% success rate" },
              { label: "Available Capacity", value: "34 homes ready" },
            ]}
            progressLabel="Foster Success Rate"
            progressValue={92}
            improvementText="+8 placements this week"
            improvementColor="text-dashboard-purple-DEFAULT"
            progressColor="bg-dashboard-purple-DEFAULT" // Provide a default value here
          />
          <MetricCard
            title="Transport Efficiency"
            icon={Truck}
            iconBgColor="bg-dashboard-blue-DEFAULT"
            percentage="92%"
            percentageColor="text-dashboard-blue-DEFAULT"
            metrics={[
              { label: "On-Time Rate", value: "92% deliveries" },
              { label: "Active Transports", value: "8 in progress" },
              { label: "Miles This Month", value: "2,347 miles" },
              { label: "Emergency Response", value: "12 min avg" },
            ]}
            progressLabel="Efficiency Score"
            progressValue={92}
            improvementText="— Consistent performance"
            improvementColor="text-gray-600"
            progressColor="bg-dashboard-blue-DEFAULT" // Provide a default value here
          />
          <MetricCard
            title="Partnership Impact"
            icon={Handshake}
            iconBgColor="bg-dashboard-orange-DEFAULT"
            percentage="$45K"
            percentageColor="text-dashboard-orange-DEFAULT"
            metrics={[
              { label: "Active Partners", value: "47 organizations" },
              { label: "Resource Sharing", value: "156 exchanges" },
              { label: "Cost Savings", value: "$8,234 saved" },
              { label: "Joint Rescues", value: "23 operations" },
            ]}
            progressLabel="Partnership Value"
            progressValue={100} // Assuming $45K is the target, so 100%
            improvementText="+12K value this month"
            improvementColor="text-dashboard-orange-DEFAULT"
            progressColor="bg-dashboard-orange-DEFAULT" // Provide a default value here
          />
        </section>

        {/* Achievements & Milestones Section */}
        <section>
          <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
            <Trophy className="mr-2 size-6 text-yellow-300" /> Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AchievementCard
              icon={Sun}
              iconBgColor="bg-dashboard-yellow-DEFAULT"
              title="Life Saver"
              description="Save 1,000 animals"
              progressText="ACHIEVED!"
              progressValue={100}
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
            <AchievementCard
              icon={Heart}
              iconBgColor="bg-dashboard-red-DEFAULT"
              title="Adoption Champion"
              description="Achieve 80% adoption rate"
              progressText="ACHIEVED!"
              progressValue={100}
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
            <AchievementCard
              icon={Plus} // Using Plus as a placeholder for the medical cross icon
              iconBgColor="bg-dashboard-purple-DEFAULT"
              title="Medical Miracle"
              description="95% medical success rate"
              progressText="94% / 95%"
              progressValue={94}
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
            <AchievementCard
              icon={Users}
              iconBgColor="bg-dashboard-gray-DEFAULT"
              title="Volunteer Army"
              description="300 active volunteers"
              progressText="234 / 300"
              progressValue={78} // 234/300 = 0.78
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
            <AchievementCard
              icon={Rocket}
              iconBgColor="bg-dashboard-blue-DEFAULT"
              title="Speed Demon"
              description="Average 15 days to adoption"
              progressText="18 days / 15 days"
              progressValue={83} // 15/18 = 0.83
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
            <AchievementCard
              icon={Globe}
              iconBgColor="bg-dashboard-orange-DEFAULT"
              title="Network Builder"
              description="50 partner organizations"
              progressText="47 / 50"
              progressValue={94} // 47/50 = 0.94
              progressColor="bg-dashboard-yellow-DEFAULT"
            />
          </div>
        </section>

        {/* Trends & Goals Charts Section */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartPlaceholderCard
            title="Success Trends Over Time"
            icon={BarChart}
            description="Interactive Multi-Line Chart"
            details="Track adoption success, medical outcomes, and volunteer engagement"
            footerText="87% average success rate"
            footerColor="text-dashboard-green-DEFAULT"
          />
          <ChartPlaceholderCard
            title="Goal Progress Tracker"
            icon={Target}
            description="Interactive Goal Visualization"
            details="Monthly, quarterly, and annual goal tracking"
            footerText="89% monthly goal complete"
            footerColor="text-dashboard-green-DEFAULT"
          />
        </section>

        {/* Export Success Metrics Section */}
        <section>
          <ExportButtons />
        </section>
      </div>
    </div>
  )
}
