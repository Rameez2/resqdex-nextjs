"use client"
import { ChevronDown } from "lucide-react"
import PetCard from "@/components/resuable/PetCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf5f0]">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-md h-fit">
          <h2 className="text-3xl font-bold mb-6">Filters</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Breed</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select breed</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Age</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select age</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Size</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select size</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Gender</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select gender</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select color</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Shelter Or Rescue</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select shelter</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Pet Listings */}
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold mb-8">Listing Of Animal Nearby</h1>

          {/* Sort Options */}
          <div className="mb-8">
            <p className="text-[#e17716] font-medium mb-2">Sort By</p>
            <div className="relative max-w-[250px]">
              <select className="w-full bg-white border border-gray-200 p-3 rounded-md appearance-none pr-10">
                <option>Nearest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
            </div>
          </div>

          {/* Pet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
          </div>
        </div>
      </main>
    </div>
  )
}

