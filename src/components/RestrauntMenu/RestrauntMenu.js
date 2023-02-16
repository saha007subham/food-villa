import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "../Shimmer";

const RestrauntMenu = () => {
  const [restaurant, setResaurant] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=26.71693713897372&lng=88.43584332615137&menuId=${id}`
    );
    const json = await data.json();
    setResaurant(json.data);
  }

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
