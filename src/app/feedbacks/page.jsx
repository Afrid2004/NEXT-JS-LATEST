import FeedBackCard from "@/components/cards/FeedBackCard";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

//ssr
const getAllFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/feedback`, {
    // cache: "force-cache",
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

const FeedBacks = async () => {
  const feedbacks = await getAllFeedbacks();
  return (
    <div className="my-5">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">All Feedbacks</h1>
          <div className="flex items-center gap-1">
            <Link
              className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center"
              href="/feedbacks/add-feedback"
            >
              Add Feedback
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {feedbacks.length > 0
            ? feedbacks.map((feedback) => {
                return (
                  <FeedBackCard
                    key={feedback._id}
                    feedback={feedback}
                  ></FeedBackCard>
                );
              })
            : "No data found!"}
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
