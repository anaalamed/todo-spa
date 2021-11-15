import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetch_random_joke } from "../../state/slices/joker.slice";
import { RootState } from "../../state/root.reducer";

const Joker = () => {
  const dispatch = useDispatch();
  const { is_loading, data, error_msg } = useSelector((state: RootState) => state.joker);

  return (
    <Main>
      <Title onClick={() => dispatch(fetch_random_joke())}>
        Learn something new about chuck
      </Title>
      <Description showQuotes={data.length > 0}>
        {is_loading && "Fetching wizdom..."}
        {error_msg.length > 0 && error_msg}
        {data.length > 0 && data}
      </Description>
    </Main>
  );
};
export default Joker;

const Main = styled.main`
  height: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 5rem;
  line-height: 1.15;
  color: #555;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
  cursor: pointer;
`;
const Description = styled.p`
  line-height: 1.15;
  text-align: center;
  font-size: 2.6rem;
  max-width: 100rem;
  color: #555;
  ${({ showQuotes }) =>
    showQuotes
      ? `
    ::before,
    ::after {
      content: '"';
      font-size: 5rem;
    }
  `
      : ""};
`;
