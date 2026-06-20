"use client";

import ReviewCard from "@/components/cards/ReviewCard";
import ReviewCardSkeleton from "./ReviewCardSkeleton";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="my-5">
        <div className="grid grid-cols-3 gap-5">
          {[...Array(12)].map((_, idx) => (
            <ReviewCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-5">
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
