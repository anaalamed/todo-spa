import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from 'styled-components';
import { Button, Input, InputContainer, InputIcon, StyledText, Title } from '../../../styles/reset.css';
import { registerFunc } from '../../../initializeApp'
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignupScreen() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        registerFunc(data)
            .then(res => {
                alert('registration successfuly')
            })
            .catch((error) => {
                alert('something went wrong');
            });
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const phoneRegex = /^[0-9()-]+$/;


    return (
        <>
            <Title>Registration</Title>
            <Box>
                <Form>
                    <Controller
                        name="name"
                        defaultValue=""
                        control={control}
                        rules={{
                            // required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <InputIcon icon={faUser} />
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    placeholder='name'
                                />
                            </InputContainer>
                        )}

                    />
                    {errors.name && <StyledText>This is not valid.</StyledText>}

                    <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        rules={{
                            // required: true,
                            // minLength: 8,
                            // pattern: emailRegex
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
                            // required: true,
                            // maxLength: 100,
                            // pattern: passwordRegex
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

                    <Button title="Submit" onClick={handleSubmit(onSubmit)} >Sign Up</Button>
                </Form>
            </Box>
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