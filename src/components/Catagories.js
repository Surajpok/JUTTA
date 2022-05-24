import styled from "styled-components";
import { catagories } from "../data";
import CatagoryItem from "./CatagoryItem";
import {mobile} from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  ${mobile({padding:"10px", flexDirection:"column"})}
`;

const Catagories = () => {
  return (
    <Container>
      {catagories.map((item) => (
        <CatagoryItem item={item} key = {item.id} />
      ))}
    </Container>
  );
};

export default Catagories;
