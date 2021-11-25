import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../state/root.reducer";
import { Main, StyledText, Title } from "../../styles/reset.css";
import Profile from "../components/ProfilePage/Profile";
import StartButtons from "../components/StartButtons";
import '../../assets/logo.png'
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const history = useHistory();
  const { loggedIn } = useSelector((state: RootState) => state.users);

  return (
    <Main>
      <Title style={{ margin: 30 }}>Welcome to To Do List App</Title>

      {loggedIn ? <Profile></Profile> : (<StartButtons></StartButtons>)}

      <Link onClick={() => history.push("/todos")}>My Todos</Link>

      <Logo src="logo.png"></Logo>
    </Main>
  );
};
export default ProfilePage;

const Logo = styled.img`
  width: 30rem;
  border-radius: 0.6rem;
`;

const Link = styled(StyledText)`
  text-decoration: underline;
  cursor: pointer;
  margin: 1rem;
  font-size: 2rem;
`;