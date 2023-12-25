import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <>
      <div className="w-full bg-gray-50 h-[80px] mt-6 px-4 flex items-center gap-3">
        <Link className="text-gray-500" to="/">
          Home
        </Link>
        <Icon icon="iconamoon:arrow-right-2-duotone" />
        FAQ
      </div>
      <section className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col pt-10 px-4 xl:px-0">
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">1. What is marketpress.com?</h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            2. Why my card payment is failing?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            3. I need to sign up before buying any Offer/Product?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            4. How do I create an marketpress.com account?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            5. What type of products do you sell online?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            6. Am I billed as soon as I join marketpress.com?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">7. Is my info safe?</h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 px-8 py-6 mt-10">
          <h1 className="text-lg font-medium">
            8. Why should I subscribe newsletter?
          </h1>
          <p className="mt-4 text-sm text-gray-700 leading-6">
            marketpress is the leading Business to Consumer e-commerce site. It
            is an online retail that enables anyone from anywhere in Bangladesh
            and from around the world to purchase different items/products
            through online.
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQs;
