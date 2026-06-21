import React from "react";
import FeedbackForm from "./FeedbackForm";

const AddFeedBack = () => {
  return (
    <div>
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-400">
            Add Feedback
          </h2>

          <p className="mb-6 text-sm text-gray-400">
            Share your thoughts and experience with us.
          </p>
          <FeedbackForm></FeedbackForm>
        </div>
      </div>
    </div>
  );
};

export default AddFeedBack;
