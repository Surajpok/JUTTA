import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight:200;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 20px;
  color: #4f4f4f;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const Review = styled.div`
font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
  display: flex;
  align-content: center;
  width: 50%;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
// const Remove = styled.button``;

// const Add = styled.button``;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border:1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid gray;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: white;
  }
`;
const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <ImgContainer>
          <Image src = "./image/top.webp" alt ="" />
          </ImgContainer>
          <InfoContainer>
            <Title>
              This is a title of our product. And let me tell you an interesting fact: A good title increases sales by 25%
            </Title>
            <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
            <Filter>
            <Price>$20</Price>
            <Review>
              ⭐⭐⭐⭐⭐
            </Review>
           
            </Filter>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color= "black" />
                <FilterColor color= "darkblue" />
                <FilterColor color= "gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product