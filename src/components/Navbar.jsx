import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../assets/palymath.png";
import ProfileImg from "../assets/avatar.png";

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 96px;
  background: ${({ theme }) => theme.neutral};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 999;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MiddleSection = styled.div`
  display: flex;
  align-items: center;
`;
const LeftSection = styled.div``;
const Logo = styled.img`
  width: 150px;
  user-select: none;
  margin-top: 5px;
`;
const Search = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  width: 550px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  padding: 8px 12px;
  margin: auto;
`;
const SearchInput = styled.input`
  font-size: 17px;
  font-family: "Tajawal", sans-serif;
  width: 95%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const Avatar = styled.img`
  width: 35px;
  cursor: pointer;
  border-radius: 50%;
  margin-top: 5px;
`;
const ThemeSwitcher = styled.div`
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.text};
`;
export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Container>
      <RightSection>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo src={LogoImg} />
        </Link>
      </RightSection>
      <MiddleSection>
        <Search>
          <SearchInput placeholder="بحث" />
        </Search>
        <ThemeSwitcher onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
          </ThemeSwitcher>
      </MiddleSection>
      <LeftSection>
        <Avatar src={ProfileImg} />
      </LeftSection>
    </Container>
  );
}
