import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="pb-16 pt-4 px-16 flex flex-col gap-8">
      <div className="px-44 py-6">
        <h1 className="text-[42px] font-semibold ">Home</h1>
        <hr className="mt-10 -mb-16 border-b-4 w-full animate-hr border-blue-500  duration-700" />
      </div>
      <Products />
    </div>
  );
};

export default Home;
