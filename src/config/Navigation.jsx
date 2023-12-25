import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Terms from "../components/Terms";
import FAQs from "../components/FAQs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import About from "../components/About";
import Wishlist from "../components/Wishlist";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="terms" element={<Terms />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Navigation;
