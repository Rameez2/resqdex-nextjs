"use client"

import { Settings, Lock, Bell, MessageSquare, Trash2, LogOut } from "lucide-react"
import Link from "next/link"

export default function SidebarNavigation() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-60 border-r border-[#e17716] bg-white flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-1">
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-black bg-[#fcf1e8]">
                <Settings className="w-5 h-5 mr-3 text-[#666666]" />
                <span>General</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-6 py-3 text-black hover:bg-[#fbf5f0]">
                <Lock className="w-5 h-5 mr-3 text-[#666666]" />
                <span>Password</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-6 py-3 text-black hover:bg-[#fbf5f0]">
                <Bell className="w-5 h-5 mr-3 text-[#666666]" />
                <span>Notification</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-6 py-3 text-black hover:bg-[#fbf5f0]">
                <MessageSquare className="w-5 h-5 mr-3 text-[#666666]" />
                <span>Messages</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-6 my-4 border-t border-[#dddddd]"></div>

        {/* Delete Account */}
        <div className="px-6 mb-4">
          <Link href="#" className="flex items-center text-[#f93737] hover:underline">
            <Trash2 className="w-5 h-5 mr-3" />
            <span>Delete Account</span>
          </Link>
        </div>

        {/* Log Out Button */}
        <div className="p-6 mt-auto">
          <button
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-[#e17716] rounded-md hover:bg-[#e17716]/90">
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-[#fbf5f0]">{/* Content goes here */}</div>
    </div>
  );
}

