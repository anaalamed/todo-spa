import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import { getTodosFunc } from '../../initializeApp';
import { RootState } from '../../state/root.reducer';
import { getTodos } from '../../state/slices/todos.slice';
import { Title, Separator } from '../../styles/reset.css';
import Todo from '../components/TodosPage/Todo';
import SearchTodo from '../components/TodosPage/SearchTodo';
import StartButtons from '../components/StartButtons';
import { devices } from '../../styles/responsive';

function TodosPage() {
    const dispatch = useDispatch();
    const { todos, filteredTodos } = useSelector((state: RootState) => state.todos);
    const { me, loggedIn } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        if (me.email) {
            const handleGet = () => {
                getTodosFunc(me)
                    .then(res => {
                        dispatch(getTodos(res.data));
                    })
                    .catch((error) => {
                        console.log('error', error);
                    });
            }
            handleGet();
        }
    }, [me]);

    return (
        <Box color={me.bgColor || "navy"}>
            <Title >Todos</Title>

            {loggedIn ? (<SearchTodo></SearchTodo>) : null}

            <Separator />
            <Section>
                {loggedIn ?
                    (
                        <>
                            {filteredTodos.length !== 0 ? (
                                <>
                                    <Title style={{ fontSize: 20 }}>Wait To Do...</Title>
                                    {filteredTodos.filter(todo => todo.completed === false).map((todo, i) => (<Todo key={i} order={i} todo={todo}></Todo>))}
                                    {filteredTodos.length === 0 ? null : <Separator></Separator>}

                                    <Title style={{ fontSize: 20 }}>Done!</Title>
                                    {filteredTodos.filter(todo => todo.completed === true).map((todo, i) => (<Todo key={i} order={i} todo={todo}></Todo>))}
                                </>
                            ) : null}
                        </>
                    ) :
                    (<>
                        <MyText>Please log in to see your todos here! </MyText>
                        <StartButtons></StartButtons>
                        <img width="250px" src="logo.png" />
                    </>)}

                {loggedIn && todos.length === 0 ? <MyText>There is no to do yet... Please add!</MyText> : null}
            </Section>
        </Box>
    );
}

export default TodosPage;

const Box = styled.section`
  min-height: 85vh;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.color};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  /* padding-left: 10px; */
  padding-right: 10px;
  margin: 10px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

  @media ${devices.laptop} {
    width: 100%;
    padding-bottom: 5rem;
  }
`;

const MyText = styled.h2`
  text-align: center;
  color: greenyellow;
  font-weight: bold;
`;