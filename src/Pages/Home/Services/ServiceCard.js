import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-[#FF3811] font-semibold text-xl">
            Price: ${price}
          </p>
          <div className="card-actions">
            <FaArrowRight className="text-[#FF3811]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
