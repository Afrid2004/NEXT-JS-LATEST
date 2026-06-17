import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const Tutorials = () => {
  return (
    <div>
      <Title>Wellcome to tutorials page</Title>
      <div className="mt-5">
        <Link
          className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center"
          href="/tutorials/frontend"
        >
          Frontend Development
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
