import React from "react";

const TechnologyDetails = ({ techResult }) => {
  const { icon, name, type, creator } = techResult;
  return (
    <div>
      <div className="my-7 flex items-center justify-center">
        <div className="bg-gray-800 p-7 rounded-2xl w-full max-w-lg">
          <div>
            <div className="mb-5 w-17 h-17 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto">
              {icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-3">{name}</h2>
              <p className="text-center text-lg text-cyan-400 mb-3">{type}</p>
              <p className="text-center text-lg">
                Created by <span className="text-cyan-400">{creator}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetails;
