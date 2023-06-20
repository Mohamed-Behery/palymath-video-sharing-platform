import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 10px 26px 18px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 7.5px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Item>Home</Item>
        <Item>Home</Item>
        <Item>Home</Item>

        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>SIGN IN</Button>
          </Link>
        </Login>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;
