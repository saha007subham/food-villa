import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Shimmer from "../components/Shimmer";
import "./AppLayout.css";

const AppLayout = () => {
  const [search, setSearch] = useState("");
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  const handleInput = (searchText) => {
    setSearch(searchText);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.71693713897372&lng=88.43584332615137&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

  // if (filteredRestro === 0) return <h1>No Restro match your filter..!!</h1>;

  return allRestro === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Header Section */}
      <Header retroData={handleInput} />
      <div className="total_restro-h2">
        <h2>20 Restaurants</h2>
      </div>
      {/* Restaurant Cards Sections */}
      <div className="main__card-div">
        <div>
          {filteredRestro
            ?.filter((val) => {
              if (search === "") {
                return val.data;
              } else if (
                val.data.name?.toLowerCase().includes(search.toLowerCase())
              ) {
                return val.data;
              }
            })
            .map((item, index) => {
              return <Cards {...item.data} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
