"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf5f0]" aria-labelledby="contact-heading">
      {/* Hero Banner */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 z-10 flex items-center px-12">
          <h1 id="contact-heading" className="text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
        <Image
          src="/contact-banner.jpeg"
          alt="Child hugging a dog in a field"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-12 flex justify-center items-center" aria-label="Contact information and form">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[900px]">
          {/* Left - Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#011334]">Let’s talk with us</h2>
              <p className="text-[#4f4f4f]">
                Questions, comments, or suggestions? Fill out the form and we’ll get back to you shortly.
              </p>
            </div>

            <div className="space-y-4 text-[#011334]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <address className="not-italic">
                  <p className="font-medium">1055 Arthur Ave Elk Groot, 67</p>
                  <p className="font-medium">New Palmas, South Carolina</p>
                </address>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234678910899" className="font-medium hover:underline">+1 234 678 9108 99</a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@reqdexx.com" className="font-medium hover:underline">Contact@reqdexx.com</a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <form className="space-y-4" aria-label="Contact form">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name*"
                      required
                      className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name*"
                      required
                      className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="w-full rounded-lg border border-[#bdbdbd] p-3 focus:border-primary focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 text-center font-medium text-white transition-colors hover:bg-[#d06a10]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
