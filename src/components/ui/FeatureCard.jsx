import React from "react";

const FeatureCard = ({img,title,desc}) => {
  return (
    <div className="w-full max-h-[424px] h-[424px]  flex flex-col gap-y-2">
      <div className="w-full h-1/2 bg-gray-400"></div>
      <h5 className="text-3xl font-bold p-3 text-center">
       {title ? title :  "Collaborate in Real-Time with Ease"}
      </h5>
      <p className="text-center text-[1rem]  ">
        {desc ? desc : "Work together with your group to create the perfect itinerary."}
      </p>
    </div>
  );
};

export default FeatureCard;
