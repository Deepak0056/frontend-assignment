// import React from "react";
// import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";

// const Products = () => {

//   // const dispatch = useDispatch();
//   // const products = useSelector((state) => state.products.products);
//   // const error = useSelector((state) => state.products.error);

//   // useEffect(() => {
//   //   dispatch(fetchProducts());
//   // }, [dispatch]);

//   const fetchProducts = async (e) => {
//     try {
//       await axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         dispatch(fetchProductsSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(fetchProductsFailure(error.message));
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   React.useEffect(() => {
//     fetchProducts();
//   }, []);


//   // console.log(products)
//   return (
//     <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 p-16 lg:px-44">
//       {products.map((product) => {
//         return (
//           <div className="flex flex-col justify-center items-center gap-4 border-2 border-blue-100 shadow-lg p-4 rounded-lg hover:scale-105 cursor-pointer ">
//             <h2 className="font-semibold text-xl ">{product.title}</h2>
//             <div className="border-2 rounded-lg w-full flex justify-center p-2 overflow-hidden">
//               <img
//                 src={product.image}
//                 alt=""
//                 className="w-[170px] h-[170px] px-4 hover:scale-105"
//               />
//             </div>
//             <p className="font-semibold text-lg">Rs. {product.price}</p>
//             <p className="italic h-[50px] overflow-hidden">
//               {product.description}
//             </p>
//             <div className="flex justify-end w-full">
//               <Link
//                 to="/individualProduct"
//                 className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg p-2"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making API requests

const Products = () => {
  const [products, setProducts] = useState([]); // State to store the fetched products
  const [error, setError] = useState(null); // State to store any errors during the API request

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Set the fetched products in the state
    } catch (error) {
      setError(error.message); // Set the error message in case of an error
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 p-16 lg:px-44">
      {products.map((product) => {
        return (
          <div
            key={product.id} // Make sure to use a unique key for each item in the map
            className="flex flex-col justify-center items-center gap-4 border-2 border-blue-100 shadow-lg p-4 rounded-lg hover:scale-105 cursor-pointer "
          >
            <h2 className="font-semibold text-xl ">{product.title}</h2>
            <div className="border-2 rounded-lg w-full flex justify-center p-2 overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-[170px] h-[170px] px-4 hover:scale-105"
              />
            </div>
            <p className="font-semibold text-lg">Rs. {product.price}</p>
            <p className="italic h-[50px] overflow-hidden">
              {product.description}
            </p>
            <div className="flex justify-end w-full">
              <Link
                to={`/individualProduct/${product.id-1}`}
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg p-2"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

