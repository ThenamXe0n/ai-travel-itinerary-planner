import React from "react";
import Place1 from "../assets/place1.png";
import Place2 from "../assets/place2.png";
import { tripItineraryData } from "../data/tripItineraryData";

const TripItineraryCard = ({
  title,
  desc,
  image,
  avgPrice,
  avgTimeSpent,
  buttonText,
}) => {
  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      <div className="left">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500 max-w-[600px]">{desc}</p>
        <div className="flex items-center mt-6 justify-start gap-4">
          <h1 className="text-gray-500">Avg Price</h1>
          <p className="font-semibold">{avgPrice}</p>
        </div>
        <div className="flex items-center py-4 justify-start gap-4">
          <h1 className="text-gray-500">Avg time spent</h1>
          <p className="font-semibold">{avgTimeSpent}</p>
        </div>
        <button className="px-4 py-2 rounded-lg border border-black">
          {buttonText}
        </button>
      </div>
      <div className="right">
        <img className="w-60 rounded-xl" src={image} alt="img" />
      </div>
    </div>
  );
};

function TripItinerary() {
  return (
    <div>
      <div className="py-20 px-24">
        <h1 className="font-4xl font-semibold ">Trip Itinerary</h1>

        {tripItineraryData.map((item, idx) => (
          <div key={idx}>
            <TripItineraryCard
              title={item.title}
              desc={item.desc}
              avgPrice={item.avgPrice}
              avgTimeSpent={item.avgTimeSpent}
              image={item.image}
              buttonText={item.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripItinerary;
