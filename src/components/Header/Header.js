import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-div">
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>

      <div className="header__right-div">
        <p className="cursor">Offers</p>

        <p className="cursor">
          <Link to="/about" className="link-style">
            About
          </Link>
        </p>

        <p className="cursor">Contact Us</p>
        <p className="cursor">Cart</p>
      </div>
      <div style={{ width: "6%" }}>
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
