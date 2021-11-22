import { faCheck, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodoFunc } from '../../../initializeApp';
import { RootState } from '../../../state/root.reducer';
import { addTodo } from '../../../state/slices/todos.slice';
import { Button, Input, InputContainer, InputIcon, Row, StyledText, Title } from '../../../styles/reset.css';
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

function ModalAddTodo() {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.users);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isUrgent, setUrgent] = useState(false);
    const [isError, setError] = useState(false);
    const [color, setColor] = useState('lightcyan');

    useEffect(() => {
        if (title !== '') setError(false);
    }, [title])

    const handleAddTodo = () => {
        const todo = { title: title, description: description, userId: me.email, important: isUrgent, color: color };
        if (title === '') setError(true);

        if (title) {
            addTodoFunc(todo)
                .then(res => {
                    const todo = res.data;
                    dispatch(addTodo(todo));
                    setTitle('');
                    setDescription('');
                    setError(false);
                    setIsOpen(false);
                })
                .catch((error) => {
                    alert("something went wrong")
                });
        }
    }

    return (
        <div>
            <Icon onClick={() => setIsOpen(true)} icon={faPlus} />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Title>Add New Todo</Title>

                <InputContainer style={{ width: "100%" }}>
                    <InputIcon icon={faPlus} />
                    <Input
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                        defaultValue={title}
                    />
                </InputContainer>

                <InputContainer style={{ width: "100%" }}>
                    <InputIcon icon={faComment} />
                    <Input
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                        defaultValue={description}
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
                    <Button style={{ width: 90, backgroundColor: "grey" }} onClick={() => { setIsOpen(false), setTitle(""), setDescription(""), setError(false), setUrgent(false) }}>Cancel</Button>
                    <Button style={{ width: 90 }} onClick={handleAddTodo} >Add</Button>
                </Row>

            </Modal>
        </div>
    );
}

export default ModalAddTodo;

const IsImportantBox = styled.button`
  background: ${props => (props.done ? "lightgreen" : "white")};
  width: 30px;
  height: 20px;
  margin: 12px;
  /* margin-left: 10px; */
  align-self: flex-start;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: navy;
  font-weight: bold;
  margin: 1rem;
  font-size: 2rem;
`;