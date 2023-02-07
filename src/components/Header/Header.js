import React from "react";
import "./Header.css";
import Logo from "../../assets/images.png";
import { FaSearch } from "react-icons/fa";

const Header = ({ retroData }) => {
  return (
    <div className="header-div">
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="input-search-div">
        <FaSearch className="input-search-icon" />
        <input
          placeholder="Search"
          className="input-search"
          type="text"
          onChange={(e) => {
            retroData(e.target.value);
          }}
        />
      </div>
      <div className="header__right-div">
        <p className="cursor">Offers</p>
        <p className="cursor">About</p>
        <p className="cursor">Contact Us</p>
        <p className="cursor">Cart</p>
      </div>
      <div>
        <button className="login_btn">LogIn</button>
      </div>
    </div>
  );
};

export default Header;
