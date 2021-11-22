import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../state/root.reducer";
import { Button, Main, Row, Title } from "../../styles/reset.css";
import Login from '../components/ProfilePage/LogIn'
import Profile from "../components/ProfilePage/Profile";
import SignUp from "../components/ProfilePage/SignUp";
import UpdateProfile from "../components/ProfilePage/UpdateProfile";

import '../../assets/logo.png'
import StartButtons from "../components/StartButtons";

const ProfilePage = () => {
  const history = useHistory();
  const { me, loggedIn } = useSelector((state: RootState) => state.users);

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


