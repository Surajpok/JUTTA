import styled from "styled-components"
import React from "react";
import Announcement from "../components/Announcement";
import Catagories from "../components/Catagories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Hd = styled.h1`
padding-top: 20px;
padding-left: 25px;
font-size: 35px;
`
const home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Hd>Catagories</Hd>
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default home;
