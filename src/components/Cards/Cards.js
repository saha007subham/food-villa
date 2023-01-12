import React from "react";
import "./Cards.css";

const Cards = (props) => {
  console.log(props.data.name);
  return (
    <div className="cards">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.data.cloudinaryImageId
        }
        className="card-img"
      />
      <h2>{props.data.name}</h2>
      <h3>sdfvfv</h3>
      <h4>lglglgl</h4>
    </div>
  );
};

export default Cards;
