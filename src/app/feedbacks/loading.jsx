import FeedBackCardSkeleton from "@/components/skeletons/FeedBackCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {[...Array(12)].map((_, i) => {
        return <FeedBackCardSkeleton key={i}></FeedBackCardSkeleton>;
      })}
    </div>
  );
};

export default loading;
