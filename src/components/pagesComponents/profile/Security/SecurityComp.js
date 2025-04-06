"use client"

import { useState } from "react"
import { Eye, EyeOff, Info } from "lucide-react"
import Image from "next/image"
import ProfileSection from "../ProfileSection"
import { updateUserPassword } from "@/lib/appwrite/auth"
import Toast from "@/components/ui/Toast"
import ButtonSpinner from "@/components/ui/buttonSpinner"

export default function SecurityComp() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [oldPassword, setOldPassword] = useState('1234567889');
  const [newPassword, setNewPassword] = useState('1234567884');
  const [confirmPassword, setConfirmedPassword] = useState('1234567884');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSubmit() {
    try {
      setToast(null);
      setLoading(true);

      if(newPassword === confirmPassword) {
        await updateUserPassword(oldPassword,newPassword);
        setToast({ message: "Password change success!", type: "success" });
      }
      else {
        throw new Error("new and confirm password should match");
      }
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fbf5f0] flex justify-center items-center p-4">
    <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Header gradient */}
      <div className="h-16 bg-gradient-to-r from-[#b8d5ff] to-[#f9f9f9]"></div>

        <div className="p-8">
          {/* Profile section */}
            <ProfileSection/>         
          {/* Current password */}
          <div className="mb-6 mt-5">
            <label htmlFor="current-password" className="block mb-2 font-medium">
              Current Password
            </label>
            <div className="relative">
              <input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                className="w-full p-3 bg-input rounded-md border border-border"
                // defaultValue=""
                placeholder="Current Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Change password section */}
          <h3 className="text-xl font-medium mb-4">Change Password</h3>

          {/* New password */}
          <div className="mb-4">
            <label htmlFor="new-password" className="block mb-2 font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full p-3 bg-input rounded-md border border-border"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm password */}
          <div className="mb-5">
            <label htmlFor="confirm-password" className="block mb-2 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full p-3 bg-input rounded-md border border-border"
                value={confirmPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="mt-4 mb-5 flex">
            <button
              type="submit"
              className="w-50 ml-auto mr-auto py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/80"
              onClick={handleSubmit}
            >
            {loading && <ButtonSpinner/>}
              Update Password
            </button>
          </div>

          {/* 2FA section */}
          <div>
            <div className="flex items-center mb-1">
              <h3 className="text-xl font-medium mr-2">Enable Two Factor Authentication (2FA)</h3>
              <Info size={18} className="text-text-secondary" />
            </div>
            <p className="text-text-secondary mb-4">
              Enhance your account security with Two-Factor Authentication (2FA).
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-primary text-white rounded-md font-medium">Enable</button>
              <button className="px-6 py-2 bg-white border border-border rounded-md text-primary font-medium">
                Disable
              </button>
            </div>
          </div>
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}
    </div>
  )
}
