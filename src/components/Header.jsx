import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // top section and navbar

  const navigate = useNavigate();
  const [menu, setMenu] = useState("");

  return (
    <header className="w-full bg-gray-100 min-w-[320px] mx-auto">
      <div className="flex flex-col text-gray-950  px-2 md:px-4 min-w-[320px] xs:max-w-[425px] sm:max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto ">
        <div className="hidden md:flex justify-between items-center gap-4 py-3 md:px-3 lg:px-0 text-sm">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-3 border-r border-gray-300 pr-3">
              <Icon
                width={15}
                height={15}
                icon="fluent:vehicle-truck-bag-24-filled"
              />
              Free Delivery
            </p>
            <p className="flex items-center gap-3 border-r border-gray-300 pr-3">
              <Icon width={15} height={15} icon="gridicons:globe" />
              Return Policy
            </p>
            <p className="flex items-center gap-4">
              Follow Us
              <Icon width={15} height={15} icon="gg:facebook" />
              <Icon width={15} height={15} icon="mdi:twitter" />
              <Icon width={15} height={15} icon="mdi:instagram" />
              <Icon width={15} height={15} icon="jam:pinterest" />
            </p>
          </div>
          <Link to="/login">Login</Link>
        </div>
        <hr className="hidden md:block" />
        <nav className=" flex items-center justify-between py-6">
          <Link to="/">
            <img
              className="w-[120px] cursor-pointer"
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/logo.png"
              alt="Marketo Logo"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-4">
            <div
              onMouseEnter={() => setMenu("home")}
              onMouseLeave={() => setMenu("")}
              className="relative"
            >
              <h1 className="flex items-center font-medium gap-1 cursor-pointer">
                Home
                <Icon
                  className="w-[20px] h-[15px]"
                  icon="iconamoon:arrow-down-2-bold"
                />
              </h1>
              {menu === "home" && (
                <div className="absolute z-50 w-[150px] top-50 -left-10 flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-2 py-4">
                  <Link to="/">Home</Link>
                  <Link to="/">Pages</Link>
                  <Link to="/">Shop</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Gallery</Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setMenu("pages")}
              onMouseLeave={() => setMenu("")}
              className="relative"
            >
              <h1 className="flex items-center font-medium gap-1 cursor-pointer">
                Pages
                <Icon
                  className="w-[20px] h-[15px]"
                  icon="iconamoon:arrow-down-2-bold"
                />
              </h1>
              {menu === "pages" && (
                <div className="absolute z-50 w-[180px] top-50 -left-10 flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-2 py-4">
                  <Link to="about">About</Link>
                  <Link to="faqs">FAQ's</Link>
                  <Link to="terms">Terms and conditions</Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setMenu("shop")}
              onMouseLeave={() => setMenu("")}
              className="relative"
            >
              <h1 className="flex items-center font-medium gap-1 cursor-pointer">
                Shop
                <Icon
                  className="w-[20px] h-[15px]"
                  icon="iconamoon:arrow-down-2-bold"
                />
              </h1>
              {menu === "shop" && (
                <div className="absolute z-50 w-[150px] top-50 -left-10 flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-2 py-4">
                  <Link to="products">Products</Link>
                  <Link to="wishlist">WishList</Link>
                  <Link to="/">Shop</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Gallery</Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setMenu("blog")}
              onMouseLeave={() => setMenu("")}
              className="relative"
            >
              <h1 className="flex items-center font-medium gap-1 cursor-pointer">
                Blog
                <Icon
                  className="w-[20px] h-[15px]"
                  icon="iconamoon:arrow-down-2-bold"
                />
              </h1>
              {menu === "blog" && (
                <div className="absolute z-50 w-[150px] top-50 -left-10 flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-2 py-4">
                  <Link to="/">Home</Link>
                  <Link to="/">Pages</Link>
                  <Link to="/">Shop</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Gallery</Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setMenu("gallery")}
              onMouseLeave={() => setMenu("")}
              className="relative"
            >
              <h1 className="flex items-center font-medium gap-1 cursor-pointer">
                Gallery
                <Icon
                  className="w-[20px] h-[15px]"
                  icon="iconamoon:arrow-down-2-bold"
                />
              </h1>
              {menu === "gallery" && (
                <div className="absolute z-50 w-[150px] top-50 -left-10 flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-2 py-4">
                  <Link to="/">Home</Link>
                  <Link to="/">Pages</Link>
                  <Link to="/">Shop</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Gallery</Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center w-[200px] lg:w-[70px] justify-evenly sm:justify-between text-orange-600">
            <button className="lg:hidden">
              <Icon
                className="w-[25px] h-[25px] cursor-pointer"
                icon="iconamoon:menu-burger-horizontal-bold"
              />
            </button>
            <div className="flex items-center gap-3">
              <Icon
                onClick={() => navigate("wishlist")}
                className="w-[25px] h-[25px] cursor-pointer"
                icon="ph:star"
              />
              <Icon
                onClick={() => navigate("cart")}
                className="w-[25px] h-[25px] cursor-pointer"
                icon="bytesize:cart"
              />
            </div>
          </div>
        </nav>
        <hr className="hidden md:block" />
      </div>
    </header>
  );
};

export default Header;
