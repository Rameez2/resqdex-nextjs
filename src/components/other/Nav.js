"use client"
import Link from "next/link"
import { ChevronDown, CircleUser, MessageSquare, BadgeCheck } from "lucide-react"
import { useUser } from "@/context/userContext"
import { logOutUser } from "@/lib/appwrite/auth"
import { useRouter } from "next/navigation"

const Nav = () => {
  const router = useRouter();
  const { user, loading,setUser } = useUser();

  async function handleLogOut() {
    try {
      await logOutUser();
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.log('logout error',error.message);
    }
  }

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
              {user.status === "Approved" ?
              <>
              {/* Verified
               <BadgeCheck className="w-9 h-9 text-[#00bc00]" /> */}
               <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Approved</span>
              </>:
              user.status === "Apply" ? <>
              <Link href="/profile">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300 cursor-pointer">Get Verified</span>
              </Link>
              </>: 
              user.status === "Pending" ? <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">Pending</span>
              :
              user.status === "Rejected" ?               
              <Link href="/profile">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Rejected</span>
              </Link>
              : ''
               }
              <Link href="/messages">
                <MessageSquare className="w-9 h-9 text-[#e17716]" />
              </Link>
              <Link href="/profile">
                <CircleUser className="w-9 h-9 text-[#e17716]" />
              </Link>
              <button onClick={handleLogOut}>LogOUt</button>
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
      {/* <div className="bg-[#e17716] py-4">
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
          {user ? user.role === "Organization" &&
          <Link href="/adopters-posts">
           <button className="mt-4 md:mt-0 border border-white text-white px-6 py-2 rounded-md hover:bg-white/10 transition-colors">
            Search For Adopters
          </button>
          </Link>
          :<></>}
        </div>
      </div> */}
    </div>
  );
}

export default Nav;
