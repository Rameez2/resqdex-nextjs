import Image from "next/image"

import {
  HandHelping,
  MessageSquare,
  Bookmark,
  Repeat,
  ShoppingCart,
  Calendar,
  ImageIcon,
  Briefcase,
  Info,
  Package,
  Zap,
  Eye,
  Activity,
  Folder,
  Sparkles,
  Plus,
  Search,
  Utensils,
  Pill,
  Box,
  ToyBrick,
  SprayCan,
  Bed,
} from "lucide-react"

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn utility function (moved from @/lib/utils)
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// DashboardStats Component
function StatCard({ value, label, change, changeType }) {
  return (
    <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm flex-1">
      <div className="p-4">
        <div className="text-3xl font-bold text-v0-teal">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
        <div
          className={cn(
            "mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium",
            changeType === "positive" ? "bg-v0-light-blue text-blue-700" : "bg-red-100 text-red-700",
          )}
        >
          {change}
        </div>
      </div>
    </div>
  )
}

function DashboardStats() {
  const stats = [
    { value: "234", label: "Active Listings", change: "+18 this week", changeType: "positive" },
    { value: "$87K", label: "Total Value Available", change: "+$12K this month", changeType: "positive" },
    { value: "156", label: "Successful Exchanges", change: "+23 this month", changeType: "positive" },
    { value: "47", label: "Organizations Participating", change: "+3 new this month", changeType: "positive" },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

// MarketplaceFilters Component
function MarketplaceFilters() {
  return (
    <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="mb-4 flex items-center gap-2 text-v0-teal">
        <Package className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Rescue Supply Marketplace</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Simplified Selects to basic HTML select for demonstration */}
        <div className="relative">
          <select className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            <option value="">All Categories</option>
            <option value="food">Food</option>
            <option value="medical">Medical</option>
          </select>
        </div>
        <div className="relative">
          <select className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            <option value="">All Types</option>
            <option value="needed">Needed</option>
            <option value="available">Available</option>
          </select>
        </div>
        <div className="relative">
          <select className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            <option value="">All Locations</option>
            <option value="austin">Austin, TX</option>
          </select>
        </div>
        <div className="relative">
          <select className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            <option value="">All Conditions</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div className="relative">
          <select className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            <option value="">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search supplies, organizations, or specific items..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
          />
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-v0-teal hover:bg-v0-teal/90">
          <Plus className="mr-2 h-4 w-4" /> Post New Listing
        </button>
      </div>
    </div>
  )
}

// ListingCard Component
function ListingCard({
  type,
  title,
  postedBy,
  statusBadge,
  imageSrc,
  imageAlt,
  details,
  description,
  tags,
  priceBadge,
  actionButtons,
}) {
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "URGENT NEED":
        return "bg-v0-red-badge text-red-700"
      case "AVAILABLE":
        return "bg-v0-green-badge text-green-700"
      case "FEATURED TRADE":
        return "bg-v0-orange-badge text-orange-700"
      case "SERVICE":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-v0-teal">{title}</h3>
            <p className="text-sm text-gray-500">Posted by {postedBy}</p>
          </div>
          {/* Status badge always at top right */}
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 absolute right-4 top-4 rounded-sm px-2 py-1 text-xs font-medium",
              getStatusBadgeColor(statusBadge),
            )}
          >
            {statusBadge}
          </span>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            {/* Price badge overlay on image */}
            {priceBadge && (
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 absolute right-1 top-1 rounded-sm px-2 py-1 text-xs font-medium",
                  priceBadge === "FREE" ? "bg-v0-teal text-white" : "bg-green-500 text-white",
                )}
              >
                {priceBadge}
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
              {details.map((detail, index) => (
                <div key={index}>
                  <span className="font-medium text-gray-600">{detail.label}:</span>{" "}
                  <span className="text-gray-800">{detail.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-end gap-2">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex items-center gap-1",
                button.className,
                button.variant === "default" &&
                  button.label === "Contact" &&
                  "bg-v0-blue-button hover:bg-v0-blue-button/90",
                button.variant === "default" &&
                  (button.label === "I Can Help" ||
                    button.label === "Reserve" ||
                    button.label === "Propose Trade" ||
                    button.label === "Purchase" ||
                    button.label === "Book Session") &&
                  "bg-v0-green-button hover:bg-v0-green-button/90",
                button.variant === "default" &&
                  (button.label === "Details" || button.label === "More Photos" || button.label === "Portfolio") &&
                  "bg-v0-gray-button hover:bg-v0-gray-button/90",
              )}
            >
              <button.icon className="h-4 w-4" />
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Quick Actions */}
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-base text-v0-teal">
            <Zap className="h-4 w-4" /> Quick Actions
          </h2>
        </div>
        <div className="p-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-center">
          <Package className="mb-2 h-8 w-8 text-gray-400" />
          <p className="font-semibold text-v0-teal">Post New Listing</p>
          <p className="text-sm text-gray-500">Share supplies or request items</p>
          <div className="mt-4 flex gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-v0-green-button hover:bg-v0-green-button/90">
              <Plus className="mr-2 h-4 w-4" /> Post Need
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-v0-blue-button text-v0-blue-button hover:bg-v0-blue-button/10 bg-transparent">
              <MessageSquare className="mr-2 h-4 w-4" /> My Listings
            </button>
          </div>
        </div>
      </div>

      {/* My Watchlist */}
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-base text-v0-teal">
            <Eye className="h-4 w-4" /> My Watchlist
          </h2>
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Kitten Supplies"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Kitten Supplies</p>
              <p className="text-xs text-gray-500">2 new matches found</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Transport Services"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Transport Services</p>
              <p className="text-xs text-gray-500">2 providers available</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Large Breed Dog Food"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Large Breed Dog Food</p>
              <p className="text-xs text-gray-500">1 new listing today</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Large Dog Crates"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Large Dog Crates</p>
              <p className="text-xs text-gray-500">Watching for deals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-base text-v0-teal">
            <Activity className="h-4 w-4" /> Recent Activity
          </h2>
        </div>
        <div className="p-6 space-y-3 text-sm text-gray-700">
          <p>
            Forever Friends Rescue posted urgent kitten formula need{" "}
            <span className="text-xs text-gray-500">2 hours ago</span>
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            Austin Animal Center shared 8 bags of dog food <span className="text-xs text-gray-500">4 hours ago</span>
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            Emergency Vet offered crates for trade <span className="text-xs text-gray-500">6 hours ago</span>
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            Your listing "Cat toys bulk lot" was reserved <span className="text-xs text-gray-500">8 hours ago</span>
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            Round Rock Rescue posted enrichment toys <span className="text-xs text-gray-500">1 day ago</span>
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            Mike J. offered free photography services <span className="text-xs text-gray-500">1 day ago</span>
          </p>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-base text-v0-teal">
            <Folder className="h-4 w-4" /> Popular Categories
          </h2>
        </div>
        <div className="p-6 grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <Utensils className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Food (47)</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <Pill className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Medical (23)</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <Box className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Crates (18)</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <ToyBrick className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Toys (34)</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <SprayCan className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Cleaning (12)</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-gray-50 p-3 text-center">
            <Bed className="mb-1 h-6 w-6 text-v0-teal" />
            <p className="text-sm font-medium">Bedding (15)</p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-base text-v0-teal">
            <Sparkles className="h-4 w-4" /> Success Stories
          </h2>
        </div>
        <div className="p-6 space-y-3 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-v0-teal">Emergency Save!</span> Kitten formula shared by Austin Vet
            saved 8 orphaned kittens needing round-the-clock care.
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            <span className="font-semibold text-v0-teal">$500 Saved!</span> Forever Friends got premium dog food for
            free, saving budget for medical care.
          </p>
          <div className="shrink-0 bg-border h-[1px] w-full" />
          <p>
            <span className="font-semibold text-v0-teal">Perfect Match!</span> Transport crates traded for surgical
            supplies - both organizations got exactly what they needed.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default function SupplyExchange() {
  return (
    <div className="min-h-screen bg-v0-teal p-6">
      <main className="mx-auto max-w-7xl space-y-6">
        {/* Dashboard Stats */}
        <DashboardStats />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Marketplace Filters */}
            <MarketplaceFilters />

            {/* Current Listings Section */}
            <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="mb-4 flex items-center gap-2 text-v0-teal">
                <Package className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Current Listings</h2>
              </div>
              <div className="space-y-6">
                {/* Needed Listing */}
                <ListingCard
                  type="needed"
                  title="NEEDED: Kitten Formula & Feeding Supplies"
                  postedBy="Forever Friends Rescue"
                  statusBadge="URGENT NEED"
                  imageSrc="/placeholder.svg?height=96&width=96"
                  imageAlt="Kitten formula and bottle"
                  details={[
                    { label: "Quantity", value: "6 cans formula + bottles" },
                    { label: "Budget", value: "$120 max" },
                    { label: "Urgency", value: "Within 12 hours" },
                  ]}
                  description="Emergency intake of 8 orphaned kittens (2-3 weeks old). Need kitten milk replacer, bottles, and feeding syringes immediately. Kittens are healthy but require round-the-clock feeding."
                  tags={["Kittens", "Formula", "Emergency", "Will Pay", "Will Trade"]}
                  actionButtons={[
                    {
                      label: "I Can Help",
                      icon: HandHelping,
                      variant: null,
                      className: "bg-v0-green-button hover:bg-v0-green-button/90",
                    },
                    {
                      label: "Contact",
                      icon: MessageSquare,
                      variant: null,
                      className: "bg-v0-blue-button hover:bg-v0-blue-button/90",
                    },
                    {
                      label: "Details",
                      icon: Info,
                      variant: null,
                      className: "bg-v0-gray-button hover:bg-v0-gray-button/90",
                    },
                  ]}
                />

                {/* Premium Dog Food Listing */}
                <ListingCard
                  type="premium"
                  title="Premium Dog Food - Large Breed"
                  postedBy="Austin Animal Center"
                  statusBadge="AVAILABLE"
                  imageSrc="/placeholder.svg?height=96&width=96"
                  imageAlt="Bag of dog food"
                  details={[
                    { label: "Quantity", value: "8 bags (50 lbs each)" },
                    { label: "Expiration", value: "December 2025" },
                    { label: "Pickup", value: "Austin, TX" },
                  ]}
                  description="Donated premium large breed dog food. Still sealed, excellent condition. Perfect for German Shepherds, Labs, etc. Must pick up by end of week."
                  tags={["Dogs", "Large Breed", "Excellent Condition", "Pickup Only", "Expires Dec 2025"]}
                  priceBadge="FREE"
                  actionButtons={[
                    {
                      label: "Reserve",
                      icon: Bookmark,
                      variant: null,
                      className: "bg-v0-green-button hover:bg-v0-green-button/90",
                    },
                    {
                      label: "Contact",
                      icon: MessageSquare,
                      variant: null,
                      className: "bg-v0-blue-button hover:bg-v0-blue-button/90",
                    },
                    {
                      label: "Details",
                      icon: Info,
                      variant: null,
                      className: "bg-v0-gray-button hover:bg-v0-gray-button/90",
                    },
                  ]}
                />

                {/* Large Dog Crates Listing */}
                <ListingCard
                  type="trade"
                  title="Large Dog Crates (4 units) + Transport Carriers"
                  postedBy="Emergency Vet Clinic"
                  statusBadge="FEATURED TRADE"
                  imageSrc="/placeholder.svg?height=96&width=96"
                  imageAlt="Dog crate"
                  details={[
                    { label: "Quantity", value: "4 large + 6 carriers" },
                    { label: "Trade For", value: "Cat medical supplies" },
                    { label: "Location", value: "Austin, TX" },
                  ]}
                  description="4 large dog crates (excellent condition) + 6 cat transport carriers. Looking to trade for cat medical supplies, IV fluids, or cat-specific equipment. Value ~$800."
                  tags={["Dogs", "Cats", "Crates", "Excellent Condition", "High Value", "Will Deliver"]}
                  actionButtons={[
                    {
                      label: "Propose Trade",
                      icon: Repeat,
                      variant: null,
                      className: "bg-v0-green-button hover:bg-v0-green-button/90",
                    },
                    {
                      label: "Contact",
                      icon: MessageSquare,
                      variant: null,
                      className: "bg-v0-blue-button hover:bg-v0-blue-button/90",
                    },
                    {
                      label: "Details",
                      icon: Info,
                      variant: null,
                      className: "bg-v0-gray-button hover:bg-v0-gray-button/90",
                    },
                  ]}
                />

                {/* Enrichment Toys Listing */}
                <ListingCard
                  type="enrichment"
                  title="Enrichment Toys & Puzzle Feeders (Mixed Lot)"
                  postedBy="Round Rock Rescue"
                  statusBadge="AVAILABLE"
                  imageSrc="/placeholder.svg?height=96&width=96"
                  imageAlt="Dog toys"
                  details={[
                    { label: "Quantity", value: "25+ items" },
                    { label: "Retail Value", value: "$200+" },
                    { label: "Shipping", value: "Available" },
                  ]}
                  description="Large collection of dog and cat enrichment toys, puzzle feeders, and interactive toys. All sanitized and in good working condition. Great for behavioral enrichment programs."
                  tags={["Dogs", "Cats", "Enrichment", "Good Condition", "Bulk Lot", "Ships Nationwide"]}
                  priceBadge="$75"
                  actionButtons={[
                    {
                      label: "Purchase",
                      icon: ShoppingCart,
                      variant: null,
                      className: "bg-v0-green-button hover:bg-v0-green-button/90",
                    },
                    {
                      label: "Contact",
                      icon: MessageSquare,
                      variant: null,
                      className: "bg-v0-blue-button hover:bg-v0-blue-button/90",
                    },
                    {
                      label: "More Photos",
                      icon: ImageIcon,
                      variant: null,
                      className: "bg-v0-gray-button hover:bg-v0-gray-button/90",
                    },
                  ]}
                />

                {/* Professional Photography Services Listing */}
                <ListingCard
                  type="service"
                  title="Professional Photography Services"
                  postedBy="Volunteer Photographer Mike J."
                  statusBadge="SERVICE"
                  imageSrc="/placeholder.svg?height=96&width=96"
                  imageAlt="Camera"
                  details={[
                    { label: "Availability", value: "Weekends" },
                    { label: "Travel Range", value: "50 miles Austin" },
                    { label: "Experience", value: "3+ years" },
                  ]}
                  description="Professional animal photographer offering free photo sessions for adoptable animals. Specializing in capturing personality for social media and adoption profiles."
                  tags={["Photography", "Adoption Photos", "Social Media", "Professional", "Weekend Availability"]}
                  priceBadge="FREE"
                  actionButtons={[
                    {
                      label: "Book Session",
                      icon: Calendar,
                      variant: null,
                      className: "bg-v0-green-button hover:bg-v0-green-button/90",
                    },
                    {
                      label: "Contact",
                      icon: MessageSquare,
                      variant: null,
                      className: "bg-v0-blue-button hover:bg-v0-blue-button/90",
                    },
                    {
                      label: "Portfolio",
                      icon: Briefcase,
                      variant: null,
                      className: "bg-v0-gray-button hover:bg-v0-gray-button/90",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
