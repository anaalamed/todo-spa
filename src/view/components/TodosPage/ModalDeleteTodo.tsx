import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Button, Row, StyledText } from '../../../styles/reset.css';

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
    title: string,
    handleDelete(): void,
    setMenuVisible(boolean): void
}

const ModalDeleteTodo: React.FC<Props> = ({ title, handleDelete, setMenuVisible }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div>
            <IconButton style={{ backgroundColor: "red" }} onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faTrash} /> </IconButton>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <StyledText>Are you sure you want to delete this todo: {title}?</StyledText>

                <Row>
                    <Button style={{ width: 90, backgroundColor: "grey" }} onClick={() => { setIsOpen(false), setMenuVisible(false) }} >No</Button>
                    <Button style={{ width: 90 }} onClick={() => { handleDelete(), setIsOpen(false), setMenuVisible(false) }} >Yes</Button>
                </Row>

            </Modal>
        </div>
    );
}

export default ModalDeleteTodo;

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

const IconButton = styled.button`
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



