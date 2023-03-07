import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import FoodItem from "../FoodItem/FoodItem";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-red-500">
        Cart Items - {cartitems.length}
      </h1>
      <button className="bg-green-300" onClick={() => handleClear()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartitems.map((item, idx) => {
          return <FoodItem {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
