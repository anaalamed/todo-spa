import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/root.reducer";
import { Row, StyledText } from "../styles/reset.css";
import ModalAddTodo from "./components/TodosPage/ModalAddTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuDropdown from "./components/MenuDropdown";
import { faUser } from '@fortawesome/free-solid-svg-icons';


const TopBar = () => {
  let location = useLocation();
  const { me, loggedIn } = useSelector((state: RootState) => state.users);
  const [isMenuVisible, setMenuVisible] = useState(false);


  return (
    <Header>


      {/* <SLink to="/">Home</SLink> */}
      {/* <SLink to="/todos">Todos</SLink> */}
      {loggedIn && (location.pathname === '/todos') ? (<ModalAddTodo></ModalAddTodo>) : (<SLink to="/"><Logo src="logo.png" alt="Todo logo" /></SLink>)}

      <Row onClick={() => setMenuVisible(!isMenuVisible)}
        style={{ justifyContent: "flex-end", marginRight: "1rem" }}>
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

const SLink = styled(Link)`
  color: navy;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1rem;
  :hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 4rem;
  cursor: pointer;
  border-radius: 50%;
  margin: 1rem;
`;

const HelloText = styled.p`
  margin: 1rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;
