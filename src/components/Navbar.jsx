import React from "react";
import Title from "./Title";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-xl">
          <Link href="/" className="uppercase">
            <Title>👨‍💻 Dev Story</Title>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
