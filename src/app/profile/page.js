"use client"

import { Settings, Lock, Bell, MessageSquare, Trash2, LogOut } from "lucide-react"
import Link from "next/link"
import GeneralSettings from "@/components/pagesComponents/profile/general/GeneralSettings"
import SecurityComp from "@/components/pagesComponents/profile/Security/SecurityComp"
import { useState } from "react"
import withAuth from "@/lib/middlewares/withAuth"
import { logOutUser } from "@/lib/appwrite/auth"
import { useUser } from "@/context/userContext"

function SidebarNavigation() {

  const [activeTab,setActiveTab] = useState('general');

  const {setUser} = useUser();

  async function handleLogOut() {
    try {
      await logOutUser();
      setUser(null);
    } catch (error) {
      console.log('logout error',error.message);
    }
  }

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
              <Link href="#" className={`flex items-center px-6 py-3 text-black ${activeTab === 'general' && 'bg-[#fcf1e8]'} hover:bg-[#fbf5f0]`} onClick={() => setActiveTab('general')}>
                <Settings className="w-5 h-5 mr-3 text-[#666666]" />
                <span>General</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`flex items-center px-6 py-3 text-black ${activeTab === 'security' && 'bg-[#fcf1e8]'} hover:bg-[#fbf5f0]`} onClick={() => setActiveTab('security')}>
                <Lock className="w-5 h-5 mr-3 text-[#666666]" />
                <span>Password</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`flex items-center px-6 py-3 text-black ${activeTab === 'notifications' && 'bg-[#fcf1e8]'} hover:bg-[#fbf5f0]`}>
                <Bell className="w-5 h-5 mr-3 text-[#666666]" />
                <span>Notification</span>
              </Link>
            </li>
            <li>
              <Link href="/messages" className="flex items-center px-6 py-3 text-black hover:bg-[#fbf5f0]">
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
          onClick={handleLogOut}
           className="flex items-center justify-center w-full px-4 py-2 text-white bg-[#e17716] rounded-md hover:bg-[#e17716]/90">
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#fbf5f0]">{/* Content goes here */}
      {/* <GeneralSettings/> */}
      {/* <SecurityComp/> */}
      {
        activeTab === "general" ? <GeneralSettings/> : 
        activeTab === "security" ? <SecurityComp/> : ''
      }
      </div>
    </div>
  )
}

export default withAuth(SidebarNavigation);