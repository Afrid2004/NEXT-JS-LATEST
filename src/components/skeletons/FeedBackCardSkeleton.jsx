import React from "react";

const FeedBackCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-sm">
      <div>
        <div className="h-5 w-24 rounded bg-gray-700"></div>

        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-gray-800"></div>
          <div className="h-4 w-5/6 rounded bg-gray-800"></div>
          <div className="h-4 w-3/4 rounded bg-gray-800"></div>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-800 pt-3">
        <div className="h-4 w-28 rounded bg-gray-800"></div>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="h-10 w-24 rounded-lg bg-gray-800"></div>
        <div className="h-10 w-24 rounded-lg bg-gray-800"></div>
      </div>
    </div>
  );
};

export default FeedBackCardSkeleton;
