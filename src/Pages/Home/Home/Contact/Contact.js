import React from "react";
import { BsFillStopwatchFill, FaWatch } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-black md:flex md:justify-evenly p-16 my-20 rounded-lg">
      <div className="flex items-center">
        <div>
          <BsFillStopwatchFill className="text-[#FF3811] text-4xl" />
        </div>
        <div className="ml-4 text-white">
          <p>We are open Monday-Friday</p>
          <h4 className="text-xl font-semibold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <BsFillStopwatchFill className="text-[#FF3811] text-4xl" />
        </div>
        <div className="ml-4 text-white">
          <p>We are open Monday-Friday</p>
          <h4 className="text-xl font-semibold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <BsFillStopwatchFill className="text-[#FF3811] text-4xl" />
        </div>
        <div className="ml-4 text-white">
          <p>We are open Monday-Friday</p>
          <h4 className="text-xl font-semibold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
