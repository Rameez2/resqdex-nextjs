"use client"

import { useState } from "react"
import { ChevronDown, Mail, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProfileSection from "../ProfileSection"

export default function GeneralSettings() {
  const [email, setEmail] = useState("alexarawles@gmail.com")

  return (
    <div className="min-h-screen bg-[#fbf5f0] flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-sm">
        {/* Header gradient */}
        <div className="h-16 bg-gradient-to-r from-[#b8d5ff] to-[#f9f9f9]"></div>

        {/* Profile section */}
        <div className="px-8 py-6">
            <ProfileSection/>

          {/* Form */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#292d32] font-medium mb-2">First Name</label>
              <Input type="text" placeholder="Your First Name" className="w-full bg-[#f9f9f9] border-0 rounded-lg" />
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Last Name</label>
              <Input type="text" placeholder="Your First Name" className="w-full bg-[#f9f9f9] border-0 rounded-lg" />
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Gender</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Gender</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Country</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Country</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Language</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Language</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Pet Preference</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Preference</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Email section */}
          <div className="mt-8">
            <h3 className="text-[#292d32] font-medium mb-4">My email Address</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center">
                <Mail size={20} className="text-[#4182f9]" />
              </div>
              <div className="flex-1">
                <p className="text-[#292d32]">{email}</p>
                <p className="text-sm text-gray-500">1 month ago</p>
              </div>
              <button className="text-[#f93737]">
                <Trash2 size={20} />
              </button>
            </div>
            <button className="mt-4 inline-flex items-center text-[#292d32] bg-[#fbf5f0] px-4 py-2 rounded-lg">
              + Add Email Address
            </button>
          </div>

          {/* Save button */}
          <div className="mt-8 flex justify-end">
            <Button className="bg-[#e17716] hover:bg-[#d06c10] text-white">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

