import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      Todo App
      <Logo src="myLogo.png"></Logo>
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: navy;
  font-weight: bold;
  text-decoration: none;
  background: greenyellow;
`;

const Logo = styled.img`
  width: 5rem;
  border-radius: 0.6rem;
`;
