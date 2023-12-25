import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <div className="w-full bg-gray-50 h-[80px] mt-6 px-4 flex items-center gap-3">
        <Link className="text-gray-500" to="/">
          Home
        </Link>
        <Icon icon="iconamoon:arrow-right-2-duotone" />
        Terms and Conditions
      </div>
      <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col pt-10 px-4 xl:px-0">
        <div className="w-[100%] md:w-[60%] lg:w-[80%] mx-auto flex flex-col py-7 px-9 border rounded-xl">
          <div className="">
            <h1 className="flex items-center gap-1 text-base font-medium">
              <Icon className="text-blue-700" icon="eva:arrow-right-fill" />
              Types of Personal Information We Collect
            </h1>
            <p className="mt-8 text-sm text-gray-500">
              Personal Information is information that can be used to identify,
              locate, or contact an individual.It also includes other
              information that may be associated with Personal Information. We
              collect the following types of Personal Information:
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Contact Information that allows us to communicate with you, such
              as your name, postal addresses, email addresses, social media
              website user account names, telephone numbers, or other addresses
              at which you receive communications from or on behalf of
              marketpress.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Transaction Information about how you purchase and redeem
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Financial Account Information as needed to process payments for
              marketpress.com that you buy, such as your credit or debit card
              number, expiration date.
            </p>
          </div>
          <div>
            <h1 className="flex items-center gap-1 text-base font-medium mt-10">
              <Icon className="text-blue-700" icon="eva:arrow-right-fill" />
              How marketpress.com Collects Personal Information
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              We ask you for Personal Information when you register, subscribe,
              create an account, order a deal, or otherwise interact with the
              Sites or contact.
            </p>
          </div>
          <div>
            <h1 className="flex items-center gap-1 text-base font-medium mt-10">
              <Icon className="text-blue-700" icon="eva:arrow-right-fill" />
              How marketpress.com Uses Personal Information
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              You may correct your information by signing in your account. Or
              you may also email to info@example.com. If you want to close your
              account or have other questions or requests, please contact us: +8
              0 11 223 456
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-[400px] flex flex-col lg:flex-row justify-center lg:justify-evenly items-center bg-gray-50 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-gray-800 text-2xl">Newsletter & Get Updates</h1>
          <p className="text-gray-500 text-sm my-3">
            Sign up for our newsletter to get up-to-date from us
          </p>
        </div>
        <div className="w-[430px] ">
          <input
            className="w-[65%] py-4 border outline-none pl-6 rounded-l placeholder:text-sm"
            type="email"
            placeholder="Enter Your Email Here ...."
          />
          <button className="w-[35%] bg-blue-600 border-blue-600 hover:bg-lime-500 text-white uppercase font-medium py-4 rounded-r">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Terms;
