import React from "react";
import Hero from "../components/Hero";
import RecentTrips from "../components/RecentTrips";

const LandingPage = () => {
  return (
    <div
      // style={{ backgroundPositionX: "-30px", backgroundSize: "1630px" }}
      className="bg-bg pb-7 h-[1024px] gap-[196px] flex flex-col justify-end items-center bg-bottom bg-cover bg-no-repeat backdrop-contrast-75"
    >
      <Hero />
      <RecentTrips />
    </div>
  );
};

export default LandingPage;
