import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.jpg";

const Header = () => {
  return (
    <div className="header-div">
      <div>
        <img src={Logo} className="logo" />
      </div>
      <div className="header__right-div">
        <p className="cursor">About</p>
        <p className="cursor">Contact Us</p>
        <p className="cursor">Cart</p>
      </div>
    </div>
  );
};

export default Header;
