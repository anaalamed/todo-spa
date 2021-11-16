import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

import { loggedOut } from "../../../state/slices/users.slice";
import { removeTodos } from "../../../state/slices/todos.slice";
import { RootState } from '../../../state/root.reducer';
import { Button, Row, Title } from '../../../styles/reset.css';


const Profile: React.FC = () => {

  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.users);
  const auth = getAuth();
  const defaultProfileImage = 'https://sharedigitalcard.com/user/uploads/user.png';

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(loggedOut());
      dispatch(removeTodos());
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Title>My Profile</Title>
      <Box>
        <StyledImage src={me.photoURL || defaultProfileImage} ></StyledImage>

        <Field>Name: <ValueField>{me.name}</ValueField> </Field>
        <Field>Email: <ValueField>{me.email}</ValueField> </Field>
        <Field>Phone: <ValueField>{me.phoneNumber}</ValueField></Field>
        <Field>About: <ValueField>{me.about}</ValueField></Field>

        <Row>
          <ProfileButton onClick={() => console.log("navigation")} >Update</ProfileButton>
          <ProfileButton onClick={handleLogOut} >Log Out</ProfileButton>
        </Row>
      </Box>
    </>
  );
}

export default Profile;

const Box = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 80%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  background: greenyellow;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 50px;
  align-self: center;
`;

const Field = styled.span`
  color: navy;
`;

const ValueField = styled.span`
  font-size: 25px;
`;

const ProfileButton = styled(Button)`
  background: navy;
  width: 40%;
  color: greenyellow;
`;

