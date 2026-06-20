"use client";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Navbar = () => {
  // get the url pathname
  const pathname = usePathname();
  // if render dashboard then skip the current header
  if (pathname.startsWith("/dashboard")) return <></>;
  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between bg-gray-900 border border-gray-800 px-4 py-3 rounded-xl">
          <Link href="/" className="uppercase">
            <Title>👨‍💻 Dev Story</Title>
          </Link>
          <div className="flex items-center gap-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
            <NavLink prefetch={false} href="/foods">
              Food Corner
            </NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
