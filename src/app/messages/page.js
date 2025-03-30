"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Search, Smile, Paperclip, Send } from "lucide-react"

export default function MessaesComp() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex h-screen bg-[#fdf6e3]">
      {/* Left sidebar */}
      <div className="w-[450px] border-r border-[#e7e7e7] flex flex-col">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7c7c7c]" />
            <Input placeholder="Search" className="pl-10 bg-white border-none rounded-full h-12 text-[#333333]" />
          </div>
        </div>

        <div className="p-4 border-b border-[#e7e7e7]">
          <h2 className="text-xl font-semibold text-[#333333]">Organization</h2>
        </div>

        <div className="flex-1 overflow-auto">
          {/* Chat list */}
          <div className="border-b border-[#e7e7e7] p-4 flex items-center hover:bg-[#eff6fc] cursor-pointer">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-[#333333]">Organization 01</h3>
                <span className="text-sm text-[#7c7c7c]">Today, 9:52pm</span>
              </div>
              <p className="text-[#7c7c7c] truncate">Not today!</p>
            </div>
            <div className="ml-2 bg-[#f24e1e] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              4
            </div>
          </div>

          <div className="border-b border-[#e7e7e7] p-4 flex items-center hover:bg-[#eff6fc] cursor-pointer">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-[#333333]">Organization 01</h3>
                <span className="text-sm text-[#7c7c7c]">Yesterday, 12:31pm</span>
              </div>
              <p className="text-[#7c7c7c] truncate">Okay???</p>
            </div>
          </div>

          <div className="border-b border-[#e7e7e7] p-4 flex items-center hover:bg-[#eff6fc] cursor-pointer">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-[#333333]">Organization 01</h3>
                <span className="text-sm text-[#7c7c7c]">Wednesday, 9:12am</span>
              </div>
              <p className="text-[#7c7c7c] truncate">It's not going to happen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e7e7]">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-[#333333]">Oraganization</h2>
              <p className="text-sm text-[#7c7c7c]">Online - Last seen, 2:02pm</p>
            </div>
          </div>
          <button className="text-[#7c7c7c]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-more-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            {/* Received message */}
            <div className="flex flex-col max-w-[70%] items-start">
              <div className="bg-[#e7e7e7] rounded-2xl py-3 px-4 text-[#333333]">
                <p>Hey There!</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:30pm</span>
            </div>

            {/* Received message */}
            <div className="flex flex-col max-w-[70%] items-start">
              <div className="bg-[#e7e7e7] rounded-2xl py-3 px-4 text-[#333333]">
                <p>How are you?</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:30pm</span>
            </div>

            {/* Sent message */}
            <div className="flex flex-col max-w-[70%] items-end ml-auto">
              <div className="bg-[#e17716] rounded-2xl py-3 px-4 text-white">
                <p>Hello!</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:33pm</span>
            </div>

            {/* Sent message */}
            <div className="flex flex-col max-w-[70%] items-end ml-auto">
              <div className="bg-[#e17716] rounded-2xl py-3 px-4 text-white">
                <p>I am fine and how are you?</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:34pm</span>
            </div>

            {/* Received message */}
            <div className="flex flex-col max-w-[70%] items-start">
              <div className="bg-[#e7e7e7] rounded-2xl py-3 px-4 text-[#333333]">
                <p>I am doing well, Can we meet tomorrow?</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:36pm</span>
            </div>

            {/* Sent message */}
            <div className="flex flex-col max-w-[70%] items-end ml-auto">
              <div className="bg-[#e17716] rounded-2xl py-3 px-4 text-white">
                <p>Yes Sure!</p>
              </div>
              <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:58pm</span>
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-[#e7e7e7]">
          <div className="flex items-center bg-[#eff6fc] rounded-full p-2">
            <button className="p-2 text-[#7c7c7c]">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-transparent border-none focus:outline-none px-2 text-[#333333]"
            />
            <button className="p-2 text-[#7c7c7c]">
              <Smile size={20} />
            </button>
            <button className="bg-[#f24e1e] text-white p-3 rounded-full ml-2">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

