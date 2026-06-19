const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 shadow-md border border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12">
          <img
            src={review.photo}
            alt={review.user}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-white">{review.user}</h3>

          <p className="text-xs text-gray-400">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(review.rating)].fill().map((_, idx) => {
            return <span key={idx}>⭐</span>;
          })}
          {[...Array(5 - review.rating)].fill().map((_, idx) => {
            return (
              <span key={idx} className="text-white">
                ★
              </span>
            );
          })}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
        {review.review}
      </p>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
        <span className="text-sm text-gray-400">{review.email}</span>

        <div className="flex items-center gap-1 text-red-500">
          ❤️ {review.likes.length}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
