import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  border-bottom: 0.1px solid lightgray;
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  font-size: 17px;
  line-height: 60px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  background-color: #fff;
  border: 0.5px solid lightgray;
  width: 45%;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  height: 60px;
`;

const Logo = styled.div`
  img {
    height: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><a href ="/">
            <img src="../image/LAMO.png" alt="" />
            </a>
          </Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
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
