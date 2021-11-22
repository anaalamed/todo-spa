import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { RootState } from "../state/root.reducer";
import ModalAddTodo from "./components/TodosPage/ModalAddTodo";
import MenuDropdown from "./components/MenuDropdown";
import { devices } from "../styles/responsive";
import { Row } from "../styles/reset.css";

const TopBar = () => {
  let location = useLocation();
  const { me, loggedIn } = useSelector((state: RootState) => state.users);
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <Header>
      <Nav>

        <SLink to="/"><Logo style={{ margin: 0 }} src="logo.png" alt="Todo logo" /></SLink>

        <Menu>
          <SLink to="/">Home</SLink>
          <SLink to="/todos">Todos</SLink>
        </Menu>
      </Nav>

      {/* {loggedIn && (location.pathname === '/todos') ? (<ModalAddTodo></ModalAddTodo>) : (<SLink to="/"><Logo src="logo.png" alt="Todo logo" /></SLink>)} */}
      {loggedIn && (location.pathname === '/todos') ? (<ModalAddTodo></ModalAddTodo>) : null}


      <Row
        style={{ justifyContent: "flex-end", marginRight: "1rem" }}
        onClick={() => setMenuVisible(!isMenuVisible)}>
        <HelloText style={{ color: "navy", fontWeight: "bold" }}>Hi, {me.name || "guest"}</HelloText>
        {me.photoURL ? (<Logo src={me.photoURL} ></Logo>) : (<Icon icon={faUser} />)}
      </Row>

      {isMenuVisible ? <MenuDropdown setMenuVisible={setMenuVisible}></MenuDropdown> : null}

    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: greenyellow;
  position: fixed;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
  width: 100%;
`;

const Menu = styled.div`
  display: none;

  @media ${devices.laptop} {
    display: flex;
    align-items: center;
  }
`;

const Nav = styled.div`
  display: flex;
`;

const SLink = styled(Link)`
  color: navy;
  font-weight: bold;
  text-decoration: none;
  margin: 1rem;
  :hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 50%;
  margin: 1rem;
`;

const HelloText = styled.p`
  margin: 1rem;
  margin-left: auto;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;