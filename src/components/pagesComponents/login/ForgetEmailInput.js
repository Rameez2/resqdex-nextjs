'use client'

import { useState } from "react"
import { account } from "@/lib/appwrite/appwrite"
import ButtonSpinner from "@/components/ui/buttonSpinner"

const ForgetEmailInput = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleRecovery = async () => {
    if (!email) return;

    try {
      setLoading(true)
      setMessage("")
      await account.createRecovery(email, process.evn.NEXT_PUBLIC_PASSWORD_RESET_URL)
    //   await account.createRecovery(email, "http://localhost:3000/reset-password")
      setMessage("✅ Recovery email sent!")
    } catch (err) {
      setMessage("❌ " + (err.message || "Failed to send recovery email"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-black mb-4 text-center">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-4"
        />

        <button
          onClick={handleRecovery}
          disabled={loading}
          className="w-full rounded-md bg-primary py-3 font-medium text-white hover:bg-primary/80 transition-colors flex items-center justify-center"
        >
          {loading ? (
            <>
              <ButtonSpinner />
              Sending...
            </>
          ) : (
            "Send Recovery Email"
          )}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  )
}

export default ForgetEmailInput
