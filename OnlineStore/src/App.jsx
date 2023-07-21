import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndividualProduct from "./pages/IndividualProduct";
import AddToCart from "./components/AddToCart";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Search from "./pages/Search";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/individualProduct"
            element={<IndividualProduct />}
          />
          <Route
            exact
            path="/products"
            element={<Products />}
          />
          <Route
            exact
            path="/search"
            element={<Search />}
          />
          <Route exact path="/addToCart" element={<AddToCart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
