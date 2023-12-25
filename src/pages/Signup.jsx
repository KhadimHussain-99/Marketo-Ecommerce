import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/auth/authentication";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
    navigate("/login");
  };

  return (
    <section className="w-full bg-gray-50">
      <div className="min-w-[320px] h-[100vh] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-5 justify-center items-center">
        <div className="mx-auto w-[80%] md:w-[60%] lg:w-[48%] flex lg:flex-col lg:gap-5 justify-between items-center">
          <Link className="w-[40%] lg:w-[250px]" to="/">
            <img
              className="w-[100%] cursor-pointer object-cover"
              src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/logo.png"
              alt="Marketo Logo"
            />
          </Link>
          <div className="w-[60%] lg:w-[80%] flex flex-col lg:gap-3 pl-4">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-medium">
              We are the leading Luxury watch retailer in UK.
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              Stocking the finest luxury watch brands, we specialise in sourcing
              new and used quality timepieces through our website
            </p>
          </div>
        </div>
        <form className="mx-auto w-[80%] md:w-[60%] lg:w-[48%] bg-white py-6 lg:py-10 px-3 lg:px-5 rounded-lg shadow flex flex-col justify-center gap-2 lg:gap-5">
          <div className="w-full mb-2 lg:mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              First Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-2 lg:mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-2 lg:mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full mb-2 lg:mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-[50%] bg-green-500 hover:bg-gray-500 active:bg-gray-700 text-white font-semibold py-2 mt-2 lg:mt-4 rounded-lg focus:outline-none focus:shadow-outline self-center"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
