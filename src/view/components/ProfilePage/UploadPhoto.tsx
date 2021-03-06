import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../../state/root.reducer';
import { updatedPhoto } from '../../../state/slices/users.slice';
import { Button, Row } from '../../../styles/reset.css';
import { devices } from '../../../styles/responsive';

interface Props {
    photoUrl: string,
    setPhotoUrl(string): void,
}

const UserImagePicker: React.FC<Props> = ({ setPhotoUrl, photoUrl }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useSelector((state: RootState) => state.users.me);

    const [images, setImages] = useState([]);

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        setImages(imageList);
    };

    const uploadImage = async (imageUri) => {
        const storage = getStorage();
        const pic = ref(storage, `profilePhotos/${id}-profile.png`);

        // blob
        const response = await fetch(imageUri);
        const blob = await response.blob();

        const uploadTask = uploadBytesResumable(pic, blob);

        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert("something went wrong...");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setPhotoUrl(downloadURL);
                    dispatch(updatedPhoto(downloadURL))
                    history.push("/");
                });
            }
        );
    };

    return (
        <Row style={{ justifyContent: "center" }}>
            <Image src={images[0]?.dataURL || photoUrl} style={{ alignSelf: "flex-start" }} />

            <ImageUploading
                value={images}
                onChange={onChange}
            >
                {({ onImageUpload }) => (
                    <Column>
                        <MyButton onClick={onImageUpload}>Pick an image</MyButton>
                        {images.length !== 0 ? (<MyButton onClick={() => uploadImage(images[0].dataURL)}>Save</MyButton>) : null}
                    </Column>
                )}
            </ImageUploading>
        </Row>
    );
}

export default UserImagePicker;

const Image = styled.img`
  border-radius:50%;
  margin: 1rem;
  width: 8rem;
  height: 8rem;

  @media ${devices.laptop} {
    width: 20rem;
    height: 20rem;
    margin-bottom: 2.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyButton = styled(Button)`
  margin: 0.5rem;
  box-shadow: none;
  width: auto;
  padding: 0.5rem 1rem;

  @media ${devices.laptop} {
    width: 20rem;
    height: 5rem;
    margin-left: 4rem;
  }
`;