import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../assets/palymath.png";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ProfileImg from "../assets/avatar.png";
import { useState } from "react";
import Menu from "./Menu";

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 5%;
  background: ${({ theme }) => theme.neutral};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 998;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 150px;
  user-select: none;
  margin-top: 5px;
`;
const MiddleSection = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  width: 550px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  margin: auto;
  @media screen and (max-width: 920px) {
    width: 350px;
  }
  @media screen and (max-width: 665px) {
    width: 60%;
  }
`;
const SearchInput = styled.input`
  /* font-size: 17px; */
  font-family: inherit;
  width: 95%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const ThemeSwitcher = styled.div`
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 520px) {
    margin-right: 0;
    position: relative;
    left: 5px;
  }
`;
const SearchLink = styled(Link)`
  cursor: pointer;
  padding-right: "5px";
  border-right: 1px solid #ddd;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
const LeftSection = styled.div``;
const Avatar = styled.img`
  width: 35px;
  cursor: pointer;
  border-radius: 50%;
  margin-top: 5px;
  position: relative;
`;

export default function Navbar({ darkMode, setDarkMode }) {
  const [menu, setMenu] = useState(false);
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
          <SearchLink to="/search/test">
            <SearchIcon
              style={{ position: "relative", right: "5px", top: "2px" }}
            />
          </SearchLink>
        </Search>
        <ThemeSwitcher onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <LightModeIcon style={{ position: "relative", top: "3px" }} />
          ) : (
            <DarkModeIcon style={{ position: "relative", top: "3px" }} />
          )}
        </ThemeSwitcher>
      </MiddleSection>
      <LeftSection>
        <Avatar src={ProfileImg} onClick={() => setMenu(!menu)} />
        <Menu trigger={menu} />
      </LeftSection>
    </Container>
  );
}
