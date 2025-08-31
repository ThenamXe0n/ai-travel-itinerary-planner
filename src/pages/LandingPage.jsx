import React from "react";
import Hero from "../components/Hero";
import RecentTrips from "../components/RecentTrips";
import Button from "../components/ui/Button";
import FeatureCard from "../components/ui/FeatureCard";
import { keyFeatureData } from "../data/landingData";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </section>
  );
};

const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="h-screen relative z-10 bg-white px-4 max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-6"
      >
        <h1 className="text-center text-3xl md:text-6xl font-bold  ">
          Simplify your Group Travel <br /> Planning Experience
        </h1>
        <p className="text-center text-lg">
          Our innovative travel itinerary planner is designed to make group
          travel effortless and enjoyable. With expert insights and personalized
          suggestions, you can create unforgettable journeys tailored to your
          group's unique interests.
        </p>
        <div className="flex items-center justify-start gap-x-6">
          <Link to={"/register"} className="px-6 py-2 bg-black text-white  ">
            Get Started
          </Link>
          <button
            className={
              "px-6 py-2   border bg-white text-black!important border-black"
            }
          >
            Learn More
          </button>
        </div>
      </section>
      <div className="max-w-6xl h-[80vh] overflow-hidden  bg-gray-400 mx-auto ">
        <img
          className="object-cover object-center h-full w-full"
          src="./assets/landingImages/landing1.jpg"
          alt="posterImg"
        />
      </div>
    </>
  );
};

const SecondSection = () => {
  return (
    <section className="h-screen w-screen py-36">
      <div className="w-full px-16 mx-auto flex items-center">
        <div className="flex-1 flex flex-col justify-center gap-y-10 p-10 ">
          <h4 className="text-5xl font-bold ">
            Effortless Trip Planning with Drag-and-Drop
          </h4>
          <p className="text-[18px]">
            Our drag-and-drop scheduling feature revolutionizes how you plan
            group tours. Easily customize your itinerary by moving activities
            around, ensuring a perfect fit for everyone’s preferences.
          </p>
          <ul id="keyFeature-list">
            <li>Simplify your travel planning with ease and flexibility.</li>
            <li>Collaborate in real-time with your travel companions.</li>
            <li>Create personalized itineraries that suit every traveler.</li>
          </ul>
          <div className="flex items-center justify-start gap-x-6">
            <button
              className={
                "px-6 py-2   border bg-white text-black!important border-black"
              }
            >
              Learn More
            </button>
            <button className={"px-6 py-2    bg-white text-black!important "}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center  h-full">
          <img
            src="./assets/landingImages/landing3.jpg"
            alt="groupPlanning-poster"
            className="w-[516px] h-[500px] rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  return (
    <section className="py-12 px-36">
      <p className="text-center my-4 font-medium">Plan</p>
      <h3 className="text-5xl font-bold text-center">
        Transform Your Group Travel <br />
        Experience Effortlessly
      </h3>
      <p className="text-center text-lg max-w-3xl mx-auto my-4">
        Our itinerary planner makes group travel seamless and enjoyable.
        Collaborate in real-time, ensuring everyone's preferences are met.
      </p>

      <div className="mt-20 grid grid-cols-3 gap-x-20">
        {keyFeatureData.map((item, idx) => (
          <div key={idx}>
            <FeatureCard title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>

        <div className="flex mb-16 items-center justify-center gap-x-6">
          <button
            className={
              "px-6 py-2   border bg-black text-white border-black"
            }
          >
            Learn More
          </button>
          <button className={"px-6 py-2 border-2 border-black     bg-white text-black!important "}>
            Sign Up
          </button>
        </div>
   
    </section>
  );
};

const ForthSection = () => {
  return (
    <section className="h-screen w-screen ">
      <div className="w-full px-16 mx-auto flex items-center">
        <div className="flex-1 flex flex-col justify-center gap-y-10 p-10 ">
          <h4 className="text-5xl font-bold ">
            Transform Your Group Travel Planning with Our Intuitive Itinerary
            Planner
          </h4>
          <p className="text-[18px]">
            Our itinerary planner simplifies group travel by streamlining the
            planning process, saving you valuable time. Enjoy a tailored travel
            experience with expert insights and personalized recommendations
            that cater to every traveler's needs.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center  h-full">
          <div className="w-[516px] h-[500px] rounded-lg bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
