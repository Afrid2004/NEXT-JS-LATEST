import DeleteFeedback from "@/app/feedbacks/DeleteFeedback";
import Link from "next/link";
import React from "react";

const FeedBackCard = ({ feedback }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-amber-400">Feedback</h3>

          <p className="mt-2 text-gray-200">{feedback.message}</p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-800 pt-3">
        <p className="text-sm text-gray-500">
          Created at: {new Date(feedback.date).toLocaleString()}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        <Link
          href={`/feedbacks/update-feedback/${feedback._id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Update
        </Link>
        <DeleteFeedback feedback={feedback}></DeleteFeedback>
      </div>
    </div>
  );
};

export default FeedBackCard;
