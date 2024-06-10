import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const location = useLocation();

  useEffect(() => {
    setProductDetail(location.state);
  }, []);

  console.log("location", location);
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-sm">
        <div>
          <img
            className="h-[350px] object-cover"
            src={
              productDetail.images
                ? productDetail.images
                : "https://dummyimage.com/720x400"
            }
            alt={"title"}
          />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productDetail.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {productDetail.description}
        </p>
      </Card>
    </div>
  );
}
