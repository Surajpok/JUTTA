import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 50vh;
position: relative;
`;
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
color:#fff;
margin: 20px;
font-weight: 600;
${mobile({fontSize:"30px"})}
`;
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
${mobile({padding:"5px"})}
`;

const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Link to= {`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CatagoryItem