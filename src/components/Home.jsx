import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Card from "./Card";
const Home = () => {
  const data = useSelector((state) => state?.slice?.data);
  if (data === null) return <Loader />;
  return (
    <div className="p-2 w-full flex flex-col gap-2">
      {data?.map((item) => (
        <Card key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default Home;
