import { useState, useEffect } from "react";
import { FETCH_MENU } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setResaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();
    setResaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
