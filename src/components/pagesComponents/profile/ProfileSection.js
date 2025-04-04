"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser } from "@/context/userContext"

const ProfileSection = () => {

    const {user} = useUser();

    return (
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image src="/user-profile.jpg" alt="Profile picture" width={80} height={80} className="rounded-full w-20 h-20 border-2 border-white shadow-sm object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-medium text-[#292d32]">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
        {/* <Button className="bg-[#4182f9] hover:bg-[#3a75e0] text-white">Edit</Button> */}
      </div>
    );
}

export default ProfileSection;
