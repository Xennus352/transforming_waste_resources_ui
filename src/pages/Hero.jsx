import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/recycle-sign.png";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
        <div className="flex items-center flex-col gap-1">
          <p className="text-4xl">Transforming waste into </p>
          <div className="flex items-center gap-4">
          <p className="italic text-3xl text-primary">Resources</p>
          <span className="w-14 animate-spin transition-all duration-1000 ease-in-out">
            <img src={Logo} alt="Logo" />
          </span>
          </div>
        </div>
        <div>
          <div className="btn btn-outline">
            <Link to="/">Let's Get Start..</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
