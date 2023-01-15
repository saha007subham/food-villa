import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { retroData } from "../data/data";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "0px 20px" }}>
        <h2>20 Restaurants</h2>
      </div>
      <div
        style={{
          padding: "0px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: "25px",
        }}
      >
        {retroData.map((item, index) => {
          return <Cards {...item} key={index} />;
        })}
        {/* <Cards data={retroData[0]} />
        <Cards data={retroData[1]} />
        <Cards data={retroData[2]} />
        <Cards data={retroData[3]} />
        <Cards data={retroData[4]} />
        <Cards data={retroData[5]} /> */}
      </div>
    </>
  );
};

export default AppLayout;
