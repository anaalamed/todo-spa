import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from 'styled-components';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

import { loggedIn } from '../../../state/slices/users.slice'
import { getUserFunc } from '../../../initializeApp'
import { Button, Input, InputContainer, InputIcon, StyledText, Title } from "../../../styles/reset.css";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

export default function LoginScreen() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const email = userCredential.user.providerData[0].email;
                getUserFunc(email)
                    .then(res => {
                        console.log(res);
                        let user = res.data;
                        dispatch(loggedIn(user));
                        history.push('/');
                    })
                    .catch((error) => {
                        alert('something went wrong1');
                    });
            })
            .catch((error) => {
                alert('something went wrong2');
            });
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <>
            <Title>Log In</Title>
            <Box>
                <Form>

                    <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: true,
                            minLength: 8,
                            pattern: emailRegex
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <InputIcon icon={faEnvelope} />
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    placeholder='email'
                                />
                            </InputContainer>
                        )}
                    />
                    {errors.email && <StyledText>This is not valid.</StyledText>}

                    <Controller
                        name="password"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: true,
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <InputIcon icon={faLock} />
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    placeholder='password'
                                />
                            </InputContainer>
                        )}
                    />
                    {errors.password && <StyledText>This is not valid.</StyledText>}

                    <Button title="Submit" onClick={handleSubmit(onSubmit)} >Log In</Button>
                </Form>
            </Box >
        </>

    );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
