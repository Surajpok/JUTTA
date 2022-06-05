import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  border-bottom: 0.1px solid lightgray;
  ${mobile({height: "50px", display:"flex", justifyContent:"center", alignItem:"center" })}
`;

const Wrapper = styled.div`
  font-size: 19px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({margin: " 0 10px 0 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({flex: "1.5" })}
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  background-color: #fff;
  border: 0.5px solid lightgray;
  width: 45%;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "5px",marginRight:"5px", padding:"5px 5px 5px 10px", width:"100%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 19px;
  width: 100%;
  ${mobile({width: "100%", fontSize:"15px" })}
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  ${mobile({flex: "0.5" })}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  a, u {
    text-decoration: none;
    color: #000;
  }
  ${mobile({fontSize: "20px",margin:"0",padding:"0"})}
  /* img {
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  ${mobile({height: "24px",justifyContent:"center",alignItem:"center" })}

  } */
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({flex:"1.5", justifyContent: "space-evenly",marginRight:"0" })}
`;

const MenuItem = styled.div`
  a{
    text-decoration: none;
    color: #000;
  }
  cursor: pointer;
  margin-left: 20px;
  ${mobile({fontSize: "15px", paddingLeft: "0px",margin:"0" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style ={{color:"Black", fontSize:"18"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to="/">
            {/* <img src="../image/LAMO.png" alt="" /> */}
            JUTTA
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem><Link to= "/register">Sign Up</Link></MenuItem>
          <MenuItem><Link to= "/login">Login</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
