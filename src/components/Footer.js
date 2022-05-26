import { Facebook, Instagram, Mail, Phone, Pinterest, Room } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../Responsive";
const Container = styled.div`

`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({display:"block"})}
  `;
  
const Left = styled.div`
  flex: 1;
  position: relative;
  padding: 20px 20px 0 20px;
`;
const Logo = styled.div`
  img {
    height: 35px;
  }
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px 20px 0 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 25px;
  font-size: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px 20px 0 20px;
`;
const ContactItem = styled.div`
font-size: 20px;
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const SocialContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover{
  border-color: #e9f5f5;
  transform: scale(1.1);
}
`;
const Payment = styled.img`
padding-top: 25px;
width:60%;
`;

const Copyright = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: gray;
  padding-bottom: 20px;
  ${mobile({textAlign:"center"})}

`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Logo>
          <img src="../image/LAMO.png" alt="" />
        </Logo>
        <Desc>
          Sneakers have always been more than just shoes to us. They have a
          culture of their own. Those in the know understand how influential
          sneakers have been in art, music and fashion. VegNonVeg is in search
          of its own sneaker culture. Over time, we are committed to developing
          India’s own story of sneaker and street culture. The VegNonVeg store
          will be more than just a retail space. It will be a venue for music, a
          studio for art, a room for debate and a place to party.
        </Desc>
        
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Shoes</ListItem>
          <ListItem>Woman Shoes</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Privecy Polecy</ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem>Disclosure</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room />Kanchanbari-4, Biratnagar, Nepal</ContactItem>
        <ContactItem><Phone />+9810556983</ContactItem>
        <ContactItem><Mail />Info@Jutta.com</ContactItem>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <Payment src = "../image/payment.png" alt ="" />
      </Right>
      </Wrapper>
      <Copyright>Copyright © 2022 | JUTTA | All Right Reserved.</Copyright>
    </Container>
    
  );
};

export default Footer;
