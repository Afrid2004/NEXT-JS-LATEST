"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchFood = () => {
  const serchParms = useSearchParams();
  const router = useRouter();
  const handleForm = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();

    //replace the serch url with value update
    const newParams = new URLSearchParams(serchParms.toString());
    newParams.set("search", searchValue);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="flex items-center gap-2 bg-gray-800 h-9 w-full rounded-sm overflow-hidden">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full px-4 h-full outline-none border-none"
            required
            placeholder="Search food..."
          />
          <button
            type="submit"
            className="px-4 cursor-pointer bg-cyan-600 h-full hover:bg-cyan-700 transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFood;
