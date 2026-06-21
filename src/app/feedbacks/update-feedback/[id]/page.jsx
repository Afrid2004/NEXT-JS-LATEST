import React from "react";
import FeedbackUpdateForm from "./FeedbackUpdateForm";

const getFeedDataById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/feedback/${id}`);
  const data = await res.json();
  return data;
};

const AddFeedBack = async ({ params }) => {
  const { id } = await params;
  const feedbackDetails = await getFeedDataById(id);
  return (
    <div>
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-400">
            Update Feedback
          </h2>

          <p className="mb-6 text-sm text-gray-400">
            Share your thoughts and experience with us.
          </p>
          <FeedbackUpdateForm
            feedbackDetails={feedbackDetails}
          ></FeedbackUpdateForm>
        </div>
      </div>
    </div>
  );
};

export default AddFeedBack;
