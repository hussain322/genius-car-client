import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt="" />
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
          <button className="btn btn-error mr-5 text-white">
            Discover More
          </button>
          <button className="btn btn-error btn-outline text-white">
            Latest Project
          </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
