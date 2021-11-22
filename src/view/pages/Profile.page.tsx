import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../state/root.reducer";
import { Main, Title } from "../../styles/reset.css";
import Profile from "../components/ProfilePage/Profile";
import StartButtons from "../components/StartButtons";
import '../../assets/logo.png'

const ProfilePage = () => {
  const { loggedIn } = useSelector((state: RootState) => state.users);

  return (
    <Main>
      <Title style={{ margin: 30 }}>Welcome to To Do List App</Title>

      {loggedIn ? <Profile></Profile> : (<StartButtons></StartButtons>)}

      <Logo src="logo.png"></Logo>
    </Main>
  );
};
export default ProfilePage;

const Logo = styled.img`
  width: 30rem;
  border-radius: 0.6rem;
`;