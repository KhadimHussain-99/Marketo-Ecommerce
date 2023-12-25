import React from "react";
import { Icon } from "@iconify/react";
import { addCart } from "../../redux/slices/products/product";
import { useDispatch } from "react-redux";
import data from "../../data";

const TrendingProd = () => {
  // trending and prod cards, top brands and brand logos

  const dispatch = useDispatch();
  const products = data.products.slice(0, 4);

  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  return (
    <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col">
      <h1 className="text-center text-2xl font-medium my-14">Trending Now</h1>
      <div className="flex flex-col flex-wrap gap-5 md:flex-row justify-between">
        {products.map((prod, index) => {
          return (
            <div
              key={index}
              className="min-w-[10px] flex flex-col flex-grow justify-center items-center border py-10 mx-2 md:px-4 hover:shadow-lg hover:border-orange-300 rounded-md group"
            >
              <img
                className="w-[170px] md:w-[120px] md:h-[100px] lg:w-[200px] lg:h-[170px] cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-70 object-cover"
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
                <span className="text-gray-400 line-through">$720.00</span>{" "}
                $540.00
              </p>
              <button
                onClick={() => addToCart(prod.id)}
                className="flex items-center gap-2 border px-5 md:px-3 lg:px-4 py-2 md:py-1 lg:py-2 cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90 bg-orange-600 text-white mt-4 rounded"
              >
                <Icon icon="solar:cart-4-outline" />
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-2xl font-medium my-14">Top Brands</h1>
      {/* brand logos */}
      <div className="flex flex-col md:flex-row justify-center gap-2 sm:gap-5 py-2 sm:py-5">
        <div className="flex items-center gap-4 justify-between">
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/1-min.png"
            alt=""
          />
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/2-min-1.png"
            alt=""
          />
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/3-min-1.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 justify-between">
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/4-min-1.png"
            alt=""
          />
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/5-min.png"
            alt=""
          />
          <img
            className="w-[50px] sm:w-[130px] md:w-[100px] sm:h-[30px] h-[15px] cursor-pointer"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/6-min.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingProd;
