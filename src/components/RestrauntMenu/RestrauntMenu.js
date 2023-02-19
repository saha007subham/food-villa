import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../../utils/useRestaurant";
import Shimmer from "../Shimmer";

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div>
      <div>
        <h1>Cards</h1>
        <h1>Restaurant ID : {id}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
