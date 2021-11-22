import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { toggleComplete } from "../../../state/slices/todos.slice";
import { toggleCompleteTodoFunc } from '../../../initializeApp';
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
          <ModalTodoDetails todo={todo} ></ModalTodoDetails>

          <Button onClick={() => setMenuVisible(!isMenuVisible)}><FontAwesomeIcon icon={faEllipsisH} /> </Button>
        </Main>

        {isMenuVisible ? <MenuTodo todo={todo} isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} handleToggleComplete={handleToggleComplete}></MenuTodo> : null}
      </Box>
    </>
  );
}

export default Profile;

const Box = styled.div`
  background: ${props => props.color};
  border: 1px solid navy;

  width: 95%;
  padding: 10px;
  padding-left: 20px;
  padding-right: 15px;
  margin: 5px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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

const Button = styled.button`
  background: greenyellow;
  padding: 2px;
  border-radius: 10px;
  width: 20px;
  /* margin-right: 5px; */
  border: 1px solid navy;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  align-self: flex-start;
  justify-self: end;  
  margin-left: auto;
`;