"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Search as SearchIcon } from "lucide-react";

interface SearchFormValues {
  query: string;
}

interface SearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = ({ className = "" }) => {
  const { register, handleSubmit } = useForm<SearchFormValues>({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (data: SearchFormValues) => {
    console.log("Search value:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full flex items-center justify-center gap-2.5 sm:gap-3.5 ${className}`}
    >
      {/* Input Pill Box */}
      <div className="bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] w-full max-w-[380px] xs:max-w-[420px] sm:max-w-[460px] md:max-w-[480px] focus-within:ring-2 focus-within:ring-[#d4fb20]/80 transition-all">
        <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-textPrimary/50 shrink-0 mr-2.5 sm:mr-3" />
        <input
          type="text"
          {...register("query")}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent border-none outline-none text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[120%] text-textPrimary placeholder:text-textPrimary/50 placeholder:font-normal"
        />
      </div>

      {/* Separate Search Button */}
      <button
        type="submit"
        className="shrink-0 bg-[#d4fb20] text-textPrimary text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[120%] px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full hover:brightness-95 active:scale-95 transition-all cursor-pointer shadow-[0_4px_16px_rgba(212,251,32,0.35)]"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
