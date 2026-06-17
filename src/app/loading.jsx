import React from "react";

const loading = ({ color = "white" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-2">
        Loading
        <div
          className={`w-4 h-4 border-2 ${color === "dark" ? "border-gray-800 border-t-gray-800/30 border-r-gray-800/30" : "border-white border-t-white/30 border-r-white/30"} rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
};

export default loading;
