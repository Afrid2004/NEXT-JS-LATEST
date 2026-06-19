import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const StoryCard = ({ storyData }) => {
  const { id, name, designation, company, story, image } = storyData;
  return (
    <div>
      <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <div className="w-20 h-20 rounded-full p-1 overflow-hidden border-2 border-amber-400">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl flex items-center gap-2 justify-center mb-2">
              {name} <FaCheckCircle className="text-cyan-400" size={16} />
            </h1>
            <p className="flex items-center gap-1 justify-center">
              <MdWorkOutline className="text-amber-400" />
              {designation} at {company}
            </p>
          </div>
          <div>
            <p className="line-clamp-3 text-center text-white/70 text-sm">
              {story}
            </p>
          </div>

          <Link
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 duration-150 rounded-xl"
            href={`/stories/details/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
