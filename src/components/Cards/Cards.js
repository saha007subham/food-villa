import React from "react";
import "./Cards.css";

const Cards = ({ name, cloudinaryImageId }) => {
  // console.log(name);
  return (
    <div className="cards">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="food-img"
        className="card-img"
      />
      <h2>{name}</h2>
      <h3>sdfvfv</h3>
      <h4>lglglgl</h4>
    </div>
  );
};

export default Cards;
