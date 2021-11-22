import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";

import { deleteTodo } from "../../../state/slices/todos.slice";
import { deleteTodoFunc } from '../../../initializeApp';
import { Todo } from '../../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalDeleteTodo from './ModalDeleteTodo';
import ModalUpdateTodo from './ModalUpdateTodo';
import ModalDetailsTodo from './ModalTodoDetails';

interface Props {
  todo: Todo,
  handleToggleComplete(): void,
  isMenuVisible: boolean,
  setMenuVisible(boolean): void
}

const MenuTodo: React.FC<Props> = ({ todo, isMenuVisible, setMenuVisible, handleToggleComplete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTodoFunc(todo)
      .then(res => {
        dispatch(deleteTodo(todo.id));
        setMenuVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Box >
        <Tools>
          <Button style={{ backgroundColor: "greenyellow" }} onClick={handleToggleComplete}>
            {todo.completed ? (<FontAwesomeIcon icon={faTimes} />) : (<FontAwesomeIcon icon={faCheck} />)}
          </Button>

          <ModalUpdateTodo todo={todo} setMenuVisible={setMenuVisible}></ModalUpdateTodo>
          <ModalDeleteTodo title={todo.title} handleDelete={handleDelete} setMenuVisible={setMenuVisible}></ModalDeleteTodo>
        </Tools>
      </Box>
    </>
  );
}

export default MenuTodo;

const Box = styled.div`
  z-index: 100;
  display: flex;
  justify-content: flex-end;

  padding-right: 15px;
`;

const Tools = styled.div`
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 2px;
  border-radius: 10px;
  width: 20px;
  margin: 2px;
  border: 1px solid navy;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;