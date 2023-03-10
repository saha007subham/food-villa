import React, { useState, useContext } from "react";
// import "./Header.css";
import Logo from "../../assets/2.png";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../../utils/store";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-4 bg-pink-50">
      <div className="p-2">
        <Link to="/">
          <img src={Logo} className="h-12 " alt="logo" />
        </Link>
      </div>

      <div className="flex py-4">
        <p className="cursor px-3 cursor-pointer hover:text-orange-400">
          Offers
        </p>

        <p className="cursor px-3 hover:text-orange-400">
          <Link to="/about" className="link-style">
            About
          </Link>
        </p>

        <p className="cursor px-3 hover:text-orange-400">
          <Link to="/contact" className="link-style">
            Contact Us
          </Link>
        </p>

        <p className="cursor px-3 hover:text-orange-400">
          <Link to="/instamart" className="link-style">
            Instamart
          </Link>
        </p>
        {/* <p className="cursor px-3 hover:text-orange-400">
          <Link to="/cart" className="link-style">
            Cart
          </Link>
        </p> */}

        <p className="cursor px-3 cursor-pointer hover:text-orange-400">
          <Link to="/cart" className="link-style">
            Cart - {cartItems.length} items
          </Link>
        </p>
      </div>
      <div>
        <p>{user.name}</p>
      </div>
      <div style={{ width: "6%" }} className="py-4">
        {isLoggedIn ? (
          <button className="login_btn" onClick={() => setIsLoggedIn(false)}>
            LogOut
          </button>
        ) : (
          <button className="login_btn" onClick={() => setIsLoggedIn(true)}>
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
