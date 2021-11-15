import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Logo src="logo-tovana.png" alt="Tovana logo" />
      <Title>React TS template</Title>
      <Description>bla-bla-bla</Description>
    </Main>
  );
};
export default Home;

const Main = styled.main`
  height: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 42rem;
  border-radius: 0.6rem;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
`;
const Description = styled.p`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
`;
