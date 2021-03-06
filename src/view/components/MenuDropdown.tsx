import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAuth, signOut } from "firebase/auth";

import { RootState } from "../../state/root.reducer";
import { loggedOut } from "../../state/slices/users.slice";
import { removeTodos } from "../../state/slices/todos.slice";
import { devices } from "../../styles/responsive";

interface Props {
  setMenuVisible(boolean): void
}

const TopBar: React.FC<Props> = ({ setMenuVisible }) => {
  const { loggedIn } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(loggedOut());
      dispatch(removeTodos());
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Box onClick={() => setMenuVisible(false)}>
      <SLink to="/" >Home</SLink>
      <SLink to="/todos">My Todos</SLink>

      {loggedIn ? (
        <>
          <Text onClick={handleLogOut}>Log Out</Text>
        </>
      ) : (
          <>
            <SLink to="/signup" >Sign Up</SLink>
            <SLink to="/login" >Log In</SLink>
          </>
        )}
    </Box>
  );
};
export default TopBar;

const Box = styled.div`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: greenyellow;
  position: fixed;
  left: 0;
  right: 0;
  top: 8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
  width: 100%;

  @media ${devices.laptop} {
    display: none;
  }
`;

const SLink = styled(Link)`
  color: navy;
  font-weight: bold;
  text-decoration: none;
  margin: 1rem;
  border-bottom: 1px solid navy;
  :hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  color: navy;
  font-weight: bold;
  text-decoration: none;
  margin: 1rem;
  border-bottom: 1px solid navy;
  :hover {
    text-decoration: underline;
  }
`;