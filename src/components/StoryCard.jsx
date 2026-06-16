import React from "react";

const StoryCard = ({ storyData }) => {
  const { id, name, designation, company, story, image } = storyData;
  return (
    <div>
      <div className="bg-gray-800 p-5 rounded-2xl">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <div className="w-20 h-20 rounded-full p-1 overflow-hidden border-2 border-white/30">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
