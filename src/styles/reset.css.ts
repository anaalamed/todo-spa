import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  /* padding: 5rem 0; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: navy;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: greenyellow;
  margin: 10px;
  margin-top: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  background: greenyellow;
  padding: 15px;
  border-radius: 10px;
  /* width: 80px; */
  width: 90%;
  margin-top: 10px;
  border: 1px solid navy;
  margin: 20px;
  color: navy;
  font-weight: bold;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  box-shadow: 10px 5px 5px yellow;
 `;

export const Separator = styled.div`
  margin: 10px;
  height: 2px;
  width: 80%;
  color: black;
  background: #7c7a7aaa;
`;

// ------------------------------------ Input ------------------------------------
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
`;

export const Input = styled.input`
  background: #d5f6c6;
  border: 1px solid navy ;
  color: navy;
  padding: 15px;
  padding-left: 50px;
  width: 70%;
  margin: 10px;
  border-radius: 10px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  box-shadow: 10px 5px 5px greenyellow;
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: relative;
  z-index: 100;
  top: 23px;
  font-size: 20px;
  left: 50px;
  color: navy;
`;

export const StyledText = styled.p`
  font-weight: bold;
  color: greenyellow;
  text-align: center;
  padding-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;


// ------------------------------------ Modal ------------------------------------
// export const WrapperModal = styled.View`
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
// `;

// export const ModalView = styled.View`
//   /* flex: 1; */
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: navy;
//   padding: 20px;
//   margin: 50px;
//   margin-top: 150px;
//   margin-bottom: 150px;

//   border-top-right-radius: 10px;
//   border-bottom-right-radius: 50px;
//   border-top-left-radius: 50px;
//   border-bottom-left-radius: 10px;
// `;

// export const Buttons = styled.View`
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
// `;

// export const StyledImage = styled.Image`
//   height: 100px;
//   width: 100px;
//   margin-bottom: 10px;
//   border-radius: 50px;
//   align-self: center;
// `;
