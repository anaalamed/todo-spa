import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Row } from "../../styles/reset.css";

const StartButtons = () => {
    const history = useHistory();

    return (
        <Row style={{ margin: 30 }}>
            <Button onClick={() => history.push('/signup')}>Sign Up</Button>
            <Button onClick={() => history.push('/login')}>Log In</Button>
        </Row>
    );
};
export default StartButtons;
