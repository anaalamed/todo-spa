import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Todo } from '../../../../types';
import { Button, Row, StyledText, Title } from '../../../styles/reset.css';

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
        maxWidth: "70%",

        borderTopRightRadius: "10px",
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "10px"
    },
};

Modal.setAppElement('#root');

interface Props {
    todo: Todo,
}

const ModalDetailsTodo: React.FC<Props> = ({ todo }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div>
            <TodoText onClick={() => setIsOpen(true)}>{todo.title}</TodoText>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Details Modal"
            >
                <Row style={{ justifyContent: "center" }}>
                    {todo.important ? <StyledText style={{ color: "red", fontSize: 25, paddingRight: 5 }}>!</StyledText> : null}
                    <Title style={{ textAlign: "center", paddingBottom: 20 }}> {todo.title}</Title>
                </Row>

                {todo.description ? (<StyledText>Description: {todo.description}</StyledText>) : null}
                <StyledText>Done: {todo.completed ? "Oh, yes..." : "Not yet..."}</StyledText>
                {todo.createdAt ? (<StyledText>Created at: {todo.createdAt}</StyledText>) : null}
                {todo.updatedAt ? (<StyledText>Updated at: {todo.updatedAt}</StyledText>) : null}

                <ColorView color={todo.color}></ColorView>

                <Button style={{ width: 90 }} onClick={() => setIsOpen(false)} >Ok</Button>

            </Modal>
        </div>
    );
}

export default ModalDetailsTodo;

const ColorView = styled.div`
  width: 100%;
  height: 15px;
  background: ${(props) => props.color};

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
`;

const TodoText = styled.h2`
  color: navy;
  font-size: 20px;
  width: 20rem;
  font-weight: bold;
  /* background: pink; */
`;