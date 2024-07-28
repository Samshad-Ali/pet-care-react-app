import React from "react";

const Feature = ({ title, value }) => {
  return (
    <div className="flex gap-2 items-center font-semibold">
      <p className="text-gray-400 ">{title} : </p>
      <h2 className="capitalize">{value}</h2>
    </div>
  );
};

export default Feature;
