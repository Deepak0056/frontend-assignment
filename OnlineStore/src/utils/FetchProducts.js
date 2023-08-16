import React,{useState} from "react";
import axios from "axios"; // Import Axios for making API requests


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
  console.log(fetchProducts)


export default fetchProducts;
