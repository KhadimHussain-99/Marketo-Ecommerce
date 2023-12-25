import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/slices/products/product";
import { addWishlist } from "../../redux/slices/wishlist/wishlist";

const DiscountProd = () => {
  // Tab Menu, Most viewed and Country logos are render by this component

  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  const [value, setValue] = React.useState(0);
  const trend = items.prods.slice(0, 6);
  const sell = items.prods.slice(6, 12);
  const viewed = items.prods.slice(8, 12);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  const addWish = (prod) => {
    dispatch(addWishlist(prod));
  };

  return (
    <>
      <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col">
        {/* tab portion */}
        <div className=" flex flex-col md:flex-row md:gap-0 justify-center items-center mt-20 gap-10">
          <img
            className="w-[300px] h-[800px] md:w-[28%] md:h-[830px]  lg:h-[700px] lg:mt-2"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/ad-min-1.jpg"
            alt="apple watch series banner"
          />
          <div className="w-[100%]  flex flex-col justify-center items-center gap-3">
            <Box sx={{ width: "100%", padding: "0" }}>
              <Box
                className="flex flex-col md:flex-row md:justify-between"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  padding: "0",
                }}
              >
                <h1 className=" text-2xl sm:text-[23px] sm:w-[210px] font-medium ">
                  Discount Product
                </h1>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{
                      minWidth: "70px",
                      maxWidth: "100px",
                      fontSize: "12px",
                    }}
                    label="On Sell"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      minWidth: "70px",
                      maxWidth: "100px",
                      fontSize: "12px",
                    }}
                    label="Hot Sell"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      minWidth: "70px",
                      maxWidth: "100px",
                      fontSize: "12px",
                    }}
                    label="Trend"
                    {...a11yProps(2)}
                  />
                  <Tab
                    sx={{
                      minWidth: "70px",
                      maxWidth: "100px",
                      fontSize: "12px",
                    }}
                    label="Best Sell"
                    {...a11yProps(3)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                  {trend.map((prod, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center pt-10 pb-4 mx-2 md:px-4 hover:shadow-lg flex-grow group"
                      >
                        <img
                          className="w-[180px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[170px] group-hover:bg-opacity-50 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
                          src={prod.image}
                          alt="Watch picture"
                        />

                        <h1 className="text-lg md:text-base font-medium hover:text-blue-600 cursor-pointer lg:text-lg mt-3">
                          {prod.name}
                        </h1>
                        <div className="relative text-sm md:text-xs lg:text-sm my-2 font-medium">
                          <span className="text-gray-400 line-through">
                            $720.00
                          </span>{" "}
                          $540.00
                          <div className="w-[200px] hidden -top-2 -left-4 absolute gap-[1px]  group-hover:flex">
                            <button
                              onClick={() => addToCart(prod.id)}
                              className=" text-xs md:text-[9px] lg:text-xs items-center gap-1 rounded-l-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon icon="solar:cart-4-outline" />
                              Add to cart
                            </button>
                            <button
                              onClick={() => addWish(prod)}
                              className="rounded-r-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex justify-center items-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon
                                className="w-[15px] h-[15px] "
                                icon="ph:heart-thin"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                  {sell.map((prod, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center pt-10 pb-4 mx-2 md:px-4 hover:shadow-lg flex-grow group"
                      >
                        <img
                          className="w-[180px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[170px] hover:bg-opacity-50 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
                          src={prod.image}
                          alt="Watch picture"
                        />

                        <h1 className="text-lg md:text-base font-medium hover:text-blue-600 cursor-pointer lg:text-lg mt-3">
                          {prod.name}
                        </h1>
                        <div className="relative text-sm md:text-xs lg:text-sm my-2 font-medium">
                          <span className="text-gray-400 line-through">
                            $720.00
                          </span>{" "}
                          $540.00
                          <div className="w-[200px] hidden -top-2 -left-4 absolute gap-[1px]  group-hover:flex">
                            <button
                              onClick={() => addToCart(prod.id)}
                              className=" text-xs md:text-[9px] lg:text-xs items-center gap-1 rounded-l-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon icon="solar:cart-4-outline" />
                              Add to cart
                            </button>
                            <button
                              onClick={() => addWish(prod.id)}
                              className="rounded-r-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex justify-center items-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon
                                className="w-[15px] h-[15px] "
                                icon="ph:heart-thin"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                  {trend.map((prod, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center pt-10 pb-4 mx-2 md:px-4 hover:shadow-lg flex-grow group"
                      >
                        <img
                          className="w-[180px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[170px] hover:bg-opacity-50 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
                          src={prod.image}
                          alt="Watch picture"
                        />

                        <h1 className="text-lg md:text-base font-medium hover:text-blue-600 cursor-pointer lg:text-lg mt-3">
                          {prod.name}
                        </h1>
                        <div className="relative text-sm md:text-xs lg:text-sm my-2 font-medium">
                          <span className="text-gray-400 line-through">
                            $720.00
                          </span>{" "}
                          $540.00
                          <div className="w-[200px] hidden -top-2 -left-4 absolute gap-[1px]  group-hover:flex">
                            <button
                              onClick={() => addToCart(prod.id)}
                              className=" text-xs md:text-[9px] lg:text-xs items-center gap-1 rounded-l-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon icon="solar:cart-4-outline" />
                              Add to cart
                            </button>
                            <button
                              onClick={() => addWish(prod.id)}
                              className="rounded-r-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex justify-center items-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon
                                className="w-[15px] h-[15px] "
                                icon="ph:heart-thin"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                  {sell.map((prod, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center pt-10 pb-4 mx-2 md:px-4 hover:shadow-lg flex-grow group"
                      >
                        <img
                          className="w-[180px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[170px] hover:bg-opacity-50 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
                          src={prod.image}
                          alt="Watch picture"
                        />

                        <h1 className="text-lg md:text-base font-medium hover:text-blue-600 cursor-pointer lg:text-lg mt-3">
                          {prod.name}
                        </h1>
                        <div className="relative text-sm md:text-xs lg:text-sm my-2 font-medium">
                          <span className="text-gray-400 line-through">
                            $720.00
                          </span>{" "}
                          $540.00
                          <div className="w-[200px] hidden -top-2 -left-4 absolute gap-[1px]  group-hover:flex">
                            <button
                              onClick={() => addToCart(prod.id)}
                              className=" text-xs md:text-[9px] lg:text-xs items-center gap-1 rounded-l-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon icon="solar:cart-4-outline" />
                              Add to cart
                            </button>
                            <button
                              onClick={() => addWish(prod.id)}
                              className="rounded-r-full px-3 md:px-[13px] lg:px-3 py-2 cursor-pointer flex justify-center items-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                            >
                              <Icon
                                className="w-[15px] h-[15px] "
                                icon="ph:heart-thin"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CustomTabPanel>
            </Box>
          </div>
        </div>
        {/* most viewed portion */}
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-medium my-16">
            Most Viewed
          </h1>
          <div className="flex flex-col gap-0 md:flex-row justify-between mt-5">
            {viewed.map((prod, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border py-10 mx-2 md:px-4 hover:shadow-lg group"
              >
                <img
                  className="w-[180px] md:w-[110px] md:h-[100px] lg:w-[200px] lg:h-[170px] hover:bg-opacity-50 cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:opacity-70"
                  src={prod.image}
                  alt="Watch picture"
                />
                <span className="text-base md:text-sm lg:text-base font-medium text-gray-500 py-2">
                  {prod.category}
                </span>
                <h1 className="text-base md:text-sm lg:text-lg font-semibold">
                  {prod.name}
                </h1>
                <p className="text-sm md:text-xs lg:text-base my-2 font-medium">
                  <span className="text-gray-400 line-through">$720.00</span>{" "}
                  $540.00
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* country logos */}
      <div className="min-w-[320px] w-full flex flex-col md:flex-row justify-evenly md:justify-center bg-gray-100 py-5 mt-16">
        <div className="w-[100%] md:w-[50%] flex flex-col md:flex-row md:justify-evenly items-center">
          <div className="w-[33%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/canada.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">Canada</p>
          </div>
          <div className="w-[33%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/usa.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">
              United States
            </p>
          </div>
          <div className="w-[33%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/saudi.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">
              Saudi Arabia
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[45%] flex flex-col md:flex-row md:justify-evenly items-center">
          <div className="w-[33%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/uk.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">
              United Kingdom
            </p>
          </div>
          <div className="w-[25%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/brazil.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">Brazil</p>
          </div>
          <div className="w-[33%] flex flex-col md:flex-row md:gap-4 justify-start items-center p-4 gap-2">
            <img
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/singapore.png"
              alt=""
            />
            <p className="text-gray-500 text-base font-semibold">Singapore</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountProd;
