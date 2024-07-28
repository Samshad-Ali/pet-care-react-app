import Loader from "./Loader";
import Feature from "./Feature";
import usePetdetail from "../hooks/usePetdetail";

const Petdetail = () => {
  const { detailPetData } = usePetdetail();
  if (detailPetData === null) return <Loader />;
  return (
    <div className="w-full flex flex-col  gap-2 items-center justify-center  rounded-md p-2 md:p-4">
      <div className=" flex md:flex-row flex-col w-full gap-4">
        <img
          className="rounded-md w-full h-[250px] md:h-[500px] object-cover"
          src={detailPetData?.images[0]}
          alt="animal-photo"
        />
        <div className="flex flex-wrap flex-row md:flex-col gap-5 md:gap-2 items-center justify-center">
          {detailPetData?.images.slice(1).map((item) => (
            <img
              className="rounded-md h-[80px] md:h-[120px] object-cover w-[142px] md:w-[300px]"
              src={item}
              alt="photo"
            />
          ))}
        </div>
      </div>
      <div className="mt-2 md:mt-0 flex-1 flex flex-col gap-2 self-start">
        <div className="flex gap-2 items-center text-lg font-bold">
          <p className="text-gray-400 ">Name : </p>
          <h2 className="text-orange-500">{detailPetData?.name}</h2>
        </div>
        <p className=" font-semibold text-gray-600">
          {detailPetData?.description}
        </p>
        <Feature title="Animal" value={detailPetData?.animal} />
        <Feature title="Breed" value={detailPetData?.breed} />
        <Feature title="City" value={detailPetData?.city} />
      </div>
    </div>
  );
};

export default Petdetail;
