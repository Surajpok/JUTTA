import styled from "styled-components"
import React from "react";
import Announcement from "../components/Announcement";
import Catagories from "../components/Catagories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div`
`;
const Title = styled.h1`
padding-top: 20px;
padding-left: 25px;
font-size: 30px;
`
const home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Title>Catagories</Title>
      <Catagories />
      <Title>Tending Product</Title>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default home;
