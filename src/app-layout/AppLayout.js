import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { retroData } from "../data/data";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="total_restro-h2">
        <h2>20 Restaurants</h2>
      </div>

      {/* Restaurant Cards Sections */}
      <div className="main__card-div">
        <div>
          {retroData.map((item, index) => {
            return <Cards {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
