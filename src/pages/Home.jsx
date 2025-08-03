import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/productList";

const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
};

export default Home;
