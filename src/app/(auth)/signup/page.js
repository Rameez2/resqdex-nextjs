"use client"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { registerUser } from "@/lib/appwrite/auth";
import authRouteProtect from '@/lib/middlewares/authRouteProtect';
import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";

function SignUpForm() {

  const {setUser} = useUser();
  const [showPassword, setShowPassword] = useState(false);
    const [toast,setToast] = useState(null);

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Adopter"
  })

  async function handleSubmit() {
    try {
      setLoading(true);
      setToast(null);
      const newUser = await registerUser(formData.name, formData.email, formData.password, formData.role);
      setToast({ message: "Sign Up success!", type: "success" });
      setUser(newUser);
    } catch (error) {
      console.log(error);
      setToast({ message: error.message, type: "error" });
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf5f0] pr-5 pl-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-black" onClick={() => console.log(formData)}>Sign up</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="must be 8 characters"
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}

                className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
              Role
            </label>
            <div className="relative">
              <select
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="Adopter">Adopter</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-md bg-primary py-3 font-medium text-white hover:bg-primary/80 transition-colors"
          >
          {loading ? <>
            <ButtonSpinner/>
            Loading...
          </> :
            'Sign Up'
          }
          </button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}

    </div>
  )
}

export default authRouteProtect(SignUpForm);