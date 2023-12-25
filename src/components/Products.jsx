import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, addCart } from "../redux/slices/products/product";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  const handleSubmit = () => {
    const searchTerm = document.getElementById("search").value;
    dispatch(search(searchTerm));
    document.getElementById("search").value = "";
  };

  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  return (
    <>
      <div className="w-full bg-gray-50 h-[80px] mt-6 px-4 flex items-center gap-3">
        <Link className="text-gray-500 flex items-center gap-1" to="/">
          <Icon icon="bx:home" /> Home
        </Link>
        <Icon icon="iconamoon:arrow-right-2-duotone" />
        Products
      </div>
      <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col md:flex-row gap-2 py-10">
        <div className="w-[100%] md:w-[25%] flex flex-col items-center justify-center gap-5 h-[70vh] px-4 py-5 rounded-md bg-gray-50">
          <div className=" flex items-center gap-1">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="search"
            >
              Search:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
            />
          </div>
          <button
            onClick={handleSubmit}
            className=" bg-gray-500 active:bg-blue-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        <div className="w-[100%] md:w-[75%] mx-auto flex flex-col md:flex-row gap-4 flex-wrap">
          {items.searchedProds.map((prod, index) => (
            <div
              key={index}
              className="min-w-[180px] flex flex-col justify-center flex-grow items-center border py-10 md:px-4 group hover:shadow-lg rounded-md hover:border-green-100"
            >
              <img
                className="w-[180px] md:w-[120px] md:h-[100px] lg:w-[200px] lg:h-[170px] cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-80 object-cover rounded-md"
                src={prod.image}
                alt="Watch picture"
              />
              <span className="text-base md:text-sm font-medium text-gray-500 py-2">
                {prod.category}
              </span>
              <h1 className="text-lg md:text-base lg:text-lg font-semibold">
                {prod.name}
              </h1>
              <p className="text-base md:text-sm lg:text-base my-2 font-medium">
                {prod.price}
              </p>
              <button
                onClick={() => addToCart(prod.id)}
                className="flex items-center gap-2 outline-none focus:bg-orange-600 px-5 md:px-3 lg:px-4 py-2 md:py-1 lg:py-2 cursor-pointer transition-opacity duration-300 ease-in-out bg-orange-500 hover:bg-orange-400 text-white rounded-lg mt-4"
              >
                <Icon icon="solar:cart-4-outline" />
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
