import SkeletonFoodCard from "@/components/skeletons/SkeletonFoodCard";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-12 gap-5 my-5">
      <div className="col-span-12">
        <div className="grid grid-cols-3 gap-5">
          {[...Array(12)].map((_, index) => {
            return <SkeletonFoodCard key={index}></SkeletonFoodCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default loading;
