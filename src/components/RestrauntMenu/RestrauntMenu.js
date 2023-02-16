import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";

const RestrauntMenu = () => {
  const [restaurant, setResaurant] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=26.71693713897372&lng=88.43584332615137&menuId=516764"
    );
    const json = await data.json();
    setResaurant(json.data);
  }

  return (
    <div>
      <h1>Cards</h1>
      <h1>Restaurant ID : {id}</h1>
      <h1>{restaurant.name}</h1>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
    </div>
  );
};

export default RestrauntMenu;
