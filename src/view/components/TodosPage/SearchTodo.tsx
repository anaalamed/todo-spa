import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { filterTodos } from '../../../state/slices/todos.slice';
import { RootState } from '../../../state/root.reducer';
import { InputContainer } from '../../../styles/reset.css';
import { devices } from '../../../styles/responsive';

export default function SearchTodo() {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    dispatch(filterTodos(filtered));
  }

  return (
    <Box>
      <InputContainer style={{ width: "100%" }}>
        <Input
          placeholder="Type here to search your todo..."
          onChange={e => { handleSearch(e) }}
          defaultValue={""}
        />
        <Button onClick={handleSearch} >
          <Icon icon={faSearch} style={{ fontSize: 23, alignSelf: "flex-end" }} />
        </Button>
      </InputContainer>
    </Box>
  );
}

const Box = styled.div`
  color: white;
  flex-direction: row;
`;

const Input = styled.input`
  background: #d5f6c6;
  color: navy;
  padding-left: 20px;
  width: 270px;
  border: 3px solid navy;

  border-top-left-radius: 50px;
  border-bottom-left-radius: 20px;

  @media ${devices.laptop} {
    width: 400px;
  }
`;

const Button = styled.button`
  background: #6CBF40;
  padding: 10px;
  border: 3px solid navy;
  border-left: none;
  cursor: pointer;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  z-index: 100;
  font-size: 20px;
  color: navy;
`;