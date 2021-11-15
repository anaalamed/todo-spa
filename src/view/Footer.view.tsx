import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <a href="https://tovana.io" target="_blank" rel="noopener noreferrer">
        tovana.io
      </a>
      &nbsp; learn and thrive &nbsp;
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;
