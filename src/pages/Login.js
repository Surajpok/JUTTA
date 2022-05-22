
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
`;

const FormWrapper = styled.div`
   margin: 100px 80px;
`;

const MiniTitle = styled.p`
  font-size: 18px;
  color:gray;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const Dot = styled.span`
  font-size:60px;
  color: lightcoral;
`;

const Link = styled.span`
color: lightcoral;
padding-left: 5px ;
`;

const Form = styled.form`
  padding-top:10px;
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
  font-size:18px;
`;

const Agreement = styled.span`
  font-size: 18px;
  margin: 35px 0;
  
`;

const Button = styled.button`
width: 100%;
border: none;
padding: 20px 20px;
background-color: lightcoral;
color:white;
cursor: pointer;
font-size: 18px;
margin: 20px 20px 0 0;
`;

const ImgWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 95vh;
  width: 50vw;
  object-fit: cover;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <MiniTitle>ALREADY A MEMBER</MiniTitle>
            <Title>Lets Login And Start<Dot>.</Dot></Title>
            <MiniTitle>Don't Have Account?
              <Link>
                Sign Up
              </Link>
            </MiniTitle>
          
            <Form>
              
              <Input placeholder = "Username" />
              <Input placeholder = "Email" />
              <InputWrapper>
                <Input placeholder = "Password" />
                <Input placeholder = "Conform Password" />
              </InputWrapper>
              
              
              <Agreement>
              <input type = "checkbox"></input>
                By creating an account, I concent to be processing of an personal data in accordance with the <b>Privacy Policy</b>
              </Agreement>
              
              <Button>Sign Up</Button>
              <Button>Login With Google</Button>
            </Form>
        </FormWrapper>
        <ImgWrapper>
          <Image src ="./image/top1.webp"/>
        </ImgWrapper>
      </Wrapper>
    </Container>
  )
}

export default Login