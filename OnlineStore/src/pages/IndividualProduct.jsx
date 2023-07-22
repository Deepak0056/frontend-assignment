import React from "react";
import { Link } from "react-router-dom";

import Rating from "../components/Rating";
import { ChatIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
const IndividualProduct = () => {
  const rating = 3.5;
  return (
    <div className="flex flex-col justify-center items-center gap-4  px-16 py-8">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-semibold text-[34px] ">{product[0].title}</h2>
          <div className="border-2 rounded-lg w-full flex justify-center p-2 sm:p-8">
            <img
              src={product[0].image}
              alt=""
              className="w-[170px] h-[170px] px-4"
            />
          </div>
          <p className="font-semibold text-[24px]">Rs. {product[0].price}</p>
        </div>
        <div className="flex flex-col gap-4 py-4 ">
          <div>
            <h3 className="hidden sm:block text-[28px] font-semibold">
              Description
            </h3>
            <p className="italic text-[18px]">{product[0].description}</p>
          </div>
          <div>
            <h3 className="hidden sm:block text-[24px] font-semibold">
              Rating
            </h3>
            <p className="italic text-[18px] font-semibold flex flex-col gap-2">
              <p className="flex gap-4">
                <p className="flex gap-1 items-center">
                  {product[0].rating.rate}
                  <StarIcon boxSize={12} color="blue" />
                </p>
                <p className="flex gap-1 items-center">
                  {product[0].rating.count}
                  <Icon as={ChatIcon} viewBox="0 0 50 50"
                  boxSize={12} color="blue">
                  </Icon>
                </p>
              </p>
              <Rating rating={parseFloat(product[0].rating.rate)} />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Link
          to="/"
          className="bg-blue-400 text-white font-semibold hover:bg-blue-500 rounded-lg px-4 py-2 "
        >
          ← Go to Home
        </Link>
      </div>
    </div>
  );
};

export default IndividualProduct;
