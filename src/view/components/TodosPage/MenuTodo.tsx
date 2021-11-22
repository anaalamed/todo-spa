import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { deleteTodoFunc } from '../../../initializeApp';
import { Todo } from '../../../../types';
import { deleteTodo } from "../../../state/slices/todos.slice";
import ModalDeleteTodo from './ModalDeleteTodo';
import ModalUpdateTodo from './ModalUpdateTodo';
import { TodoIconButton } from '../../../styles/reset.css';

interface Props {
  todo: Todo,
  handleToggleComplete(): void,
  setMenuVisible(boolean): void
}

const MenuTodo: React.FC<Props> = ({ todo, setMenuVisible, handleToggleComplete }) => {
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
          <TodoIconButton style={{ backgroundColor: "greenyellow" }} onClick={handleToggleComplete}>
            {todo.completed ? (<FontAwesomeIcon icon={faTimes} />) : (<FontAwesomeIcon icon={faCheck} />)}
          </TodoIconButton>

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
  justify-content: space-between;
  align-items: center;
`;