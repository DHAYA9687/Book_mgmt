import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Backbutton = ({ destination = "/" }) => {
  return (
    <div className="flex px-2 ">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-3xl" />
        <span className="text-1xl">Back</span>
      </Link>
    </div>
  );
};

export default Backbutton;
