import React from "react";
import Title from "./Title";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-xl">
          <div>
            <Title>Next Latest</Title>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
