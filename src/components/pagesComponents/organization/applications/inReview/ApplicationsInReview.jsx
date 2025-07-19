import {
  AlertCircle,
  Users,
  BarChart,
  Rocket,
  Eye,
  CheckCircle,
  Clock,
  UserCheck,
  ClipboardList,
  Phone,
  FileText,
  ArrowDown,
  ArrowUp,
  Search,
} from "lucide-react"
import { cn } from "@/lib/utils" // Keep cn for utility class joining

// --- Simplified Shadcn/ui Components (embedded) ---

// Card Component
function Card({ className, ...props }) {
  return <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
}

// Button Component
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button"
  const variants = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  }
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

// Badge Component
function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  }
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

// Progress Component
function Progress({ className, value, ...props }) {
  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}

// --- End of Simplified Shadcn/ui Components ---

// Reusable Stats Card Component
function StatsCard({ title, value, description, icon: Icon, colorClass, arrowDirection }) {
  return (
    <Card className={`p-4 flex flex-col gap-2 border-l-4 ${colorClass}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="flex items-center text-sm">
        {arrowDirection === "down" && <ArrowDown className="w-4 h-4 text-red-500 mr-1" />}
        {arrowDirection === "up" && <ArrowUp className="w-4 h-4 text-green-500 mr-1" />}
        <p
          className={`text-gray-500 dark:text-gray-400 ${arrowDirection === "down" ? "text-red-500" : arrowDirection === "up" ? "text-green-500" : ""}`}
        >
          {description}
        </p>
      </div>
    </Card>
  )
}

// Reusable Application Card Component
function ApplicationCard({ name, details, type, progress, status, buttons, borderColorClass }) {
  return (
    <Card className={`p-4 flex flex-col gap-3 border-l-4 ${borderColorClass}`}>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{name}</h4>
        <Badge
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            type === "Adoption"
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : type === "Volunteer"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                : type === "Foster"
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  : ""
          }`}
        >
          {type}
        </Badge>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{details}</p>
      {progress !== undefined && (
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2 flex-1" />
          <span className="text-xs text-gray-500 dark:text-gray-400">{progress}%</span>
        </div>
      )}
      {status === "OVERDUE" && <div className="text-red-500 text-xs font-semibold uppercase">OVERDUE</div>}
      <div className="flex gap-2">
        {buttons.map((button, index) => (
          <Button key={index} variant={button.variant} size="sm" className={button.className}>
            {button.label}
          </Button>
        ))}
      </div>
    </Card>
  )
}

// Reusable Workflow Column Component
function WorkflowColumn({ title, icon: Icon, count, applications, borderColorClass }) {
  return (
    <Card className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <Badge
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            borderColorClass === "border-orange-500"
              ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
              : borderColorClass === "border-purple-500"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          }`}
        >
          {count}
        </Badge>
      </div>
      <div className="flex flex-col gap-4">
        {applications.map((app, index) => (
          <ApplicationCard key={index} {...app} borderColorClass={borderColorClass} />
        ))}
        {title === "Final Review" && (
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-md p-4 text-center text-gray-400">
            <Search className="w-6 h-6 mx-auto mb-2" />
            Drag applications here
          </div>
        )}
      </div>
    </Card>
  )
}

export default function ApplicationsInReview() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl">👀</div> {/* Using emoji for the eye icon */}
          <div>
            <h1 className="text-3xl font-bold">Applications In Review</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Applications &gt; In Review</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white">
            <AlertCircle className="w-4 h-4 mr-2" />
            Overdue Reviews (2)
          </Button>
          <Button variant="outline">
            <Users className="w-4 h-4 mr-2" />
            Assign Reviewers
          </Button>
          <Button variant="outline">
            <BarChart className="w-4 h-4 mr-2" />
            Review Report
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Rocket className="w-4 h-4 mr-2" />
            Expedite Reviews
          </Button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <StatsCard
          title="Total In Review"
          value="8"
          description="Applications being processed"
          icon={Eye}
          colorClass="border-blue-500"
          arrowDirection="down"
        />
        <StatsCard
          title="Overdue Reviews"
          value="2"
          description="Past deadline Need immediate attention"
          icon={AlertCircle}
          colorClass="border-red-500"
        />
        <StatsCard
          title="Completed Today"
          value="5"
          description="Reviews finished Great progress!"
          icon={CheckCircle}
          colorClass="border-green-500"
          arrowDirection="up"
        />
        <StatsCard
          title="Avg Review Time"
          value="2.3"
          description="Days per application 0.4 days faster"
          icon={Clock}
          colorClass="border-orange-500"
          arrowDirection="up"
        />
        <StatsCard
          title="Active Reviewers"
          value="4"
          description="Staff currently reviewing All hands on deck"
          icon={UserCheck}
          colorClass="border-blue-500"
        />
      </div>

      {/* Review Workflow Progress Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardList className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <h2 className="text-xl font-bold">Review Workflow Progress</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Track applications through review stages</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WorkflowColumn
            title="Initial Review"
            icon={ClipboardList}
            count={3}
            borderColorClass="border-orange-500"
            applications={[
              {
                name: "David Wilson",
                details: "For: Max (German Shepherd) • Assigned to: Sarah M.",
                type: "Adoption",
                progress: 65,
                buttons: [
                  { label: "Continue", variant: "default", className: "bg-orange-500 hover:bg-orange-600 text-white" },
                  { label: "View", variant: "outline" },
                ],
              },
              {
                name: "Lisa Thompson",
                details: "Transport volunteer • Assigned to: Mike R.",
                type: "Volunteer",
                progress: 30,
                buttons: [
                  { label: "Continue", variant: "default", className: "bg-orange-500 hover:bg-orange-600 text-white" },
                  { label: "View", variant: "outline" },
                ],
              },
              {
                name: "Nina Patel",
                details: "Special needs fostering • Overdue by 1 day",
                type: "Foster",
                status: "OVERDUE",
                buttons: [
                  { label: "Escalate", variant: "destructive", className: "bg-red-600 hover:bg-red-700 text-white" },
                  { label: "Reassign", variant: "outline" },
                ],
              },
            ]}
          />

          <WorkflowColumn
            title="Reference Check"
            icon={Phone}
            count={3}
            borderColorClass="border-orange-500"
            applications={[
              {
                name: "Jennifer Adams",
                details: "For: Luna (Siamese) • 2 of 3 references contacted",
                type: "Adoption",
                progress: 66, // Assuming 2/3 is approx 66%
                buttons: [
                  {
                    label: "Contact Ref",
                    variant: "default",
                    className: "bg-orange-500 hover:bg-orange-600 text-white",
                  },
                  { label: "View", variant: "outline" },
                ],
              },
              {
                name: "Robert Kim",
                details: "Event coordination • References verified",
                type: "Volunteer",
                progress: 100,
                buttons: [
                  {
                    label: "Move Forward",
                    variant: "default",
                    className: "bg-orange-500 hover:bg-orange-600 text-white",
                  },
                  { label: "View", variant: "outline" },
                ],
              },
            ]}
          />

          <WorkflowColumn
            title="Final Review"
            icon={FileText}
            count={1}
            borderColorClass="border-purple-500"
            applications={[]} // No applications initially, just the drag target
          />
        </div>
      </div>
    </div>
  )
}
