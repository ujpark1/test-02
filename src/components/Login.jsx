import React, { useState } from 'react'
import StatusBar from './StatusBar'
import SsoIcon from './SsoIcon'
import EyeOffIcon from './EyeOffIcon'
import EyeIcon from './EyeIcon'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="bg-white relative min-h-screen w-full max-w-[390px] mx-auto flex flex-col" data-name="Login" data-node-id="16:5">
      {/* Status Bar */}
      <StatusBar />

      {/* Title */}
      <p className="font-gabarito font-bold leading-[34px] text-[30px] text-neutral-n800 text-center mt-[66px] mb-0 tracking-[-0.15px]">
        Login
      </p>

      {/* Form Fields */}
      <div className="flex flex-col gap-3 items-end px-4 mt-[77px] w-full">
        {/* Email Field */}
        <div className="flex flex-col gap-1.5 items-end relative w-full">
          <div className="flex gap-1.5 items-center relative w-full">
            <p className="font-gabarito font-normal leading-[22px] text-[14px] text-neutral-n800 tracking-[0.14px]">
              E-mail
            </p>
          </div>
          <div className="bg-white border-[1.5px] border-neutral-n200 rounded-lg w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg font-gabarito font-normal leading-[22px] text-[14px] text-neutral-n800 placeholder:text-neutral-n400 tracking-[0.14px] outline-none border-0"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5 items-end relative w-full">
          <div className="flex gap-1.5 items-center relative w-full">
            <p className="font-gabarito font-normal leading-[22px] text-[14px] text-neutral-n800 tracking-[0.14px]">
              Password
            </p>
          </div>
          <div className="bg-white border-[1.5px] border-neutral-n200 rounded-lg w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg font-gabarito font-normal leading-[22px] text-[14px] text-neutral-n800 placeholder:text-neutral-n400 tracking-[0.14px] outline-none border-0"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <a
          href="#"
          className="text-right w-full font-gabarito font-medium leading-[22px] text-[14px] text-accent-color-accent-color underline tracking-[0.175px] hover:opacity-80 transition-opacity"
          data-node-id="615:2211"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <div className="flex items-start px-4 mt-[29px] w-full">
        <button className="bg-primary-color-primary-color flex-1 gap-2 items-center justify-center px-[14px] py-3 rounded-full shrink-0 hover:opacity-90 transition-opacity active:scale-[0.98]">
          <div className="flex flex-col font-gabarito font-medium justify-center text-[14px] text-white text-center tracking-[0.21px] whitespace-nowrap">
            <p className="leading-[20px]">Login</p>
          </div>
        </button>
      </div>

      {/* Divider */}
      <p className="font-gabarito font-normal leading-[22px] text-[14px] text-neutral-n500 text-center mt-[249px] mb-0 tracking-[0.14px]">
        or login with
      </p>

      {/* Google Login Button */}
      <div className="border-2 border-neutral-n200 h-[54px] mx-4 rounded-full mt-[44px] mb-8">
        <button className="flex gap-4 h-[54px] items-center justify-center px-6 py-2 rounded-full w-full hover:bg-neutral-n100 transition-colors active:scale-[0.98]">
          <SsoIcon className="relative shrink-0 size-6" />
          <div className="flex flex-col font-gabarito font-medium justify-center text-[14px] text-neutral-n800 tracking-[0.21px] whitespace-nowrap">
            <p className="leading-[20px]">Login with Google</p>
          </div>
        </button>
      </div>
    </div>
  )
}
