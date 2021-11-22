import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComment, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { updateTodoFunc } from '../../../initializeApp';
import { Todo } from '../../../../types';
import { RootState } from '../../../state/root.reducer';
import { updateTodo } from '../../../state/slices/todos.slice';
import { Button, Input, InputContainer, InputIcon, Row, StyledText, Title, TodoIconButton } from '../../../styles/reset.css';
import ChooseColor from './ChooseColor';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "navy",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderTopRightRadius: "10px",
    borderBottomRightRadius: "50px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "10px"
  },
};

Modal.setAppElement('#root');

interface Props {
  todo: Todo,
  setMenuVisible(boolean): void
}

const ModalUpdateTodo: React.FC<Props> = ({ todo, setMenuVisible }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.users);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isUrgent, setUrgent] = useState(todo.important);
  const [isError, setError] = useState(false);
  const [color, setColor] = useState(todo.color);

  let handleUpdate = async () => {
    updateTodoFunc({ id: todo.id, title: title, description: description, important: isUrgent, color: color })
      .then(res => {
        const updatedTodo = res.data;
        dispatch(updateTodo(updatedTodo));
        setMenuVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <TodoIconButton style={{ backgroundColor: "yellow" }} onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faPencilAlt} /> </TodoIconButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Title>Update Todo</Title>

        <InputContainer style={{ width: "100%" }}>
          <InputIcon icon={faPlus} />
          <Input
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            defaultValue={todo.title}
          />
        </InputContainer>

        <InputContainer style={{ width: "100%" }}>
          <InputIcon icon={faComment} />
          <Input
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
            defaultValue={todo.description}
          />
        </InputContainer>

        <Row style={{ justifyContent: "center" }}>
          <IsImportantBox onClick={() => setUrgent(!isUrgent)}>
            {isUrgent ? (<FontAwesomeIcon icon={faCheck} />) : null}
          </IsImportantBox>
          <StyledText style={{ color: "greenyellow", fontSize: 18, marginTop: 10 }}>Important</StyledText>
        </Row>

        <ChooseColor currentColor={color} setColor={setColor}></ChooseColor>

        {isError ? <StyledText style={{ color: "red" }}>Title is required!</StyledText> : null}

        <Row>
          <Button style={{ width: 90, backgroundColor: "grey" }} onClick={() => { setIsOpen(false), setMenuVisible(false) }}>Cancel</Button>
          <Button style={{ width: 90 }} onClick={handleUpdate} >Update</Button>
        </Row>

      </Modal>
    </div>
  );
}

export default ModalUpdateTodo;

const IsImportantBox = styled.button`
  background: ${props => (props.done ? "lightgreen" : "white")};
  width: 30px;
  height: 20px;
  margin: 12px;
  align-self: flex-start;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;