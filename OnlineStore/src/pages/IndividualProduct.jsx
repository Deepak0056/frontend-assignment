import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";
import { ChatIcon, Icon, StarIcon } from "@chakra-ui/icons";

const IndividualProduct = () => {
  const rating = 3.5;
  const paramsId = useParams();
  const id = paramsId.productId;

  const [products, setProducts] = useState([]); // State to store the fetched products
  const [error, setError] = useState(null); // State to store any errors during the API request

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Set the fetched products in the state
    } catch (error) {
      // Create a more informative error object
      setError({
        message: "An error occurred while fetching products.",
        originalError: error, // Store the original error for debugging if needed
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  console.log(id);

  // Check if products array is empty or the required index is out of bounds
  if (products.length === 0 || id >= products.length) {
    return "Loading"; // You can show a loading indicator or handle the loading state in another way
  }

  const product = products[id]; // Get the product data

  return (
    <div className="flex flex-col justify-center items-center gap-4  px-16 py-8">
      <div className="flex flex-col sm:flex-row gap-8 justify-around ">
        <div className="flex flex-col items-center gap-8 w-[50%]">
          <h2 className="font-semibold text-[34px] ">{products[id].title}</h2>
          <div className="border-2 rounded-lg w-[60%] flex justify-center p-2 sm:p-8">
            <img
              src={products[id].image}
              alt="Image"
              className="w-[170px] h-[170px] px-4"
            />
          </div>
          <p className="font-semibold text-[24px]">Rs. {products[id].price}</p>
        </div>
        <div className="flex flex-col gap-4 py-4  w-[50%]">
          <div className="w-[90%]">
            <h3 className="hidden sm:block text-[28px] font-semibold">
              Description
            </h3>
            <p className="italic text-[18px]"> {products[id].description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="hidden sm:block text-[24px] font-semibold">
              Rating
            </h3>
            <p className="italic text-[18px] font-semibold flex flex-col gap-2">
              <p className="flex gap-4">
                <p className="flex gap-1 items-center">
                {products[id].rating.rate}
                  <StarIcon boxSize={12} color="blue" />
                </p>
                <p className="flex gap-1 items-center">
                {products[id].rating.count}
                  <Icon as={ChatIcon} viewBox="0 0 50 50"
                  boxSize={12} color="blue">
                  </Icon>
                </p>
              </p>
              <Rating rating={parseFloat(products[id].rating.rate)} />
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
