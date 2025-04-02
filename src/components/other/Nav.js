"use client"
import Link from "next/link"
import { ChevronDown, CircleUser,MessageSquare } from "lucide-react"
import { useUser } from "@/context/userContext"

const Nav = () => {

  const { user, loading } = useUser();

  return (
    <div>
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold">Logo</div>
        <nav className="hidden md:flex items-center space-x-8 font-bold">
          <Link href="/" className="text-[#000000] hover:text-[#e17716]">
            Home
          </Link>
          <Link href="/about-us" className="text-[#000000] hover:text-[#e17716]">
            About Us
          </Link>
          <Link href="/animal-listing" className="text-[#000000] hover:text-[#e17716]">
            Animal Listing
          </Link>
          <Link href="contact-us" className="text-[#000000] hover:text-[#e17716]">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {loading ? 'loading...' : user ?
            <>
              <Link href="/messages">
                <MessageSquare className="w-9 h-9 text-[#e17716]" />
              </Link>
              <Link href="/profile">
                <CircleUser className="w-9 h-9 text-[#e17716]" />
              </Link>
            </>
            :
            <>

              <Link href="/login">
                <button className="bg-[#e17716] text-white px-6 py-2 rounded-md hover:bg-[#e17716]/90 transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">

                <button className="border border-[#e17716] text-[#e17716] px-6 py-2 rounded-md hover:bg-[#e17716]/10 transition-colors">
                  Sign Up
                </button>
              </Link>
            </>
          }
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-[#e17716] py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap items-center space-x-4 md:space-x-8">
            <button className="text-white flex items-center">
              Dogs <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="text-white flex items-center">
              Cats & Kittens <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="text-white flex items-center">
              Other Pets <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="text-white flex items-center">
              Pet Shelters <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <button className="mt-4 md:mt-0 border border-white text-white px-6 py-2 rounded-md hover:bg-white/10 transition-colors">
            Search For Adopters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
