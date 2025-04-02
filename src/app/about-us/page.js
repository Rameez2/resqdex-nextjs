"use client";
import Image from "next/image"
import { Check, ChevronLeft, ChevronRight, Search, Share2, User } from "lucide-react"
import { useState } from "react";
import AboutStories from "@/components/pagesComponents/about/AboutStories";

export default function About() {



  return (
    <div className="min-h-screen bg-[#fbf5f0] text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Group */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="absolute top-0 left-0 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white z-10">
              <Image
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                src="/about-dog.jpeg"
                alt="White dog"
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 md:right-20 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white">
              <Image
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                src="/about-kitten.jpeg"
                alt="White kitten"
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-[#e17716] text-xl font-medium mb-2">About</h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Option For Adoption</h1>
            <p className="text-lg mb-8">
              Our mission is to simplify the adoption process, raise awareness about animal rescue, and create loving
              forever homes for animals worldwide
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Hassle Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Home Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Tailored Choices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-[#e17716] text-xl font-medium mb-2">Adoption Process</h3>
        <h2 className="text-4xl font-bold mb-10">
          Easier Adoption
          <br />
          Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <Search className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Search and Filter</h3>
            <p className="text-center">
              Narrow down options based on animal category, breed, age, size, temperament, and location.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <Share2 className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Connect with Rescues</h3>
            <p className="text-center">
              Directly contact the rescue organization or shelter for further inquiries and next steps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <User className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Review Profiles</h3>
            <p className="text-center">
              Access comprehensive details about each pet, including photos, videos, and a heartfelt bio.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
        <AboutStories/>
    </div>
  )
}

