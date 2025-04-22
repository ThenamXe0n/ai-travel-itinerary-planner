import React from "react";
import notFound from "../assets/pageImages/404notFound.gif";
import { Link, useNavigate } from "react-router-dom";

const PageNotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        background: `url(${notFound})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen relative overflow-hidden lg:items-end bg-[#0c0c0d] h-screen flex items-center justify-center"
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="w-72 h-20  lg:-translate-y-12 md:translate-y-56 translate-y-48 border-white"
      ></button>
    </section>
  );
};

export default PageNotFoundPage;
