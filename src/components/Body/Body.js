import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import Shimmer from "../Shimmer";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.71693713897372&lng=88.43584332615137&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setAllRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestro?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="total_restro-h2">
        <div>
          <h2>{allRestro.length} Restaurants</h2>
        </div>

        <div className="search-tab">
          <FaSearch className="input-search-icon" />
          <input
            placeholder="Search"
            className="input-search"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="main__card-div">
        <div>
          {filteredRestro
            ?.filter((val) => {
              if (search === "") {
                return val.data;
              } else if (
                val?.data.name?.toLowerCase().includes(search.toLowerCase())
              ) {
                return val.data;
              }
            })
            .map((item, index) => {
              return <Cards {...item?.data} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Body;