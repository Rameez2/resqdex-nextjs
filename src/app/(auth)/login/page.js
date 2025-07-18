"use client"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { loginWithEmailAndPass, logOutUser } from "@/lib/appwrite/auth"
import { fetchCurrentUser } from "@/lib/appwrite/user"
import { useUser } from "@/context/userContext"
import authRouteProtect from '@/lib/middlewares/authRouteProtect';
import Toast from "@/components/ui/Toast"
import ButtonSpinner from "@/components/ui/buttonSpinner"
import ForgetEmailInput from "@/components/pagesComponents/login/ForgetEmailInput"

function LoginUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showForgetModal, setShowForgetModal] = useState(false)

  const { setUser } = useUser();

  async function handleLogin() {
    try {
      setLoading(true);
      // first delete previous session before new one
      await logOutUser();
      const response = await loginWithEmailAndPass(formData.email, formData.password);
      console.log('login success!, update user context');
      setShowToast(true);
      const getData = await fetchCurrentUser();
      setUser(getData);
    } catch (error) {
      console.log('login error', error.message);
      setError(error.message)
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf5f0] pr-5 pl-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-black" onClick={fetchCurrentUser}>Login</h1>

        <div className="space-y-6">
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
              Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="password"
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

          <div className="text-right">
            <button
              type="button"
              onClick={() => setShowForgetModal(true)}

              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>


          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 font-medium text-white hover:bg-primary/80 transition-colors"
            onClick={handleLogin}
          >
            {loading ? <>
              <ButtonSpinner />
              Loading...
            </> : <>
              Log in
            </>}

          </button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      {showToast ?
        <Toast content='Login Success!' type='success' /> : ''
      }

      {showForgetModal && <ForgetEmailInput onClose={() => setShowForgetModal(false)} />}

      {error && <Toast content={error} type="error" closeTime={10000} />}
    </div>
  )
}

export default authRouteProtect(LoginUpForm);