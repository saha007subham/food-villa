import React from "react";
import "./Cards.css";
import { IMG_CDN_URL } from "../../config";
import { FaRegStar } from "react-icons/fa";

const Cards = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  cloudinaryImageId,
}) => {
  // console.log(name);
  return (
    <div className="cards">
      <div>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="food-img"
          className="card-img"
        />
      </div>
      <div>
        <p className="card-title">{name}</p>
        <p className="card-p">{cuisines.join(", ")}</p>
      </div>
      <div className="rating-div">
        <div
          style={{
            display: "flex",
            backgroundColor: "#db7c38",
            color: "white",
            padding: "2px 6px",
          }}
        >
          <span className="rating-star">
            <FaRegStar />
          </span>
          <p className="rating-p">{avgRating}</p>
        </div>
        <div style={{ backgroundColor: "#f2ecec", padding: "2px 6px" }}>
          <p style={{ fontSize: "13px", margin: "0px" }}>{deliveryTime} mins</p>
        </div>
        <div style={{ padding: "2px 6px", backgroundColor: "#f2f2f2" }}>
          <p style={{ fontSize: "13px", margin: "0px" }}>{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
