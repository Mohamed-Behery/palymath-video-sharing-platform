import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import "./index.css";
import { lightTheme, darkTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Following from "./pages/Following";
import Trending from "./pages/Trending";

const Container = styled.div`
  min-height: 100vh;
`;
const Main = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
`;
// const Wrapper = styled.div`
//   padding: 20px 5%;
// `;

export default function App() {
  const [darkMode, SetDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Main>
            <Navbar darkMode={darkMode} setDarkMode={SetDarkMode} />
            {/* <Wrapper> */}
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="feed" element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  <Route path="signin" element={<Signin />} />
                  <Route path="login" element={<Signin />} />
                  <Route path="register" element={<Register />} />
                  <Route path="signup" element={<Register />} />
                  <Route path="search">
                  <Route path=":id" element={<Search />} />
                  </Route>
                  <Route path="profile" element={<Profile />} />
                  <Route path="upload" element={<Upload />} />
                  <Route path="About" element={<About />} />
                  <Route path="following" element={<Following />} />
                  <Route path="trending" element={<Trending />} />
                </Route>
              </Routes>
            {/* </Wrapper> */}
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
