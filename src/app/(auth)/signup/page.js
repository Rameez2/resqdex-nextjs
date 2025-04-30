"use client"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { registerUser } from "@/lib/appwrite/auth";
import authRouteProtect from '@/lib/middlewares/authRouteProtect';
import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";
import { useUser } from "@/context/userContext";
import { sendEmailVerificationOTP } from "@/lib/others/emailTasks";

function SignUpForm() {

  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [agreed, setAgreed] = useState(false); // new state for agreement
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(null);
  const [userOTP, setUserOTP] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Adopter"
  })

  async function handleSubmit() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!passwordRegex.test(formData.password)) {
      setToast({ message: "Password must be at least 6 characters long, contain 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.", type: "error" });
      return;
    }
    try {
      setLoading(true);
      setToast(null);

      // send OTP
      const newOTP = await sendEmailVerificationOTP(formData.email);
      setOtp(newOTP);
      console.log('opt sent', newOTP);
      setOtpSent(true);

    } catch (error) {
      console.log(error.message);
      setToast({ message: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  }
  async function veriftOTP() {
    try {
      setLoading(true); // Start loading
      if (userOTP == otp) {
        const newUser = await registerUser(formData.name, formData.email, formData.password, formData.role);
        setToast({ message: "Sign Up success!", type: "success" });
        setUser(newUser);
        return;
      }
      throw new Error("OTP DOES NOT MATCH");
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setLoading(false); // Stop loading
    }
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf5f0] pr-5 pl-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-black" onClick={() => console.log(formData)}>Sign up</h1>

        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              placeholder="example@gmail.com"
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="must be 8 characters"
                value={formData.password}
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
          <span className="block text-sm text-gray-500">
            Must be at least 6 characters, include an uppercase letter and a number.
          </span>

          {/* Role */}
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-black">
              Role
            </label>
            <div className="relative">
              <select
                id="role"
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="Adopter">Adopter</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              id="agreement"
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(prev => !prev)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="agreement" className="text-sm text-black">
              I agree to the{" "}
              <Link href="/agreement" className="text-primary underline">
                terms and conditions
              </Link>.
            </label>
          </div>



          {
            !otpSent ? (

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!agreed || loading} // disabled if not agreed
                className={`w-full rounded-md py-3 font-medium text-white transition-colors 
              ${agreed ? "bg-primary hover:bg-primary/80" : "bg-gray-400 cursor-not-allowed"}`}
              >
                {loading ? (
                  <>
                    <ButtonSpinner />
                    Loading...
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>
            ) : (
              <>

                <div className="space-y-2">
                  <label htmlFor="otp" className="block text-sm font-medium text-black">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter the OTP sent to your email"
                    value={userOTP}
                    onChange={(e) => setUserOTP(e.target.value)}
                    className="w-full rounded-md border border-[#d8dadc] px-4 py-3 text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  onClick={veriftOTP}
                  disabled={!agreed || loading} // disabled if not agreed
                  className={`w-full rounded-md py-3 font-medium text-white transition-colors 
              ${agreed ? "bg-primary hover:bg-primary/80" : "bg-gray-400 cursor-not-allowed"}`}
                >
                  {loading ? (
                    <>
                      <ButtonSpinner />
                      Loading...
                    </>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </>
            )
          }


          {/* Link to Login */}
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <Toast content={toast.message} type={toast.type} />}
    </div>
  )
}

export default authRouteProtect(SignUpForm);
