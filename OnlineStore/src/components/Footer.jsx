import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-blue-500 justify-center items-center gap-4 p-4 text-[22px] font-semibold shadow-lg text-white md:px-14 lg:px-20 lg:pt-8">
      <div className="flex w-full justify-between px-4 ">
        <div className="flex flex-col">
          <h1>Site: Online Store</h1>
          <h2 className="text-[20px]">Type: Assignment</h2>
          <h3 className="text-[18px]">Developer: Deepak Katwal</h3>
        </div>
        <div className="flex flex-col underline items-end">
          <Link to="/">
            Home <ExternalLinkIcon />
          </Link>
          <Link to="/products">
            Products <ExternalLinkIcon />
          </Link>
          <Link to="/search">
            Search <ExternalLinkIcon />
          </Link>
        </div>
      </div>
      <div className="text-[14px]">©2023 Online Store</div>
    </div>
  );
};

export default Footer;
