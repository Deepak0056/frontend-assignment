// import React, { useState } from "react";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu((prevShowmenu) => !prevShowmenu);
//   };
//   return (
//     // main container
//     <div className="nav w-full bg-red-300 h-[3rem] flex flex-row justify-between">
      
//       <div className="text-3xl font-semibold  pt-1 pl-2">
//         Online<span className="">Store</span> 
//       </div>


// {/* hemburger Code */}
//       <div className=" p-2 cursor-pointer" onClick={toggleMenu}>
//         <div
//           className={`w-6 h-1 mt-1 bg-white ${
//             showMenu ? "rotate-45 translate-y-0.5" : ""
//           }`}
//         ></div>
//         <div
//           className={`w-6 h-1 bg-white mt-1 ${showMenu ? "opacity-0" : ""}`}
//         ></div>
//         <div
//           className={`w-6 h-1 bg-white mt-1 ${
//             showMenu ? "-rotate-45 -translate-y-0.5" : ""
//           }`}
//         ></div>
//       </div>

//           {/* navbar items */}
//         <div className="">

//         </div>



















//       {/* nav items */}
//       {/* <div className={`nav_items ${showMenu ? "flex flex-col" : "hidden"}`}>
//         <ul className="flex justify-end pt-2 gap-3 mr-4 sm:justify-center">
//           <li className="text-xl font-medium cursor-pointer hover:text-white">
//             Home
//           </li>
//           <li className="text-xl font-medium cursor-pointer hover:text-white">
//             Products
//           </li>
//           <li className="text-xl font-medium cursor-pointer hover:text-white">
//             Contact
//           </li>
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default Navbar;
