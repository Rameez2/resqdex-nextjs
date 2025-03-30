"use client"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf5f0]">
      {/* Hero Banner */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 z-10 flex items-center px-12">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
        <Image
          src="/contact-banner.jpeg"
          alt="Banner image with child and dog"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#011334]">Let's talk with us</h2>
              <p className="text-[#4f4f4f]">
                Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#e17716]" />
                <div>
                  <p className="font-medium text-[#011334]">1055 Arthur ave Elk Groot, 67.</p>
                  <p className="font-medium text-[#011334]">New Palmas South Carolina.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#e17716]" />
                <p className="font-medium text-[#011334]">+1 234 678 9108 99</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#e17716]" />
                <p className="font-medium text-[#011334]">Contact@reqdexx.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-[#e17716] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-[#e17716] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-[#e17716] focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-[#e17716] focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-[#e17716] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#e17716] py-3 text-center font-medium text-white transition-colors hover:bg-[#d06a10]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

