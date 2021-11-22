import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from 'styled-components';
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../state/root.reducer";
import { updatedProfile, bgColorChoosen } from "../../../state/slices/users.slice";
import { updateUserFunc } from '../../../initializeApp';
import { Button, Input, InputContainer, InputIcon, StyledText, Title } from "../../../styles/reset.css";
import { faUser, faMobile, faInfo } from "@fortawesome/free-solid-svg-icons";
import UploadPhoto from "./UploadPhoto";
import { useHistory } from "react-router-dom";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import ColorPicker from "./ColorPicker";
// import UploadPhoto from '../../../components/ProfileScreen/UploadPhoto';
// import ColorPicker from '../components/ProfileScreen/ColorPicker';


export default function UpdateProfileScreen() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm();
    const { me } = useSelector((state: RootState) => state.users);
    const [color, setColor] = useState(me.bgColor);
    const [photoUrl, setPhotoUrl] = useState(me.photoURL || 'https://sharedigitalcard.com/user/uploads/user.png');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const phoneRegex = /^[0-9()-]+$/;
    const urlRegex = /^(https?:\/\/)?[0-9a-zA-Z]+\.[-_0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
    const { id } = useSelector((state: RootState) => state.users.me);

    const onSubmit = (data) => {
        const auth = getAuth();

        updateUserFunc({ id: me.id, bgColor: color, photoURL: photoUrl, ...data })
            .then(res => {
                dispatch(updatedProfile({ id: me.id, email: me.email, photoURL: photoUrl, ...data }))
                console.log(color)
                dispatch(bgColorChoosen({ color: color }));
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Title>Update Profile</Title>
            <Box>
                <UploadPhoto photoUrl={photoUrl} setPhotoUrl={setPhotoUrl}></UploadPhoto>
                <Form>
                    <Controller
                        name="name"
                        defaultValue={me.name}
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
                        control={control}
                        rules={{
                            minLength: 8,
                            pattern: phoneRegex
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <InputIcon icon={faMobile} />
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    placeholder='mobile'
                                />
                            </InputContainer>
                        )}
                        name="phoneNumber"
                        defaultValue={me.phoneNumber}
                    />
                    {errors.phoneNumber && <StyledText>This is not valid.</StyledText>}

                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <InputIcon icon={faInfo} />
                                <About
                                    onChange={onChange}
                                    value={value}
                                    placeholder='about'
                                />
                            </InputContainer>
                        )}
                        name="about"
                        defaultValue={me.about}
                    />
                    {errors.about && <StyledText>This is not valid.</StyledText>}


                    <ColorPicker currentColor={color} setColor={setColor}></ColorPicker>

                    <Button title="Submit" onClick={handleSubmit(onSubmit)} >Update</Button>
                </Form>
            </Box>
        </>

    );
}


const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = styled.textarea`
  background: #d5f6c6;
  border: 1px solid navy ;
  color: navy;
  padding: 20px;
  padding-left: 50px;
  width: 70%;
  margin: 10px;
  border-radius: 10px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  box-shadow: 10px 5px 5px greenyellow;
  overflow: hidden;
`;



