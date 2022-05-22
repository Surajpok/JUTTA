import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: gray;
color:white;
cursor: pointer;
font-size: 18px;
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Lets Create An Account</Title>
        <Form>
          <Input placeholder = "First Name" />
          <Input placeholder = "Last Name" />
          <Input placeholder = "Username" />
          <Input placeholder = "Email" />
          <Input placeholder = "Password" />
          <Input placeholder = "Conform Password" />
          <Agreement>
            By creating an account, I concent to be processing of an personal data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register