import Link from "next/link";
import React from "react";

const NotFound404 = ({ color = "white" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-9xl font-bold text-red-400">404</h1>
        <p>The page you request for does not exist or may be removed!</p>
        <Link
          className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center mx-auto w-fit block"
          href={`/`}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
