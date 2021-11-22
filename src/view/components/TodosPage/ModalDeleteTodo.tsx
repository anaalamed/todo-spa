import React, { useState } from 'react';
import Modal from 'react-modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, StyledText, TodoIconButton } from '../../../styles/reset.css';

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
            <TodoIconButton style={{ backgroundColor: "red" }} onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faTrash} /> </TodoIconButton>

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