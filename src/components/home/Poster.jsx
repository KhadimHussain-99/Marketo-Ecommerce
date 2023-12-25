import React from "react";
import { useNavigate } from "react-router-dom";

const Poster = () => {
  // intro poster

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("products");
  };

  return (
    <section className="min-w-[320px] relative overflow-hidden bg-gray-100 mt-10 h-[100vh] sm:h-[80vh] md:h-[60vh] lg:h-[70vh]">
      <div className=" max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col md:flex-row md:justify-end md:items-end ">
        <div className="pl-10 pt-10 md:pt-20 md:pl-1 md:pr-5 lg:pr-10">
          <h1 className="text-2xl font-medium">
            We are the leading Luxury <br />
            watch retailer in UK.
          </h1>
          <p className="text-sm text-gray-500">
            Stocking the finest luxury watch brands, we specialise in <br />{" "}
            sourcing new and used quality timepieces through our <br /> website
          </p>
          <button
            onClick={handleClick}
            className="text-white text-sm lg:text-base font-semibold uppercase bg-gray-800 hover:bg-gray-900 w-[180px] md:w-[240px] py-3 md:py-4 mt-2 md:mt-4 lg:mt-5 rounded"
          >
            view collections
          </button>
        </div>
        <img
          className="w-[70%] object-cover lg:w-[60%] h-[250px] sm:h-[280px] md:h-[100%] absolute bottom-0 md:-top-8 lg:top-0 left-16 md:-left-36 lg:left-5 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
          src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2021/06/watch-bb-1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Poster;
