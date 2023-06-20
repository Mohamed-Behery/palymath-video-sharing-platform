import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import "./index.css";
import { lightTheme, darkTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

const Container = styled.div`
  /* display: flex; */
`;
const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 20px 5% 20px;
`;

export default function App() {
  const [darkMode, SetDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Main>
            <Navbar darkMode={darkMode} setDarkMode={SetDarkMode} />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="feed" element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  <Route path="signin" element={<Signin />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
