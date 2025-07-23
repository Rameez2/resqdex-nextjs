"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Truck,
  CalendarDays,
  Users,
  PhoneCall,
  MapPin,
  BellRing,
  BarChart,
  ArrowRight,
  CircleDot,
  Clock,
  Ruler,
  Plus,
} from "lucide-react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn utility function moved directly into this file
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function TransportLogistics() {
  const [activePriority, setActivePriority] = useState("standard")
  const [activeTab, setActiveTab] = useState("active")

  const handlePriorityClick = (priority) => {
    setActivePriority(priority)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-resq-green to-resq-dark-green text-resq-text-light">
      <div className="container mx-auto p-5 lg:p-8">
        {/* Header Section */}
        <div className="mb-6 p-6 lg:p-8 shadow-xl rounded-2xl bg-white">
          <div className="text-sm text-resq-text-medium mb-2">
            <Link href="#" className="text-resq-green hover:underline">
              Dashboard
            </Link>{" "}
            {">"} Transport & Logistics
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-resq-text-dark mb-3">Transport & Logistics</h1>
          <p className="text-base lg:text-lg text-resq-text-medium mb-8">
            Coordinate animal transportation, manage drivers, and track real-time logistics
          </p>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-resq-text-dark mb-2">8</div>
              <div className="p-0">
                <div className="text-sm text-resq-text-medium mb-1">Active Transports</div>
                <div className="text-xs font-semibold text-resq-orange">2 arriving today</div>
              </div>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-resq-red mb-2 animate-pulse">3</div>
              <div className="p-0">
                <div className="text-sm text-resq-text-medium mb-1">Emergency Requests</div>
                <div className="text-xs font-semibold text-resq-red">Immediate attention needed</div>
              </div>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-resq-text-dark mb-2">12</div>
              <div className="p-0">
                <div className="text-sm text-resq-text-medium mb-1">Available Drivers</div>
                <div className="text-xs font-semibold text-resq-orange">Ready for assignments</div>
              </div>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-resq-text-dark mb-2">347</div>
              <div className="p-0">
                <div className="text-sm text-resq-text-medium mb-1">Miles This Week</div>
                <div className="text-xs font-semibold text-resq-orange">+23% vs last week</div>
              </div>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-resq-text-dark mb-2">94%</div>
              <div className="p-0">
                <div className="text-sm text-resq-text-medium mb-1">On-Time Rate</div>
                <div className="text-xs font-semibold text-resq-orange">Excellent performance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          {/* Transport Management Section */}
          <div className="p-6 lg:p-8 shadow-xl rounded-2xl bg-white">
            <h2 className="text-2xl font-semibold text-resq-text-dark mb-6">Transport Management</h2>

            <div className="w-full">
              <div className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-0 bg-transparent border-b-2 border-resq-border rounded-none">
                <button
                  onClick={() => setActiveTab("active")}
                  className={cn(
                    "py-3 px-4 text-sm font-semibold text-resq-text-medium transition-all duration-200",
                    activeTab === "active"
                      ? "text-resq-green border-b-2 border-resq-green bg-resq-light-bg rounded-t-lg rounded-b-none"
                      : "hover:text-resq-green hover:bg-resq-light-bg",
                  )}
                >
                  Active Transports
                </button>
                <button
                  onClick={() => setActiveTab("scheduled")}
                  className={cn(
                    "py-3 px-4 text-sm font-semibold text-resq-text-medium transition-all duration-200",
                    activeTab === "scheduled"
                      ? "text-resq-green border-b-2 border-resq-green bg-resq-light-bg rounded-t-lg rounded-b-none"
                      : "hover:text-resq-green hover:bg-resq-light-bg",
                  )}
                >
                  Scheduled
                </button>
                <button
                  onClick={() => setActiveTab("request")}
                  className={cn(
                    "py-3 px-4 text-sm font-semibold text-resq-text-medium transition-all duration-200",
                    activeTab === "request"
                      ? "text-resq-green border-b-2 border-resq-green bg-resq-light-bg rounded-t-lg rounded-b-none"
                      : "hover:text-resq-green hover:bg-resq-light-bg",
                  )}
                >
                  Request Transport
                </button>
                <button
                  onClick={() => setActiveTab("routes")}
                  className={cn(
                    "py-3 px-4 text-sm font-semibold text-resq-text-medium transition-all duration-200",
                    activeTab === "routes"
                      ? "text-resq-green border-b-2 border-resq-green bg-resq-light-bg rounded-t-lg rounded-b-none"
                      : "hover:text-resq-green hover:bg-resq-light-bg",
                  )}
                >
                  Route Planning
                </button>
              </div>

              {/* Active Transports Tab Content */}
              {activeTab === "active" && (
                <div className="pt-6">
                  <div className="space-y-4">
                    {/* Transport Item 1 */}
                    <div className="p-5 rounded-xl border border-resq-border bg-resq-light-bg hover:border-resq-green hover:shadow-md transition-all duration-200">
                      <div className="flex flex-row items-center justify-between p-0 mb-4">
                        <div className="text-lg font-bold text-resq-text-dark">Transport #T-2024-034</div>
                        <span className="bg-resq-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-0">
                        <div className="flex items-center gap-3 mb-4 font-semibold text-resq-text-dark">
                          <span>Houston Rescue</span>
                          <ArrowRight className="h-5 w-5 text-resq-green" />
                          <span>Dallas Forever Homes</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Driver</div>
                            <div className="font-semibold text-resq-text-dark">Sarah Martinez</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">ETA</div>
                            <div className="font-semibold text-resq-text-dark">2:30 PM</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Distance</div>
                            <div className="font-semibold text-resq-text-dark">45 miles left</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mb-4">
                          <div className="font-semibold text-resq-text-dark mb-2">Animals (3):</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Bella - Golden Retriever
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Max - German Shepherd
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Luna - Siamese
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-resq-green hover:bg-resq-dark-green text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Track Live
                          </button>
                          <button className="bg-resq-orange hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Contact Driver
                          </button>
                          <button className="border-2 border-resq-green text-resq-green hover:bg-resq-green hover:text-white text-xs font-semibold px-4 py-2 rounded-md bg-transparent">
                            Update Status
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Transport Item 2 (Emergency) */}
                    <div className="p-5 rounded-xl border border-resq-red bg-resq-light-bg hover:shadow-md transition-all duration-200">
                      <div className="flex flex-row items-center justify-between p-0 mb-4">
                        <div className="text-lg font-bold text-resq-text-dark">Transport #T-2024-035</div>
                        <span className="bg-resq-red text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                          Emergency
                        </span>
                      </div>
                      <div className="p-0">
                        <div className="flex items-center gap-3 mb-4 font-semibold text-resq-text-dark">
                          <span>Emergency Pickup</span>
                          <ArrowRight className="h-5 w-5 text-resq-green" />
                          <span>Austin Vet Clinic</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Driver</div>
                            <div className="font-semibold text-resq-text-dark">Mike Rodriguez</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">ETA</div>
                            <div className="font-semibold text-resq-text-dark">15 minutes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Priority</div>
                            <div className="font-semibold text-resq-red">URGENT</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mb-4">
                          <div className="font-semibold text-resq-text-dark mb-2">Emergency Animal:</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Rocky - Injured Dog
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-resq-orange hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Emergency Contact
                          </button>
                          <button className="bg-resq-green hover:bg-resq-dark-green text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Track Live
                          </button>
                          <button className="border-2 border-resq-green text-resq-green hover:bg-resq-green hover:text-white text-xs font-semibold px-4 py-2 rounded-md bg-transparent">
                            Vet Alert
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Transport Item 3 */}
                    <div className="p-5 rounded-xl border border-resq-border bg-resq-light-bg hover:border-resq-green hover:shadow-md transition-all duration-200">
                      <div className="flex flex-row items-center justify-between p-0 mb-4">
                        <div className="text-lg font-bold text-resq-text-dark">Transport #T-2024-033</div>
                        <span className="bg-resq-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Scheduled
                        </span>
                      </div>
                      <div className="p-0">
                        <div className="flex items-center gap-3 mb-4 font-semibold text-resq-text-dark">
                          <span>Austin Shelter</span>
                          <ArrowRight className="h-5 w-5 text-resq-green" />
                          <span>San Antonio Rescue</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Driver</div>
                            <div className="font-semibold text-resq-text-dark">Jennifer Adams</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Departure</div>
                            <div className="font-semibold text-resq-text-dark">4:00 PM</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-resq-text-medium mb-1">Distance</div>
                            <div className="font-semibold text-resq-text-dark">78 miles</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mb-4">
                          <div className="font-semibold text-resq-text-dark mb-2">Animals (5):</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Whiskers - Tabby
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Oscar - Labrador
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Shadow - Black Cat
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Cooper - Border Collie
                            </span>
                            <span className="bg-resq-chip-bg text-resq-green text-xs font-semibold px-2.5 py-1 rounded-full">
                              Princess - Persian
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-resq-green hover:bg-resq-dark-green text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Start Transport
                          </button>
                          <button className="bg-resq-orange hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md">
                            Contact Driver
                          </button>
                          <button className="border-2 border-resq-green text-resq-green hover:bg-resq-green hover:text-white text-xs font-semibold px-4 py-2 rounded-md bg-transparent">
                            Modify Route
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Scheduled Transports Tab Content */}
              {activeTab === "scheduled" && (
                <div className="pt-6">
                  <div className="bg-gray-100 rounded-xl h-[300px] flex items-center justify-center relative overflow-hidden mb-5">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Interactive Route Map"
                      width={600}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-5 left-5 bg-white/90 p-3 rounded-lg text-sm shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-resq-green" />
                        <span>5 Scheduled Pickups</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Truck className="h-4 w-4 text-resq-green" />
                        <span>3 Vet Deliveries</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-resq-green" />
                        <span>2 Adoption Meetups</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-resq-text-medium text-center text-sm lg:text-base mt-5">
                    <CalendarDays className="inline-block h-4 w-4 mr-1 align-text-bottom" />
                    {"12 transports scheduled for the next 7 days"}
                  </p>
                </div>
              )}

              {/* Request Transport Tab Content */}
              {activeTab === "request" && (
                <div className="pt-6">
                  <div className="p-6 rounded-xl border-2 border-dashed border-resq-border bg-resq-light-bg">
                    <h3 className="text-xl font-semibold text-resq-text-dark mb-5">Request New Transport</h3>
                    <form className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="pickup-location"
                            className="block text-sm font-semibold text-resq-text-dark mb-2"
                          >
                            Pickup Location
                          </label>
                          <input
                            id="pickup-location"
                            placeholder="Enter pickup address"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="destination" className="block text-sm font-semibold text-resq-text-dark mb-2">
                            Destination
                          </label>
                          <input
                            id="destination"
                            placeholder="Enter destination address"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="pickup-date" className="block text-sm font-semibold text-resq-text-dark mb-2">
                            Pickup Date
                          </label>
                          <input
                            id="pickup-date"
                            type="date"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="pickup-time" className="block text-sm font-semibold text-resq-text-dark mb-2">
                            Pickup Time
                          </label>
                          <input
                            id="pickup-time"
                            type="time"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="animals" className="block text-sm font-semibold text-resq-text-dark mb-2">
                          Animals
                        </label>
                        <select
                          id="animals"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option>Select animals for transport</option>
                          <option>Bella - Golden Retriever</option>
                          <option>Max - German Shepherd</option>
                          <option>Luna - Siamese</option>
                          <option>Whiskers - Tabby</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-resq-text-dark mb-2">Priority Level</label>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={() => handlePriorityClick("low")}
                            className={cn(
                              "flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200",
                              activePriority === "low"
                                ? "border-resq-green text-resq-green bg-resq-light-bg"
                                : "border-resq-border text-gray-700 hover:border-resq-green",
                            )}
                          >
                            Low Priority
                          </button>
                          <button
                            type="button"
                            onClick={() => handlePriorityClick("standard")}
                            className={cn(
                              "flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200",
                              activePriority === "standard"
                                ? "border-resq-orange text-resq-orange bg-resq-light-bg"
                                : "border-resq-border text-gray-700 hover:border-resq-orange",
                            )}
                          >
                            Standard
                          </button>
                          <button
                            type="button"
                            onClick={() => handlePriorityClick("emergency")}
                            className={cn(
                              "flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200",
                              activePriority === "emergency"
                                ? "border-resq-red text-resq-red bg-resq-light-bg"
                                : "border-resq-border text-gray-700 hover:border-resq-red",
                            )}
                          >
                            Emergency
                          </button>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="special-instructions"
                          className="block text-sm font-semibold text-resq-text-dark mb-2"
                        >
                          Special Instructions
                        </label>
                        <textarea
                          id="special-instructions"
                          placeholder="Any special handling instructions, medical needs, or other important notes..."
                          rows={4}
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-resq-green to-resq-dark-green text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Submit Transport Request
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Route Planning Tab Content */}
              {activeTab === "routes" && (
                <div className="pt-6">
                  <div className="bg-gray-100 rounded-xl h-[300px] flex items-center justify-center relative overflow-hidden mb-5">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Optimized Route Planning Map"
                      width={600}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-5 left-5 bg-white/90 p-3 rounded-lg text-sm shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Truck className="h-4 w-4 text-resq-green" />
                        <span>3 Active Routes</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-resq-green" />
                        <span>Est. Time: 4h 15m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-resq-green" />
                        <span>Total Distance: 247 miles</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-resq-text-medium text-center text-sm lg:text-base mt-5">
                    AI-optimized routes for maximum efficiency and animal comfort
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="flex flex-col gap-6">
            {/* Driver Status */}
            <div className="p-6 rounded-2xl shadow-xl bg-white">
              <h3 className="text-xl font-semibold text-resq-text-dark mb-5">Driver Status</h3>
              <div className="p-0 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-resq-border">
                  <div className="h-10 w-10 rounded-full bg-resq-green flex items-center justify-center text-white font-semibold text-sm">
                    SM
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-resq-text-dark mb-0.5">Sarah Martinez</div>
                    <div className="text-xs text-resq-text-medium">En route to Dallas - ETA 2:30 PM</div>
                  </div>
                  <CircleDot className="h-3 w-3 text-resq-red fill-resq-red" />
                </div>

                <div className="flex items-center gap-3 pb-4 border-b border-resq-border">
                  <div className="h-10 w-10 rounded-full bg-resq-green flex items-center justify-center text-white font-semibold text-sm">
                    MR
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-resq-text-dark mb-0.5">Mike Rodriguez</div>
                    <div className="text-xs text-resq-text-medium">Emergency transport - Austin</div>
                  </div>
                  <CircleDot className="h-3 w-3 text-resq-red fill-resq-red" />
                </div>

                <div className="flex items-center gap-3 pb-4 border-b border-resq-border">
                  <div className="h-10 w-10 rounded-full bg-resq-green flex items-center justify-center text-white font-semibold text-sm">
                    JA
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-resq-text-dark mb-0.5">Jennifer Adams</div>
                    <div className="text-xs text-resq-text-medium">Available - Ready for pickup</div>
                  </div>
                  <CircleDot className="h-3 w-3 text-resq-green fill-resq-green" />
                </div>

                <div className="flex items-center gap-3 pb-4 border-b border-resq-border">
                  <div className="h-10 w-10 rounded-full bg-resq-green flex items-center justify-center text-white font-semibold text-sm">
                    DW
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-resq-text-dark mb-0.5">David Wilson</div>
                    <div className="text-xs text-resq-text-medium">Available - San Antonio area</div>
                  </div>
                  <CircleDot className="h-3 w-3 text-resq-green fill-resq-green" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-resq-green flex items-center justify-center text-white font-semibold text-sm">
                    LT
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-resq-text-dark mb-0.5">Lisa Thompson</div>
                    <div className="text-xs text-resq-text-medium">Off duty</div>
                  </div>
                  <CircleDot className="h-3 w-3 text-resq-gray fill-resq-gray" />
                </div>
              </div>
            </div>

            {/* Emergency Contacts Section */}
            <div className="p-6 rounded-2xl shadow-xl bg-white">
              <h3 className="text-xl font-semibold text-resq-text-dark mb-5">Emergency Contacts</h3>
              <div className="p-0 space-y-4">
                <div className="bg-resq-emergency-bg border border-resq-emergency-border rounded-lg p-4">
                  <div className="font-semibold text-resq-red mb-1">Dr. Emergency Vet</div>
                  <div className="text-xs text-resq-text-medium mb-2">24/7 Animal Emergency</div>
                  <button className="bg-resq-red hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md">
                    <PhoneCall className="h-3 w-3 mr-1" />
                    Call
                  </button>
                </div>
                <div className="bg-resq-emergency-bg border border-resq-emergency-border rounded-lg p-4">
                  <div className="font-semibold text-resq-red mb-1">Transport Coordinator</div>
                  <div className="text-xs text-resq-text-medium">Sarah Johnson, Logistics Manager</div>
                </div>
                <div className="bg-resq-emergency-bg border border-resq-emergency-border rounded-lg p-4">
                  <div className="font-semibold text-resq-red mb-1">Emergency Response</div>
                  <div className="text-xs text-resq-text-medium">Mike Davis, Crisis Management</div>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="p-6 rounded-2xl shadow-xl bg-white">
              <h3 className="text-xl font-semibold text-resq-text-dark mb-5">Quick Actions</h3>
              <div className="p-0 grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-resq-border bg-resq-light-bg hover:border-resq-green hover:bg-resq-light-bg/50 transition-all duration-200 h-auto">
                  <MapPin className="h-6 w-6 text-resq-text-medium mb-2" />
                  <span className="text-xs font-semibold text-resq-text-dark">Track All</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-resq-border bg-resq-light-bg hover:border-resq-green hover:bg-resq-light-bg/50 transition-all duration-200 h-auto">
                  <BellRing className="h-6 w-6 text-resq-text-medium mb-2" />
                  <span className="text-xs font-semibold text-resq-text-dark">Emergency</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-resq-border bg-resq-light-bg hover:border-resq-green hover:bg-resq-light-bg/50 transition-all duration-200 h-auto">
                  <BarChart className="h-6 w-6 text-resq-text-medium mb-2" />
                  <span className="text-xs font-semibold text-resq-text-dark">Reports</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-resq-border bg-resq-light-bg hover:border-resq-green hover:bg-resq-light-bg/50 transition-all duration-200 h-auto">
                  <Plus className="h-6 w-6 text-resq-text-medium mb-2" />
                  <span className="text-xs font-semibold text-resq-text-dark">New Transport</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
