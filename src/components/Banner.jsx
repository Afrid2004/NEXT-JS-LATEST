"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  //navigate user
  const router = useRouter();
  const handleShare = () => {
    const password = parseInt(prompt("Enter your password"));
    if (password === 1234) {
      router.push("/dashboard");
    }
  };
  return (
    <div>
      <div className="h-100 p-5 bg-gray-800 rounded-xl flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-10">
          <h2 className="text-5xl font-bold uppercase">
            Wellcome to Dev Story
          </h2>
          <button
            onClick={handleShare}
            className="bg-linear-to-br from-cyan-400 to-cyan-600 px-4 py-2 text-2xl hover:rounded-2xl cursor-pointer duration-75 active:scale-[0.95] transition-all"
          >
            Share Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
