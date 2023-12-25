import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import TrendingProd from "../components/home/TrendingProd";
import Poster from "../components/home/Poster";
import DiscountProd from "../components/home/DiscountProd";
import { addProd } from "../redux/slices/products/product";
import { useDispatch, useSelector } from "react-redux";
import data from "../data";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  const products = data.products;
  useEffect(() => {
    if (!items.prods.length > 0) {
      dispatch(addProd(products));
    }
  }, []);

  return (
    <>
      <Hero />
      <Banner />
      <TrendingProd />
      <Poster />
      <DiscountProd />
    </>
  );
};

export default Home;
