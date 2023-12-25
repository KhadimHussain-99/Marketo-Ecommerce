import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../../data";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // swiper , prod title, collection btn and prod imgs
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("products");
  };

  return (
    <section className="bg-gray-100 min-w-[320px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop="true"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto h-[100vh] md:h-[80vh] lg:h-[90vh]"
      >
        {data.hero.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto h-[100vh] md:h-[80vh] lg:h-[90vh] flex justify-center items-center flex-col px-2 md:px-4 overflow-hidden">
              <div className="absolute top-4 md:top-20 lg:top-32 md:left-16 lg:left-24 left-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-roboto font-bold">
                  Relogio faminino
                </h1>
                <p className="text-[10px] md:text-sm lg:text-lg text-gray-500 my-2 md:my-4">
                  Titanium Grade 2 folding clasp and safety push buttons with{" "}
                  <br />
                  black carbide coating Stocking the finest luxury <br /> watch
                  brands, we specialise
                </p>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-orange-600 md:my-2">
                  $1,200{" "}
                  <span className="text-gray-400 text-base md:text-lg lg:text-xl font-medium line-through">
                    $1,500
                  </span>
                </h3>
                <button
                  onClick={handleClick}
                  className="text-white text-sm lg:text-base font-semibold uppercase bg-orange-500 transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70 w-[180px] md:w-[240px] py-3 md:py-4 mt-2 md:mt-4 lg:mt-5 rounded"
                >
                  view collections
                </button>
              </div>
              <img
                className=" absolute bottom-8 sm:bottom-20 md:bottom-28 sm:right-32 lg:right-32 lg:bottom-28 md:-right-7 w-[230px] md:w-[250px] lg:w-[280px] h-[280px] md:h-[300px] lg:h-[320px] hover:animate-bounce"
                src={image}
                alt="Watch Picture Logo"
              />
              <img
                className="w-[500px] absolute -bottom-12 sm:-bottom-16 md:-right-14 lg:right-10 lg:-bottom-10"
                src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/water.png"
                alt="Water Logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
