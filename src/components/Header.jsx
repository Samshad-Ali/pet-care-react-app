import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 shadow-sm shadow-gray-300 flex gap-2 items-center justify-between p-1 md:p-2">
      <Link
        className="w-[40%] md:w-fit flex gap-1 md:gap-2 items-center"
        to={"/"}
      >
        <h1 className="text-sm md:text-lg font-bold">Pet Care. </h1>
        <span className="text-orange-500">
          <MdOutlinePets size={25} />
        </span>
      </Link>
    </div>
  );
};

export default Header;
