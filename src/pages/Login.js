import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* padding: 20px; */
  background-color: white;
  display: flex;
  ${mobile({ padding: "5px" })}
`;

const FormWrapper = styled.div`
  margin: 50px 80px;
  ${mobile({ margin: "5px" })}
`;

const MiniTitle = styled.p`
  font-size: 18px;
  color: gray;
  ${mobile({ margin: "10px" })}
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  ${mobile({ fontSize: "35px", lineHeight: "35px", margin: "10px" })}
`;

const Dot = styled.span`
  font-size: 60px;
  color: lightcoral;
`;

const MiniTitleLink = styled.span`
  a {
    text-decoration: none;
    color: lightcoral;
    padding-left: 5px;
  }
`;

const Form = styled.form`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  margin: 15px 20px 0 0;
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: #f7fcff;
  font-size: 18px;
  ${mobile({ margin: "5px", padding: "10px" })}
`;

const Agreement = styled.span`
  font-size: 16px;
  margin: 20px 0;
  ${mobile({ margin: "10px" })}
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 20px 20px;
  background-color: #000;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin: 20px 20px 0 0;
  ${mobile({ margin: "5px 5px" })}
  &:disabled{
    color:gray;
    cursor: not-allowed;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  height: 110vh;
  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  height: 110vh;
  width: 50vw;
  object-fit: cover;
`;
const Error = styled.span`
color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <LoginContainer>
        <Wrapper>
          <FormWrapper>
            <MiniTitle>ALREADY A MEMBER</MiniTitle>
            <Title>
              Lets Login And Start<Dot>.</Dot>
            </Title>
            <MiniTitle>
              Don't Have Account?
              <MiniTitleLink>
                <Link to="/register">Sign Up</Link>
              </MiniTitleLink>
            </MiniTitle>

            <Form>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              
              <InputWrapper>
                <Input
                type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </InputWrapper>

              <Agreement>
                By creating an account, I concent to be processing of an
                personal data in accordance with the <b>Privacy Policy</b>
              </Agreement>

              <Button onClick={handleClick} disabled={isFetching}>Login</Button>
              <Button>Login With Google</Button>
              {error && <Error>Something Went Wrong...</Error>}
            </Form>
          </FormWrapper>
          <ImgWrapper>
            <Image src="./image/top1.webp" />
          </ImgWrapper>
        </Wrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;
