"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FeedbackForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value.trim();
    const postData = {
      message,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    if (data.insertedId) {
      router.push("/feedbacks");
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your feedback here..."
          className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 outline-none transition focus:border-amber-400"
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-amber-500 px-4 py-3 font-semibold text-black transition hover:bg-amber-400"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
