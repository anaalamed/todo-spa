import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { devices } from "./responsive";

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

  @media ${devices.laptop} {
    font-size: 35px;
  }
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
  cursor: pointer;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  box-shadow: 10px 5px 5px yellow;

  @media ${devices.laptop} {
    /* padding: 1rem; */
    width: 45%;
  }
 `;

export const Separator = styled.div`
  margin: 10px;
  height: 2px;
  width: 80%;
  color: black;
  background: #7c7a7aaa;

  @media ${devices.laptop} {
    width: 55%;
  }
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

  @media ${devices.laptop} {
    width: 70%;
  }
`;

export const TodoMenuIcon = styled(FontAwesomeIcon)`
  color: navy;
  font-weight: bold;
  margin: 1rem;
  font-size: 2rem;

  @media ${devices.laptop} {
    padding: 1rem;
  }
`;

export const TodoIconButton = styled.button`
  padding: 2px;
  border-radius: 10px;
  width: 20px;
  margin: 2px;
  border: 1px solid navy;
  cursor: pointer;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  @media ${devices.laptop} {
    padding: 1rem;
    width: 35px;
  }
`;

// ------------------------------------ Input ------------------------------------
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;

  @media ${devices.laptop} {
    width: 35%;
  }
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