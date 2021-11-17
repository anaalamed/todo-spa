import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/root.reducer";
import { margin } from "polished";
import { Row } from "../styles/reset.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalAddTodo from "./components/TodosPage/ModalAddTodo";
import Modal from "./components/TodosPage/ModalAddTodo";



const TopBar = () => {
  const { me, loggedIn } = useSelector((state: RootState) => state.users);
  const [isAddVisible, setAddVisible] = useState(false)

  return (
    <Header>
      <SLink to="/"> <Logo src="logo.png" alt="Todo logo" /></SLink>
      <SLink to="/">Home</SLink>
      <SLink to="/todos">Todos</SLink>

      <Row>
        <p style={{ marginLeft: 100 }}>{me.name || "guest"}</p>
        {/* <FontAwesomeIcon onClick={() => setAddVisible(true)} icon={faPlus} ></FontAwesomeIcon> */}
      </Row>

      {/* {isAddVisible ? <ModalAddTodo></ModalAddTodo> : null} */}
      <Modal></Modal>

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
  padding: 1.5rem;
  display: flex;
  align-items: center;
  z-index: 101;
`;

const SLink = styled(Link)`
  color: navy;
  font-weight: bold;
  text-decoration: none;
  margin-right: 2rem;
  :hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 4rem;
  cursor: pointer;
  border-radius: 50%;
`;
