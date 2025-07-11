"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"
import ProfileSection from "../ProfileSection"
import { useUser } from "@/context/userContext"
import { updateUserData } from "@/lib/appwrite/user"
import Toast from "@/components/ui/Toast"
import ButtonSpinner from "@/components/ui/buttonSpinner"
import AdopterQuestionnaire from "../Dataforms/adopterr/AdopterQuestionnaire"

export default function GeneralSettings() {
  const router = useRouter();
  const { user,setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState("");
  const [name, setName] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [toast, setToast] = useState(null);
  
  const [isAdopterOpen, setIsAdopterOpen] = useState(false);

  const handleOpenAdopter = () => {
    if(user.role === "Adopter") {
      setIsAdopterOpen(true);
    }
    else {
      router.push('/org-form');
    }
  };
  const handleCloseAdopter = (isSubmitted) => {
    // if(isSubmitted) {
    //   user.status = "Pending"
    //   setUser()
    // }
    setIsAdopterOpen(false)
  };

  useEffect(() => {
    setUserData(user);
    setEmail(user?.email || "");
    setName(user?.name || "");
  }, [user]);

  async function handleUpdate() {
    console.log('updating');

    try {
      setToast(null);
      setUpdateLoading(true);
      await updateUserData(user.$id, { email: email, name: name });
      setToast({ message: "Data update success!", type: "success" });
      setUser(prevUser => ({
        ...prevUser,
        email:email,
        name:name
      }));
    } catch (error) {
      console.log('error updating data:', error);
      setToast({ message: error.message, type: "error" });

    }
    finally {
      setUpdateLoading(false);
      setIsEditing(false);
    }
  }


  return (
    <div className="bg-[#fbf5f0] flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-sm pb-3">
        {/* Header gradient */}
        <div className="h-16 bg-gradient-to-r from-[#b8d5ff] to-[#f9f9f9]"></div>

        {/* Profile section */}
        <div className="px-8">
          <ProfileSection />

          {/* Form */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Email</label>
              <Input
                type="text"
                placeholder="Your Email"
                disabled={!isEditing}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f9f9f9] border-0 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Name</label>
              <Input
                type="text"
                placeholder="Your Name"
                disabled={!isEditing}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#f9f9f9] border-0 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Role</label>
              <Input type="text" disabled value={user.role} className="w-full bg-[#f9f9f9] border-0 rounded-lg" />
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Status</label>
              {/* <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{user.status}</span> */}
              {
                user.status === "Apply" ? <span onClick={handleOpenAdopter} className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300 cursor-pointer">Get Verified</span> :
                  user.status === "Pending" ? <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">Verification Pending</span> :
                    user.status === "Rejected" ? <span onClick={handleOpenAdopter} className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 cursor-pointer">Rejected</span> :
                      user.status === "Approved" ? <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Verified</span> : ''
              }
            </div>

            <div>
              <label className="block text-[#292d32] font-medium mb-2">Country</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Country</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Language</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Language</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div>
              <label className="block text-[#292d32] font-medium mb-2">Pet Preference</label>
              <div className="relative">
                <select className="w-full bg-[#f9f9f9] border-0 rounded-lg h-10 px-3 appearance-none">
                  <option>Preference</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>

          {/* Edit and Save button */}
          <div className="mt-8 flex justify-end gap-4">
            {isEditing ? (
              <Button className="bg-[#e17716] hover:bg-[#d06c10] text-white" onClick={handleUpdate}>
                {updateLoading && <ButtonSpinner />}
                Save Changes
              </Button>
            ) : (
              <Button className="bg-[#4182f9] hover:bg-[#3a75e0] text-white" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}


            {/* <OrganizationQuestionnaire/> */}

      <AdopterQuestionnaire
        isOpen={isAdopterOpen}
        onClose={handleCloseAdopter}
      />
    </div>
  )
}
