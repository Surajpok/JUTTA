import styled from "styled-components";
import { mobile } from "../Responsive";
const announcement = () => {
  return (
    <Container>
      Super Deal! Get 60% Discount On Purchase More Than $500. Limited Time
      Only.
    </Container>
  );
};

export default announcement;

const Container = styled.div`
  display: flex;
  height: 30px;
  background-color: gray;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  ${mobile({display: "none" })}
`;
