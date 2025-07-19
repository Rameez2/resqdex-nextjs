import {
  Workflow,
  Users,
  Search,
  Handshake,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  FileText,
  BarChart,
} from "lucide-react"

// Internal component for a single application card
function ApplicationCard({ name, type, details, time, actions }) {
  const typeColorClass = type === "Adoption" ? "bg-emerald-100 text-emerald-800" : "bg-green-100 text-green-800"
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${typeColorClass}`}>{type}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{details}</p>
      <p className="text-xs text-gray-500 mb-4">{time}</p>
      <div className="flex gap-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className="px-4 py-2 text-sm font-medium rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}

// Internal component for a pipeline stage column
function PipelineStage({ title, icon: Icon, count, applications, isRejected = false }) {
  const countColorClass = isRejected ? "bg-red-500 text-white" : "bg-orange-500 text-white"
  const iconColorClass = isRejected ? "text-red-500" : "text-gray-600"

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
          <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        </div>
        <span className={`px-2.5 py-0.5 text-sm font-bold rounded-full ${countColorClass}`}>{count}</span>
      </div>
      <div className="space-y-4">
        {applications.map((app) => (
          <ApplicationCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  )
}

// Internal component for a quick action card
function QuickActionCard({ icon: Icon, title, description, statusText, statusColorClass }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-full bg-gray-100">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusColorClass}`}>{statusText}</span>
    </div>
  )
}

export default function Component() {
  const pipelineStages = [
    {
      id: "submitted",
      title: "Submitted",
      icon: Users,
      count: 8,
      applications: [
        {
          id: "app1",
          name: "Sarah Johnson",
          type: "Adoption",
          details: "For: Bella (Golden Retriever) • Submitted 2 hours ago",
          time: "Submitted 2 hours ago",
          actions: ["Start Review", "Contact"],
        },
        {
          id: "app2",
          name: "Mike Rodriguez",
          type: "Volunteer",
          details: "Dog walking & socialization • Submitted 1 day ago",
          time: "Submitted 1 day ago",
          actions: ["Start Review", "Contact"],
        },
      ],
    },
    {
      id: "screening",
      title: "Screening",
      icon: Search,
      count: 6,
      applications: [
        {
          id: "app3",
          name: "David Wilson",
          type: "Adoption",
          details: "For: Max (German Shepherd) • Reference check pending",
          time: "Reference check pending",
          actions: ["Continue", "Contact"],
        },
      ],
    },
    {
      id: "interview",
      title: "Interview",
      icon: Handshake,
      count: 4,
      applications: [
        {
          id: "app4",
          name: "Jennifer Adams",
          type: "Adoption",
          details: "For: Luna (Siamese) • Interview scheduled tomorrow 2PM",
          time: "Interview scheduled tomorrow 2PM",
          actions: ["Join Call", "Reschedule"],
        },
      ],
    },
    {
      id: "approval",
      title: "Approval",
      icon: CheckCircle,
      count: 3,
      applications: [
        {
          id: "app5",
          name: "Taylor Brown",
          type: "Adoption",
          details: "For: Whiskers (Tabby) • Approved - meet & greet pending",
          time: "Approved - meet & greet pending",
          actions: ["Schedule Meetup", "Send Congrats"],
        },
      ],
    },
    {
      id: "rejected",
      title: "Rejected",
      icon: XCircle,
      count: 2,
      isRejected: true,
      applications: [
        {
          id: "app6",
          name: "Chris Davis",
          type: "Adoption",
          details: "Housing not suitable • Feedback sent - may reapply",
          time: "Feedback sent - may reapply",
          actions: ["Follow Up", "Archive"],
        },
      ],
    },
  ]

  const quickActions = [
    {
      id: "qa1",
      icon: Mail,
      title: "Bulk Communications",
      description: "Send emails to multiple applicants at once with custom templates and scheduling",
      statusText: "12 pending",
      statusColorClass: "bg-orange-100 text-orange-800",
    },
    {
      id: "qa2",
      icon: Calendar,
      title: "Schedule Interviews",
      description: "Batch interview scheduling with calendar integration and automated reminders",
      statusText: "4 ready",
      statusColorClass: "bg-orange-100 text-orange-800",
    },
    {
      id: "qa3",
      icon: CheckCircle,
      title: "Reference Checks",
      description: "Automated reference verification with email templates and tracking",
      statusText: "6 completed",
      statusColorClass: "bg-emerald-100 text-emerald-800",
    },
    {
      id: "qa4",
      icon: Search,
      title: "Background Checks",
      description: "Integrated screening services with instant results and compliance tracking",
      statusText: "3 urgent",
      statusColorClass: "bg-red-100 text-red-800",
    },
    {
      id: "qa5",
      icon: FileText,
      title: "Template Responses",
      description: "Pre-written approval, rejection, and follow-up letters with personalization",
      statusText: "15 templates",
      statusColorClass: "bg-blue-100 text-blue-800",
    },
    {
      id: "qa6",
      icon: BarChart,
      title: "Application Reports",
      description: "Performance analytics, success rates, and detailed exports for stakeholders",
      statusText: "Generate Now",
      statusColorClass: "bg-red-100 text-red-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Workflow className="w-8 h-8 text-gray-700" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Application Processing Pipeline</h1>
        </div>
        <p className="text-sm text-gray-600">Drag applications between stages • Real-time updates</p>
      </header>

      {/* Pipeline Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pipelineStages.map((stage) => (
            <PipelineStage key={stage.id} {...stage} />
          ))}
        </div>
      </section>

      {/* Quick Actions Panel */}
      <section className="mt-12">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-gray-500">{"<"}</span> Quick Actions Panel{" "}
            <span className="text-gray-500">{">"}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {quickActions.map((action) => (
            <QuickActionCard key={action.id} {...action} />
          ))}
        </div>
      </section>
    </div>
  )
}
