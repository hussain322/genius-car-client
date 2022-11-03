import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className=" w-4/5 rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="absolute right-5 top-1/2 rounded-lg w-3/5 shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-xl text-red-500 font-bold">About Us</p>
          <h1 className="text-5xl font-bold py-5">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn text-[#FF3811] btn-outline hover:bg-[#FF3811] hover:border hover:border-[#FF3811]">
            get more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;