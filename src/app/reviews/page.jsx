"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  //client side rendering
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
          {[...Array(12)].map((_, idx) => {
            return <ReviewCardSkeleton key={idx}></ReviewCardSkeleton>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="my-5">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Food Reviews</h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            {reviews.map((review) => {
              return <ReviewCard key={review.id} review={review}></ReviewCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
