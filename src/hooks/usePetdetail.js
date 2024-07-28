import React, { useEffect, useState } from "react";
import { commonApi } from "../api/commonApi";
import { useParams } from "react-router-dom";

const usePetdetail = () => {
  const [detailPetData, setDetailPetData] = useState(null);
  const { id } = useParams();
  const petDetailsList = async (query) => {
    const data = await commonApi(query);
    setDetailPetData(data?.pets.find((item) => item.id === parseInt(id)));
  };
  useEffect(() => {
    petDetailsList(`pets?id=${id}`);
  }, []);
  return {
    detailPetData,
  };
};

export default usePetdetail;
