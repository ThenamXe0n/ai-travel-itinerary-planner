import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { carRentData } from "../data/rentData";

const RentCard = ({ carName, carNumber, address, price, carImg }) => {
  return (
    <div className="flex items-center gap-8 mx-auto justify-between max-w-3xl pt-10 ">
      <div className="left">
        <h1 className="font-semibold text-xl">{carName}</h1>
        <h2 className="text-gray-500 mt-2">{carNumber}</h2>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-center gap-4">
            <CiLocationOn className="text-xl " />
            <h1 className="text-lg">{address}</h1>
          </div>
          <div className="flex items-center  gap-4">
            <FaDollarSign className="text-xl " />
            <h1 className="text-xl font-semibold">{price}</h1>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={carImg} alt="carImg" />
      </div>
    </div>
  );
};

function Rent() {
  return (
    <div className="px-40">
      <h1 className="text-2xl pt-36 font-semibold">You can Rent</h1>
      <div className="px-72">
        <ul className="flex items-center gap-4 font-semibold  ">
          <li className="border-2 border-black px-4 py-2 rounded-full bg-black text-white cursor-pointer transition-all">
            Cars
          </li>
          <li className="border-2 border-black px-4 py-2 rounded-full">
            Bike
          </li>
          <li className="border-2 border-black px-4 py-2 rounded-full">
            Travellers
          </li>
          <li className="border-2 border-black px-4 py-2 rounded-full">
            Restaurants
          </li>
          <li className="border-2 border-black px-4 py-2 rounded-full">
            Hotels
          </li>
          <li className="border-2 border-black px-4 py-2 rounded-full">
            Stays
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center mx-auto justify-between max-w-3xl pt-10 ">
        {carRentData.map((item, idx) => (
          <div key={idx}>
            <RentCard
              carName={item.carName}
              carNumber={item.carNumber}
              address={item.address}
              price={item.price}
              carImg={item.carImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rent;
