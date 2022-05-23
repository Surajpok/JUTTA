import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`

`;

const Wrapper = styled.h1`
    padding: 20px;
    background-color: #f9fafb;

`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 20px; */
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 25px;
    padding-bottom: 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
// const TopTexts = styled.div`

// `;

// const TopText = styled.span`
//     font-size: 20px;
//     font-weight: 200;
//     text-decoration: underline;
//     cursor: pointer;
//     margin: 0 10px;
// `;

const Info = styled.div`
    margin-right:20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    flex: 4;

`;

const Product  = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail  = styled.div`
    flex: 2;
    display: flex;
`;

const Image  = styled.img`
    width: 200px;
    border-radius: 10px;
`;

const Details  = styled.div`
    font-size: 20px;
    font-weight: 200;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Specifications = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductName  = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

const ProductId = styled.span`
    color: #474747;
    font-size: 20px;
    font-weight: 200;

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>props.color};
`;

const ProductSize = styled.span`
    font-size: 20px;
    color: #474747;
    font-weight: 200;

`;

const PriceDetail  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    color: #474747;
    font-size: 20px;
    margin: 5px;
    font-weight: 200;

`;

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px 0;
`;

const Summery = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 0; /* required */
    height: min-content;
    flex: 1.5;
    background-color: #fff;
    padding: 20px 20px 30px 20px;
    border-radius: 10px;
`;

const TopButton = styled.button`
    width: 47%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "transparent"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    cursor: pointer;
`;

const SummeryItem = styled.div`
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 200;
`;

const SummeryItemText = styled.p`

        font-weight: ${props => props.type === "total" && "700"};
        color: ${(props) => props.type === "subtotal" || props.type === "total" ? "black" : "gray"};
`;

const SummeryItemPrice = styled.p`
        font-weight: ${props => props.type === "total" && "700"};
        color: ${(props) => props.type === "subtotal" || props.type === "total" ? "black" : "#4d4d4d"};
`;

const PaymentSummery = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
`;

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            
            <Top>
                
                {/* <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Yout Wishlist(0)</TopText>
                </TopTexts> */}
               
            </Top>
            <Bottom>
                
                <Info>
                <Title>Your Order</Title>
                <Hr />
                <Hr />
                <Product>
                        <ProductDetail>
                            <Image src = "./image/shoes2.jpg" alt = "" />
                            <Details>
                                <ProductName>JESSIE THUNDER SHOES</ProductName>
                                <Specifications>
                                    <ProductId><b>Id:</b>1233434</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size:</b>26</ProductSize>
                                </Specifications>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>Rs.1500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                    <Hr />
                    <Hr />
                    
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src = "./image/shoes2.jpg" alt = "" />
                            <Details>
                                <ProductName>JESSIE THUNDER SHOES</ProductName>
                                <Specifications>
                                    <ProductId><b>Id:</b>1233434</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>26</ProductSize>
                                </Specifications>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>Rs.1500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Hr />
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src = "./image/shoes2.jpg" alt = "" />
                            <Details>
                                <ProductName>JESSIE THUNDER SHOES</ProductName>
                                <Specifications>
                                    <ProductId><b>Id:</b>1233434</ProductId>
                                    <ProductColor color="blue"/>
                                    <ProductSize><b>Size:</b>26</ProductSize>
                                </Specifications>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>Rs.1500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                    <Hr />
                    <Hr />
                </Info>
                <Summery>
                    <Title>Payment Summery</Title>
                    <SummeryItem>
                        <SummeryItemText type = "subtotal">Subtotal</SummeryItemText>
                        <SummeryItemPrice type = "subtotal">Rs.1500</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemPrice>Rs.100</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Discount</SummeryItemText>
                        <SummeryItemPrice>- Rs.50</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem >
                        <SummeryItemText type = "total">Total</SummeryItemText>
                        <SummeryItemPrice type = "total">Rs.1200</SummeryItemPrice>
                    </SummeryItem>
                    <PaymentSummery>
                        <TopButton type="none">CONTINUE SHOPPING</TopButton>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </PaymentSummery>
                </Summery>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart;