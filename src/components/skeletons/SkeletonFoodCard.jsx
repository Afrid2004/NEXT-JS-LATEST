import React from "react";

const SkeletonFoodCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="p-4 space-y-3">
        <div className="aspect-4/3 bg-gray-700 rounded-lg"></div>
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>

        <div className="flex justify-between">
          <div className="h-4 bg-gray-700 rounded w-20"></div>
          <div className="h-4 bg-gray-700 rounded w-16"></div>
        </div>

        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonFoodCard;
