import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Nav = () => {
  return (
    <div className="bg-blue-500 h-[4rem] flex justify-between z-50 text-white shadow-lg">
      <Link to="/" className="text-3xl font-semibold px-8 py-2">
        Online<span className="">Store</span>
      </Link>

      <div className="hidden md:flex md:items-center md:gap-4 lg:gap-10 p-8 text-xl font-semibold">
        <a href="/" className="hover:border-b-4 border-white pb-1">Home</a>
        <a href="/products" className="hover:border-b-4 border-white pb-1">Products</a>
        <a href="/search" className="hover:border-b-4 border-white pb-1">Search</a>
      </div>

      <Hamburger />
    </div>
  );
};

export default Nav;
