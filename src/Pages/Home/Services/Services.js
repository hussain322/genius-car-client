import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-5">
        <p className="text-red-500 text-xl font-bold">Service</p>
        <h2 className="text-5xl font-bold py-5">Our Service Area</h2>
        <p className="pb-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn text-[#FF3811] btn-outline hover:bg-[#FF3811] hover:border hover:border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
