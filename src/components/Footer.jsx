import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  //Footer

  return (
    <>
      <footer className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col pt-10 px-4 xl:px-0">
        <div className="w-[150px] my-5">
          <img
            className="w-[100%]"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/footer-logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-around xl:justify-between mt-5">
          <div className="lg:w-[48%] flex flex-col md:flex-row md:justify-between  md:gap-5 ">
            <div className="lg:w-[50%] flex flex-col">
              <h3 className="text-2xl text-gray-500 font-medium">
                Got Question? Call us 24/7
              </h3>
              <p className="text-xl font-semibold">[80] 1017 197</p>
              <p className="w-[70%] text-sm text-gray-500 my-4 italic">
                17 Princess Road , London, Greater London NW1 8JR, UK
              </p>
              <button className="w-[180px] flex justify-center items-center text-sm font-medium text-white bg-orange-500 px-6 py-4 rounded-lg gap-1 hover:bg-lime-500">
                <Icon icon="bx:map" />
                View On Map
              </button>
            </div>
            <div className="lg:w-[50%] h-[150px] flex flex-col text-gray-800 justify-between mt-8 md:mt-0">
              <p className="text-2xl font-medium">
                <span className="text-gray-400">We Using</span>
                <br /> Safe Payments
              </p>
              <p className="text-lg font-normal">Secured by:</p>
            </div>
          </div>

          <div className="lg:w-[48%] flex flex-col justify-start sm:flex-row sm:justify-around  md:justify-between items-start sm:items-center mt-10 md:mt-0 gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold mb-2">Quick Links</h1>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Support Center
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Term & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Shipping
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Help
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Products Return
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                FAQS
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold mb-2">Our Store</h1>
              <a href="#" className="text-sm text-gray-400 font-normal">
                New York
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                London SF
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Cocfosters BP
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Los Angeles
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Chicago
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Las Vegas
              </a>
              <a href="#" className="text-sm text-gray-400 font-normal">
                Albarto
              </a>
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="w-[190px] h-[60px] flex justify-center items-center text-sm font-medium text-white uppercase bg-orange-500 rounded-lg gap-1 hover:bg-lime-500 sm:-rotate-90"
            >
              backtop{" "}
              <Icon
                className="-rotate-90 sm:rotate-0"
                icon="formkit:arrowright"
              />
            </button>
          </div>
        </div>
      </footer>
      <div className="min-w-[320px] w-full h-[100px] flex flex-col justify-center items-center gap-2 bg-gray-800 text-white mt-10">
        <h1>©Copyrights by XspeedStudio-2023</h1>
        <p>Allow payment base on</p>
      </div>
    </>
  );
};

export default Footer;
