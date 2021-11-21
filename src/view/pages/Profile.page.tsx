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

const ProfilePage = () => {
  const history = useHistory();
  const { me, loggedIn } = useSelector((state: RootState) => state.users);

  return (
    <Main>
      <Title style={{ margin: 30 }}>My profile</Title>


      {loggedIn ? <Profile></Profile> : (
        <Row style={{ margin: 30 }}>
          <Button onClick={() => history.push('/signup')}>Sign Up</Button>
          <Button onClick={() => history.push('/login')}>Log In</Button>
        </Row>
      )}

      <Logo src="logo.png"></Logo>
    </Main>
  );
};
export default ProfilePage;


const Logo = styled.img`
  width: 30rem;
  border-radius: 0.6rem;
`;


