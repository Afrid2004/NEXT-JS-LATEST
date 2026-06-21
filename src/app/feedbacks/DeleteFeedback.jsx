"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteFeedback = ({ feedback }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const confrm = confirm("Do you really want to delete?");
    if (!confrm) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/feedback/${id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    if (data.deletedCount) {
      router.refresh();
      alert(`ID: ${id} has been deleted!`);
    } else {
      alert(data.message);
    }
  };
  return (
    <button
      onClick={() => handleDelete(feedback._id)}
      className="rounded-lg cursor-pointer bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteFeedback;
