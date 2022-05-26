import { ChevronLeftOutlined, ChevronRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({height: "45vh" })}
`;
const Arrow = styled.div`
  transform: scale(1.8); //increases size of an svg material icon
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
  ${mobile({height: "30px", width:"30px" })}
  
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
  ${mobile({height: "45vh" })}

`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({ flex:"2" })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom -20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({padding:"15px", flex:"1" })}
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: capitalize;
  letter-spacing: 3px;
  ${mobile({fontSize: "25px" })}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 22px;
  font-weight: 500px;
  letter-spacing: 2px;
  text-transform: capitalize;
  ${mobile({fontSize: "15px", margin:"30px 0" })}

`;
const Button = styled.button`
  padding: 10px 35px;
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  background-color: #000;
  cursor: pointer;
  ${mobile({padding: "5px", fontSize:"15px"})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction ==="left"){
      setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
      setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftOutlined />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg = {item.bag} key = {item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
