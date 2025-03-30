"use client"

import { useState } from "react"
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function NewsLetter() {
  const [email, setEmail] = useState("")
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [promotionsAgreed, setPromotionsAgreed] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl rounded-[32px] bg-[#FFCBA4] p-8 md:p-12">
        <div className="inline-block mb-6">
          <div className="border border-black rounded-full px-6 py-2">
            <span className="text-black font-medium">Newsletter</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Stay in Loop</h2>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border-black rounded-full px-6 py-6 h-auto text-black placeholder:text-black/70 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white h-5 w-5 mt-0.5"
                  checked={termsAgreed}
                  onCheckedChange={setTermsAgreed}
                />
                <label htmlFor="terms" className="text-black">
                  I agree to the Terms and Conditions
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="promotions"
                  className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white h-5 w-5 mt-0.5"
                  checked={promotionsAgreed}
                  onCheckedChange={setPromotionsAgreed}
                />
                <label htmlFor="promotions" className="text-black">
                  I agree to receive promotional materials from ResQDex. I understand i can withdraw my consent at any
                  time.
                </label>
              </div>
              <div className="mt-6">
                <button
                  className="bg-black text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <Instagram className="h-6 w-6 text-white" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <Youtube className="h-6 w-6 text-white" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <Facebook className="h-6 w-6 text-white" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <Twitter className="h-6 w-6 text-white" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

