const ReviewCardSkeleton = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 animate-pulse border border-gray-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-700"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
          <div className="h-3 w-24 bg-gray-700 rounded"></div>
        </div>

        <div className="h-5 w-12 bg-gray-700 rounded"></div>
      </div>

      {/* Review Lines */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-700 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-700 rounded"></div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between">
        <div className="h-3 w-32 bg-gray-700 rounded"></div>
        <div className="h-3 w-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
