import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Todos from "./pages/Todos.page";

import Footer from "./Footer.view";
import TopBar from "./TopBar.view";
import SignUp from "./components/ProfilePage/SignUp";
import LogIn from "./components/ProfilePage/LogIn";
import UpdateProfile from "./components/ProfilePage/UpdateProfile";
import ProfilePage from "./pages/Profile.page";

const App = () => {
  return (
    <Box>
      <TopBar />

      <Main>
        <Route path="/" exact component={ProfilePage} />
        <Route path="/todos" exact component={Todos} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/updateProfile" exact component={UpdateProfile} />

      </Main>

      <Footer />
    </Box>
  );
};
export default App;

const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 8rem;
  /* padding-top: 2rem; */
  flex: 1;
  width: 100%;
  height: 100%;
  background: navy;
`;
