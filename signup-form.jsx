"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [dailyReports, setDailyReports] = useState(false)
  const [weeklyReports, setWeeklyReports] = useState(true)

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf5f0]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-black">Sign up</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-[#e17716] focus:ring-1 focus:ring-[#e17716]" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="must be 8 characters"
                className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-[#e17716] focus:ring-1 focus:ring-[#e17716]" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-black">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="repeat password"
                className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-[#e17716] focus:ring-1 focus:ring-[#e17716]" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Daily reports</p>
                <p className="text-sm text-gray-600">Get a daily activity report via email.</p>
              </div>
              <Switch
                checked={dailyReports}
                onCheckedChange={setDailyReports}
                className="data-[state=checked]:bg-[#e17716]" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Weekly summary</p>
                <p className="text-sm text-gray-600">Get a weekly activity report via email.</p>
              </div>
              <Switch
                checked={weeklyReports}
                onCheckedChange={setWeeklyReports}
                className="data-[state=checked]:bg-[#e17716]" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#e17716] py-3 font-medium text-white hover:bg-[#d06a14] transition-colors">
            Log in
          </button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="text-[#e17716] hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

