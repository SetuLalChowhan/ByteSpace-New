"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FacebookSvg, GoogleSvg } from "@/components/common/CustomSvg";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login Form Value:", data);
    reset();
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Label */}
      <span className="font-satoshi text-[15px] sm:text-[18px] font-normal leading-[150%] text-[#003BE2]">
        Sign In
      </span>

      {/* Main Heading */}
      <h1 className="font-poppins text-[26px] xs:text-[30px] sm:text-[38px] md:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528] mt-0.5 mb-4 sm:mb-6 md:mb-8">
        Welcome Back
      </h1>

      {/* Sign In Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3.5 sm:space-y-4 md:space-y-5">
        {/* Email Field */}
        <div>
          <label
            htmlFor="loginEmail"
            className="block font-satoshi text-[13px] sm:text-[14px] font-medium leading-[120%] text-[#242528] mb-1.5 sm:mb-2"
          >
            Email
          </label>
          <input
            id="loginEmail"
            type="email"
            placeholder="designer@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            className={`w-full rounded-xl sm:rounded-[14px] md:rounded-[16px] border ${
              errors.email ? "border-red-500" : "border-[#E5E6E8]"
            } bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-[#242528] placeholder-[#9E9E9E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 font-satoshi text-[12px] text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="loginPassword"
            className="block font-satoshi text-[13px] sm:text-[14px] font-medium leading-[120%] text-[#242528] mb-1.5 sm:mb-2"
          >
            Password
          </label>
          <input
            id="loginPassword"
            type="password"
            placeholder="********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full rounded-xl sm:rounded-[14px] md:rounded-[16px] border ${
              errors.password ? "border-red-500" : "border-[#E5E6E8]"
            } bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-[#242528] placeholder-[#9E9E9E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors`}
          />
          {errors.password && (
            <p className="mt-1 font-satoshi text-[12px] text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button (Aligned Right as in mockup) */}
        <div className="pt-1.5 sm:pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-[15px] sm:text-[17px] md:text-[18px] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 hover:opacity-95 active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative my-5 sm:my-7 md:my-8 flex items-center justify-center">
        <div className="w-full border-t border-[#E5E6E8]" />
        <span className="absolute bg-white px-3.5 sm:px-4 font-satoshi text-[13px] sm:text-[14px] text-[#9E9E9E]">
          or
        </span>
      </div>

      {/* Social Login Buttons */}
      <div className="flex items-center justify-center gap-3.5 sm:gap-5">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-[#CED0D3] flex items-center justify-center text-black hover:bg-[#F5F5F6] hover:border-black transition-all active:scale-95 cursor-pointer"
        >
          <FacebookSvg width={20} height={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-[#CED0D3] flex items-center justify-center text-black hover:bg-[#F5F5F6] hover:border-black transition-all active:scale-95 cursor-pointer"
        >
          <GoogleSvg width={20} height={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Switch Link */}
      <div className="mt-5 sm:mt-8 md:mt-10 text-center">
        <span className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[160%] text-[#4B4C53]">
          New user?{" "}
          <Link
            href="/register"
            className="text-[#003BE2] hover:underline font-medium transition-colors"
          >
            Create an account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
