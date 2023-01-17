import React, { useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { retroData } from "../data/data";
import "./AppLayout.css";

const AppLayout = () => {
  const [search, setSearch] = useState("");

  const handleInput = (searchText) => {
    setSearch(searchText);
  };

  return (
    <>
      <Header retroData={handleInput} />
      <div className="total_restro-h2">
        <h2>20 Restaurants</h2>
      </div>
      {/* Restaurant Cards Sections */}
      <div className="main__card-div">
        <div>
          {retroData
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => {
              return <Cards {...item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
