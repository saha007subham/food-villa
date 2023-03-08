import React, { useState, useEffect, useContext } from "react";
import Cards from "../Cards";
import Shimmer from "../Shimmer";
import { FaSearch } from "react-icons/fa";
// import "./Body.css";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.71693713897372&lng=88.43584332615137&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data);
    setAllRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();

  if (!online) {
    return <h1>Offline, please check your internet connection..!!!</h1>;
  }

  return allRestro?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="total_restro-h2">
        <div>
          <h2 class="text-blue-500	">{allRestro?.length} Restaurants</h2>
        </div>

        <div className=" flex relative justify-center mb-3">
          <FaSearch className="absolute right-[400px] top-[5px]" />
          <input
            placeholder="Search"
            className="w-[500px] border-solid border-2 border-sky-500 px-2"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <input
            value={user.name}
            onChange={(e) =>
              setUser({
                name: e.target.value,
                email: "email@gmail.com",
              })
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
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
          .map((item) => {
            return (
              <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                <Cards {...item?.data} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Body;
