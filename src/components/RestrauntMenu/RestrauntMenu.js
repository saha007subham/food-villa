import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import { addItems } from "../../utils/cartSlice";
import useRestaurant from "../../utils/useRestaurant";
import Shimmer from "../Shimmer";

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  // const handleAddItems = () => {
  //   dispatch(addItems("Banana"));
  // };

  const addFoofItem = (item) => {
    dispatch(addItems(item));
  };

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="flex">
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
      {/* <div>
        <button
          className="p-2 m-5 bg-green-200"
          onClick={() => handleAddItems()}
        >
          Add Items
        </button>
      </div> */}
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} -{" "}
              <button
                className="p-1 bg-red-400"
                onClick={() => addFoofItem(item)}
              >
                {" "}
                + Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
