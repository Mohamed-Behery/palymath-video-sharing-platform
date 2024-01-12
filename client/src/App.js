import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import "./index.css";
import { lightTheme, darkTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Login from "./pages/Login";
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

export default function App() {
  const [darkMode, SetDarkMode] = useState(false);
  const currentUser = false;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Main>
            <Navbar darkMode={darkMode} setDarkMode={SetDarkMode} />
            <Routes>
              <Route path="/">
                <Route index element={<Home type="random" />} />
                <Route path="home" element={<Home type="random" />} />
                <Route path="feed" element={<Home type="random" />} />
                <Route path="random" element={<Home type="random" />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
                <Route
                  path="login"
                  element={currentUser ? <Home /> : <Login />}
                />{" "}
                <Route
                  path="signin"
                  element={currentUser ? <Home /> : <Login />}
                />{" "}
                <Route
                  path="register"
                  element={currentUser ? <Home /> : <Register />}
                />
                <Route
                  path="signup"
                  element={currentUser ? <Home /> : <Register />}
                />
                <Route path="search">
                  <Route path=":id" element={<Search />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="upload" element={<Upload />} />
                <Route path="About" element={<About />} />
                <Route
                  path="following"
                  element={<Following type="following" />}
                />
                <Route path="trending" element={<Trending type="trend" />} />
              </Route>
            </Routes>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
