import styled from "styled-components";
import {mobile} from "../Responsive";

const Container = styled.div`
  height: 60vh;
  /* margin: 0 15px; */
  background-color: rgb(245 245 245);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({height:"50vh"})}
`;
const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;
${mobile({fontSize:"30px"})}

`;
const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}

`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 0px solid lightgray;
${mobile({width:"90%",justifyContent:"center"})}
`;
const Input = styled.input`
border: none;
font-size: 18px;
display: flex;
padding: 20px;
height: 40px;
flex: 2;
${mobile({padding:"10px",width:"30%"})}

`;
const Button = styled.button`
border: none;
flex: 1;
font-size: 18px;
height: 40px;
text-transform: uppercase;
background-color: #000;
color: #fff;
cursor: pointer;
${mobile({padding:"10px"})}

`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Timely Updates From Your Favourate Product.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>Submit</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
