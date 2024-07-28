import React from "react";
import Feature from "./Feature";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { name, id, description, breed, animal, images, city } = data;
  return (
    <div className="w-full h-auto md:h-72 flex flex-col md:flex-row gap-2 items-center justify-center border border-orange-500 rounded-md p-2 md:p-4">
      <img
        className="rounded-md w-full md:w-[400px] h-[220px] md:h-[260px] object-cover"
        src={images[0]}
        alt="animal-photo"
      />
      <div className="mt-2 md:mt-0 flex-1 flex flex-col gap-2 self-start">
        <div className="flex gap-2 items-center text-lg font-bold">
          <p className="text-gray-400 ">Name : </p>
          <h2 className="text-orange-500">{name}</h2>
        </div>
        <p className="line-clamp-2 font-semibold text-gray-600">
          {description}
        </p>
        <Feature title="Animal" value={animal} />
        <Feature title="Breed" value={breed} />
        <Feature title="City" value={city} />

        <Link
          className=" md:self-start font-semibold border border-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-md px-4 p-2 text-center"
          to={`/petdetails/${id}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
