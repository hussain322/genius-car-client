import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-1/2">
        <p className="text-white text-lg">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-1/2">
        <button className="btn bg-[#FF3811] hover:bg-[#FF3811] mr-5 text-white">
          Discover More
        </button>
        <button className="btn text-[#FF3811] btn-outline hover:bg-[#FF3811] hover:border hover:border-[#FF3811]">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:border hover:border-[#FF3811]"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle hover:bg-[#FF3811] hover:border hover:border-[#FF3811]"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
