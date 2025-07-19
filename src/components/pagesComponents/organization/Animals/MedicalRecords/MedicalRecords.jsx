// Helper component for the Dashboard Header
function DashboardHeader() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          {/* Replaced Image with standard img tag */}
          <img src="/placeholder.svg?height=32&width=32" alt="Medical Cross" width={32} height={32} />
          <div>
            <h1 className="text-2xl font-bold">Medical Records</h1>
            <p className="text-sm text-gray-500">Animals &gt; Medical Records</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* Replaced Button with standard button tag */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
            <span className="w-4 h-4 mr-2">❤️</span> {/* Replaced Heart icon */}
            Request Medical Donations
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
            <span className="w-4 h-4 mr-2">🛡️</span> {/* Replaced ShieldCheck icon */}
            Emergency Protocol
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
            <span className="w-4 h-4 mr-2">📄</span> {/* Replaced FileText icon */}
            Health Report
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
            <span className="w-4 h-4 mr-2">➕</span> {/* Replaced Plus icon */}
            Add Medical Entry
          </button>
        </div>
      </div>
      {/* Replaced Separator with div */}
      <div className="my-4 h-[1px] bg-gray-200" />
    </div>
  )
}

// Helper component for a single summary card
function SummaryCard({ iconText, value, description, subDescription, colorClass }) {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 ${colorClass} min-h-[120px] min-w-[180px] flex-grow-0 flex-shrink-0`}
    >
      <div className="p-3 rounded-full bg-gray-100 text-gray-700">{iconText}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-600">{description}</div>
        {subDescription && <div className="text-xs text-gray-500">{subDescription}</div>}
      </div>
    </div>
  )
}

// Helper component for the list of summary cards
function SummaryCards() {
  const summaryCardsData = [
    {
      iconText: "!", // Represents AlertCircle
      value: "6",
      description: "Urgent Medical Items",
      subDescription: "Need immediate attention",
      colorClass: "border-l-4 border-red-500",
    },
    {
      iconText: "📅", // Represents Calendar
      value: "8",
      description: "Upcoming Appointments",
      subDescription: "This week",
      colorClass: "border-l-4 border-blue-500",
    },
    {
      iconText: "💉", // Represents Syringe
      value: "4",
      description: "Vaccinations Due",
      subDescription: "Next 7 days",
      colorClass: "border-l-4 border-orange-500",
    },
    {
      iconText: "✅", // Represents CheckCircle
      value: "15",
      description: "Healthy Animals",
      subDescription: "Up to date on care",
      colorClass: "border-l-4 border-green-500",
    },
    {
      iconText: "❤️", // Represents Heart
      value: "$1,920",
      description: "Medical Donations",
      subDescription: "67% coverage this month",
      colorClass: "border-l-4 border-purple-500",
    },
    {
      iconText: "💰", // Represents Wallet
      value: "$2,847",
      description: "Medical Expenses",
      subDescription: "$927 shortfall",
      colorClass: "border-l-4 border-yellow-500",
    },
    // Duplicating the existing cards to make 12 total for demonstration
    {
      iconText: "!",
      value: "6",
      description: "Urgent Medical Items",
      subDescription: "Need immediate attention",
      colorClass: "border-l-4 border-red-500",
    },
    {
      iconText: "📅",
      value: "8",
      description: "Upcoming Appointments",
      subDescription: "This week",
      colorClass: "border-l-4 border-blue-500",
    },
    {
      iconText: "💉",
      value: "4",
      description: "Vaccinations Due",
      subDescription: "Next 7 days",
      colorClass: "border-l-4 border-orange-500",
    },
    {
      iconText: "✅",
      value: "15",
      description: "Healthy Animals",
      subDescription: "Up to date on care",
      colorClass: "border-l-4 border-green-500",
    },
    {
      iconText: "❤️",
      value: "$1,920",
      description: "Medical Donations",
      subDescription: "67% coverage this month",
      colorClass: "border-l-4 border-purple-500",
    },
    {
      iconText: "💰",
      value: "$2,847",
      description: "Medical Expenses",
      subDescription: "$927 shortfall",
      colorClass: "border-l-4 border-yellow-500",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {summaryCardsData.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </div>
  )
}

// Helper component for a single pet alert item
function PetAlertItem({
  petName,
  breed,
  alertDescription,
  timeAgo,
  actionButtonText,
  actionButtonClass,
  backgroundColor,
  petIconQuery,
}) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-md ${backgroundColor}`}>
      <div className="flex items-center gap-3">
        {/* Replaced Image with standard img tag */}
        <img
          src={`/placeholder.svg?height=40&width=40&query=${petIconQuery}`}
          alt={`${petName} icon`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {petName} - {breed}
          </p>
          <p className="text-sm text-gray-700">{alertDescription}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {/* Replaced Button with standard button tag */}
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${actionButtonClass}`}
        >
          {actionButtonText}
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
          View Record
        </button>
      </div>
    </div>
  )
}

// Helper component for the Urgent Medical Alerts section
function UrgentMedicalAlerts() {
  const alerts = [
    {
      petName: "Max",
      breed: "German Shepherd",
      alertDescription: "Vaccination overdue by 3 days - Requires immediate attention",
      timeAgo: "2 hours ago",
      actionButtonText: "Schedule Now",
      actionButtonClass: "bg-red-500 hover:bg-red-600 text-white",
      backgroundColor: "bg-red-50",
      petIconQuery: "dog icon",
    },
    {
      petName: "Luna",
      breed: "Siamese Mix",
      alertDescription: "Medication reminder - Evening dose due in 1 hour",
      timeAgo: "30 minutes ago",
      actionButtonText: "Mark Given",
      actionButtonClass: "bg-orange-500 hover:bg-orange-600 text-white",
      backgroundColor: "bg-orange-50",
      petIconQuery: "cat icon",
    },
    {
      petName: "Buddy",
      breed: "Pit Bull Mix",
      alertDescription: "Post-surgery check required - Wound healing assessment",
      timeAgo: "1 hour ago",
      actionButtonText: "Schedule Check",
      actionButtonClass: "bg-blue-500 hover:bg-blue-600 text-white",
      backgroundColor: "bg-blue-50",
      petIconQuery: "dog icon",
    },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-6 h-6 text-red-500">❗</span> {/* Replaced AlertCircle icon */}
          Urgent Medical Alerts
        </h2>
        {/* Replaced Button with standard button tag */}
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
          Mark All Read
        </button>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <PetAlertItem key={index} {...alert} />
        ))}
      </div>
    </div>
  )
}

// Helper component for a single pet profile card
function PetProfileCard({
  petName,
  breed,
  age,
  id,
  statusTag,
  statusColor,
  petIconQuery,
  dataPoints,
  recentActivity,
  upcomingCare,
  buttons,
}) {
  const borderColorClass = {
    red: "border-red-500",
    orange: "border-orange-500",
    green: "border-green-500",
    blue: "border-blue-500",
  }[statusColor]

  const badgeColorClass = {
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    green: "bg-green-500 text-white",
    blue: "bg-blue-500 text-white",
  }[statusColor]

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-sm border-t-4 ${borderColorClass} w-full max-w-sm md:w-[380px] min-h-[450px] flex flex-col`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Replaced Image with standard img tag */}
          <img
            src={`/placeholder.svg?height=32&width=32&query=${petIconQuery}`}
            alt={`${petName} icon`}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">{petName}</h3>
            <p className="text-sm text-gray-500">
              {breed} &bull; {age} &bull; {id}
            </p>
          </div>
        </div>
        {/* Replaced Badge with div */}
        <div className={`${badgeColorClass} px-3 py-1 text-xs font-semibold rounded-full`}>{statusTag}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {dataPoints.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-xl font-bold">{item.value}</p>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      {recentActivity.length > 0 && (
        <>
          {/* Replaced Separator with div */}
          <div className="my-4 h-[1px] bg-gray-200" />
          <h4 className="text-md font-semibold mb-2">Recent Activity</h4>
          <ul className="space-y-1 text-sm text-gray-700 mb-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="flex justify-between">
                <span>{activity.description}</span>
                <span className="text-gray-500">{activity.date}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {upcomingCare.length > 0 && (
        <>
          {/* Replaced Separator with div */}
          <div className="my-4 h-[1px] bg-gray-200" />
          <h4 className="text-md font-semibold mb-2">Upcoming Care</h4>
          <ul className="space-y-1 text-sm text-gray-700 mb-4">
            {upcomingCare.map((care, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{care.description}</span>
                {care.status && (
                  <div
                    className={`${care.color || "bg-gray-200 text-gray-800"} px-2 py-1 text-xs font-medium rounded-full`}
                  >
                    {care.status}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {buttons.length > 0 && (
        <>
          {/* Replaced Separator with div */}
          <div className="my-4 mt-auto h-[1px] bg-gray-200" /> {/* mt-auto pushes buttons to bottom */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex-1 ${button.className}`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Main MedicalRecords component
export default function MedicalRecords() {
  const maxProfileData = {
    petName: "Max",
    breed: "German Shepherd",
    age: "5 years",
    id: "#A003",
    statusTag: "URGENT",
    statusColor: "red",
    petIconQuery: "dog icon",
    dataPoints: [
      { label: "Days Overdue", value: "3" },
      { label: "Total Costs", value: "$347" },
      { label: "Donations Raised", value: "$120" },
      { label: "Still Needed", value: "$227" },
    ],
    recentActivity: [
      { description: "Blood work completed", date: "Oct 15" },
      { description: "Heartworm prevention", date: "Oct 1" },
    ],
    upcomingCare: [
      { description: "Rabies vaccination", status: "3 days overdue", color: "bg-red-500 text-white" },
      { description: "Annual checkup", status: "Due tomorrow", color: "bg-orange-400 text-white" },
    ],
    buttons: [
      {
        text: "Full Record",
        variant: "outline",
        className: "border border-gray-300 hover:bg-gray-50 bg-transparent text-gray-800",
      },
      { text: "Schedule Now", variant: "default", className: "bg-red-500 hover:bg-red-600 text-white" },
      { text: "Donate for Max", variant: "default", className: "bg-orange-500 hover:bg-orange-600 text-white" },
    ],
  }

  const lunaProfileData = {
    petName: "Luna",
    breed: "Siamese Mix",
    age: "4 years",
    id: "#A005",
    statusTag: "MEDICATION",
    statusColor: "orange",
    petIconQuery: "cat icon",
    dataPoints: [
      { label: "Daily Meds", value: "2x" },
      { label: "Total Costs", value: "$189" },
      { label: "Fully Funded", value: "$189" },
      { label: "Coverage", value: "✅" },
    ],
    recentActivity: [], // No recent activity shown in the image
    upcomingCare: [], // No upcoming care shown in the image
    buttons: [], // No buttons shown in the image
  }

  // Duplicate the data for demonstration
  const petCards = [
    maxProfileData,
    lunaProfileData,
    {
      ...maxProfileData,
      petName: "Buddy",
      id: "#A006",
      petIconQuery: "pitbull icon",
      statusTag: "HEALTHY",
      statusColor: "green",
      upcomingCare: [],
      buttons: [
        {
          text: "Full Record",
          variant: "outline",
          className: "border border-gray-300 hover:bg-gray-50 bg-transparent text-gray-800",
        },
        { text: "View Health", variant: "default", className: "bg-green-500 hover:bg-green-600 text-white" },
      ],
    },
    {
      ...lunaProfileData,
      petName: "Daisy",
      id: "#A007",
      petIconQuery: "golden retriever icon",
      statusTag: "VACCINE DUE",
      statusColor: "blue",
      dataPoints: [
        { label: "Next Vaccine", value: "Oct 20" },
        { label: "Last Visit", value: "Sep 1" },
      ],
      buttons: [
        {
          text: "Full Record",
          variant: "outline",
          className: "border border-gray-300 hover:bg-gray-50 bg-transparent text-gray-800",
        },
        { text: "Schedule Vaccine", variant: "default", className: "bg-blue-500 hover:bg-blue-600 text-white" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <DashboardHeader />
      <SummaryCards />
      <UrgentMedicalAlerts />

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {petCards.map((data, index) => (
          <PetProfileCard key={index} {...data} />
        ))}
      </div>
    </div>
  )
}
