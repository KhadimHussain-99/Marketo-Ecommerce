import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delCart } from "../redux/slices/products/product";

const Cart = () => {
  const items = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const deleteCart = (id) => {
    dispatch(delCart(id));
  };

  return (
    <>
      <div className="w-full bg-gray-50 h-[80px] mt-6 px-4 flex items-center gap-3">
        <Link className="text-gray-500 flex items-center gap-1" to="/">
          <Icon icon="bx:home" /> Home
        </Link>
        <Icon icon="iconamoon:arrow-right-2-duotone" />
        Cart
      </div>
      <div className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col py-10 border rounded-lg my-10">
        <div className="w-[100%] md:w-[60%] flex flex-col justify-center items-center p-5">
          {items.cartProds.length > 0 ? (
            <div className="w-[100%] flex flex-col justify-center items-start bg-gray-100 rounded-t-lg p-10">
              <h1 className="text-2xl text-gray-800 font-medium">
                There {items.cartProds.length > 1 ? "are" : "is"}{" "}
                {items.cartProds.length} product
                {items.cartProds.length > 1 ? "s " : " "}
                in your Cart
              </h1>
            </div>
          ) : (
            <div className="w-[100%] flex flex-col justify-center items-start bg-gray-100 rounded-t-lg p-10">
              <h1 className="text-2xl text-gray-800 font-medium">
                Your Cart is Empty
              </h1>
            </div>
          )}

          <div className="w-[100%] flex flex-col">
            {items.cartProds.map((prod, index) => (
              <div
                key={index}
                className="w-[100%] flex justify-between items-center px-5 py-2"
              >
                <div className="flex items-center justify-start">
                  <img
                    className="w-[80px] h-[80px] object-cover"
                    src={prod.image}
                    alt=""
                  />
                  <div>
                    <h2 className="text-xl text-gray-800 font-medium">
                      {prod.name}
                    </h2>
                    <p className="text-lg text-gray-400">{prod.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>quantity: {prod.cart}</p>
                  <p className="text-lg text-gray-400">{prod.price}</p>
                  <button onClick={() => deleteCart(prod.id)}>
                    <Icon className="cursor-pointer" icon="uiw:delete" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
