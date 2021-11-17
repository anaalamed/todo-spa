import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

// import UpdateTodo from './ModalUpdateTodo';

import { deleteTodo, toggleComplete } from "../../../state/slices/todos.slice";
import { deleteTodoFunc, toggleCompleteTodoFunc } from '../../../initializeApp';
// import ModalTodoDetails from './ModalTodoDetails';
import { Todo } from '../../../../types';
import { StyledText } from '../../../styles/reset.css';
import MenuTodo from './MenuTodo';
import ModalTodoDetails from './ModalTodoDetails';

interface Props {
  todo: Todo,
  order: number
}

const Profile: React.FC<Props> = ({ todo, order }) => {

  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleToggleComplete = async () => {
    toggleCompleteTodoFunc(todo)
      .then(res => {
        dispatch(toggleComplete({ id: todo.id, completed: !todo.completed, updatedAt: res.data.updatedAt }));
        setMenuVisible(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Box color={todo.color || "lightcyan"}>
        <Main>
          <IsDoneBox done={todo.completed} onClick={handleToggleComplete}>
            {todo.completed ? (<FontAwesomeIcon icon={faCheck} />) : null}
          </IsDoneBox>

          {todo.important ? <StyledText style={{ color: "red", fontSize: 30, paddingBottom: 0, paddingRight: 5 }}>!</StyledText> : null}
          <ModalTodoDetails todo={todo} setModalVisible={setModalVisible}></ModalTodoDetails>

          <Button onClick={() => setMenuVisible(!isMenuVisible)}><FontAwesomeIcon icon={faEllipsisH} /> </Button>
        </Main>


        {isMenuVisible ? <MenuTodo todo={todo} isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} handleToggleComplete={handleToggleComplete}></MenuTodo> : null}
      </Box>
    </>
  );
}

export default Profile;

const Box = styled.div`
  color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #49499c;
  background: ${props => props.color};
  border: 1px solid navy;

  width: 95%;
  padding: 10px;
  padding-left: 20px;
  padding-right: 15px;
  margin-bottom: 5px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IsDoneBox = styled.button`
  background: ${props => (props.done ? "lightgreen" : "white")};
  width: 30px;
  height: 20px;
  border-radius: 10px;
  margin-right: 8px;
  border: 1px solid navy;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const TodoText = styled.h2`
  color: navy;
  font-size: 20px;
  width: 75%;
  font-weight: bold;
`;

const Button = styled.button`
  background: greenyellow;
  padding: 2px;
  border-radius: 10px;
  width: 20px;
  margin-right: 5px;
  border: 1px solid navy;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  position: absolute;
  left: 80%;
`;