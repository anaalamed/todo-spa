import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./pages/Profile.page";
import Todos from "./pages/Todos.page";

import Footer from "./Footer.view";
import TopBar from "./TopBar.view";

const App = () => {
  return (
    <Box>
      <TopBar />

      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/todos" exact component={Todos} />
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
  margin-top: 7rem;
  flex: 1;
  width: 100%;
  height: 100%;
  background: navy;
`;
