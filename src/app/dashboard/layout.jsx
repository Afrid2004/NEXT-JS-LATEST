import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="my-3">
      <div className="grid grid-cols-12 gap-5 min-h-screen">
        <div className="col-span-3">
          <div className="border-r-2 border-gray-700 h-full overflow-y-auto flex flex-col gap-3 pr-5">
            <div className="mb-5">
              <Link href="/" className="uppercase">
                <Title>👨‍💻 Dev Story</Title>
              </Link>
            </div>
            <Link
              className="bg-gray-800 hover:bg-cyan-600 rounded-lg duration-75 px-4 py-2"
              href="/dashboard"
            >
              Home
            </Link>
            <Link
              className="bg-gray-800 hover:bg-cyan-600 rounded-lg duration-75 px-4 py-2"
              href="/dashboard/add-story"
            >
              Add Story
            </Link>
            <Link
              className="bg-gray-800 hover:bg-cyan-600 rounded-lg duration-75 px-4 py-2"
              href="/dashboard/my-profile"
            >
              My Profile
            </Link>
            <Link
              className="bg-gray-800 hover:bg-cyan-600 rounded-lg duration-75 px-4 py-2"
              href="/dashboard/settings"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="col-span-9">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
