import React from "react";
import { recentTripsData } from "../data/recentTripsData";

const RecentTripsCard = ({ title, date, thumbnail }) => {
  return (
    <div className="relative ">
      <img className="rounded-2xl" src={thumbnail} alt="thumbnail" />
      <div className="absolute bottom-6 ml-6 ">
        <h3 className="text-white text-lg">{title}</h3>
        <h4 className="text-sm text-gray-400">{date}</h4>
      </div>
    </div>
  );
};

function RecentTrips() {
  return (
    <div className="px-24 mt-10 ">
      <h1 className="text-3xl  font-semibold text-white">Recent Trips</h1>
      <div className="py-4 grid grid-cols-3 justify-self-center gap-20">
        {Array.isArray(recentTripsData) &&
          recentTripsData.map((item, idx) => (
            <div key={idx}>
              <RecentTripsCard
                title={item.title}
                date={item.date}
                thumbnail={item.thumbnail}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecentTrips;
