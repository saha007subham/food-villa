import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import "./AppLayout.css";
import Body from "../components/Body/Body";
import About from "../components/About";

const AppLayout = () => {
  return (
    <>
      <Header />
      <About />
      <Body />
    </>
  );
};

export default AppLayout;
