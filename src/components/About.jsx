import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full bg-gray-50 h-[80px] mt-6 px-4 flex items-center gap-3">
        <Link className="text-gray-500 flex items-center gap-1" to="/">
          <Icon icon="bx:home" /> Home
        </Link>
        <Icon icon="iconamoon:arrow-right-2-duotone" />
        About
      </div>
      <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col lg:flex-row lg:my-16">
        <div className="flex flex-col py-5 px-8">
          <p className="text-blue-700 text-base uppercase">our history</p>
          <h1 className="text-3xl font-bold my-4">
            Creative and renovate fashion trends
          </h1>
          <p className="text-base text-gray-700 leading-6 my-3">
            Collaboratively administrate empowered markets via plug-and-play
            maintain networks. Dynamically usable procrastinate B2B users after
            installed base benefits. Dramatically visualize customer directed
            convergence without revolutionary ROI.
          </p>
          <div className="flex flex-col md:flex-row my-10 gap-5">
            <div className="flex flex-col">
              <h3 className="text-4xl text-blue-700">12</h3>
              <p className="text-bse text-gray-700">Years Experience</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl text-blue-700">20K</h3>
              <p className="text-bse text-gray-700">Happy Customers</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl text-blue-700">100%</h3>
              <p className="text-bse text-gray-700">Clients Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center  lg:justify-start lg:pr-5">
          <img
            className="w-[100%] md:w-[500px] object-cover"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/about_us_img_111.png"
            alt=""
          />
        </div>
      </section>
      <div className="w-full flex flex-col pt-16 px-2 lg:px-16 mt-16 bg-gray-100">
        <div className="w-[100%] flex justify-center">
          <img
            className="w-[100%] md:w-[600px] object-cover"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/05/about_us_img_21.png"
            alt=""
          />
        </div>
        <p className="text-blue-700 text-base lg:text-xl mt-8">our vision</p>
        <h1 className="text-3xl lg:text-5xl font-bold my-4">
          We are marketpress
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-6 my-3">
          Dynamically procrastinate B2C users after installed base benefits.
          Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </p>
        <div className="flex flex-col gap-3 my-8">
          <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-700">
            <Icon
              className="w-[20px] h-[20px] text-green-600"
              icon="dashicons:yes"
            />
            Credibly innovate granular internal
          </p>
          <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-700">
            <Icon
              className="w-[20px] h-[20px] text-green-600"
              icon="dashicons:yes"
            />
            Grantedly underconstructions reloaded
          </p>
          <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-700">
            <Icon
              className="w-[20px] h-[20px] text-green-600"
              icon="dashicons:yes"
            />
            Interactively procrastinate high-payoff
          </p>
          <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-700">
            <Icon
              className="w-[20px] h-[20px] text-green-600"
              icon="dashicons:yes"
            />
            Completely synergize resource taxing relationships
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
