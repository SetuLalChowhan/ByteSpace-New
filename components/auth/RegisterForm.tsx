"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log("Register Form Value:", data);
    reset();
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Label */}
      <span className="font-satoshi text-[15px] sm:text-[18px] font-normal leading-[150%] text-[#003BE2]">
        Create an Account
      </span>

      {/* Main Heading */}
      <h1 className="font-poppins text-[26px] xs:text-[30px] sm:text-[38px] md:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528] mt-0.5 mb-4 sm:mb-6 md:mb-8">
        Welcome to
        <br />
        ByteSpace
      </h1>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3.5 sm:space-y-4 md:space-y-5">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="fullName"
            className="block font-satoshi text-[13px] sm:text-[14px] font-medium leading-[120%] text-[#242528] mb-1.5 sm:mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Jamie Davis"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Full name must be at least 2 characters",
              },
            })}
            className={`w-full rounded-xl sm:rounded-[14px] md:rounded-[16px] border ${
              errors.fullName ? "border-red-500" : "border-[#E5E6E8]"
            } bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-[#242528] placeholder-[#9E9E9E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 font-satoshi text-[12px] text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block font-satoshi text-[13px] sm:text-[14px] font-medium leading-[120%] text-[#242528] mb-1.5 sm:mb-2"
          >
            Email
          </label>
          <input
            id="email"
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
            htmlFor="password"
            className="block font-satoshi text-[13px] sm:text-[14px] font-medium leading-[120%] text-[#242528] mb-1.5 sm:mb-2"
          >
            Password
          </label>
          <input
            id="password"
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
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>
        </div>
      </form>

      {/* Bottom Switch Link */}
      <div className="mt-5 sm:mt-8 md:mt-12 text-center">
        <span className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[160%] text-[#4B4C53]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#003BE2] hover:underline font-medium transition-colors"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
