import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import styled from 'styled-components';
import { compose } from 'redux'

import { getTodos } from '../../state/slices/todos.slice';
import { RootState } from '../../state/root.reducer';
import { getTodosFunc } from '../../initializeApp';
import { Title, Separator } from '../../styles/reset.css';
import Todo from '../components/TodosPage/Todo';
import { firestoreConnect, useFirestoreConnect } from 'react-redux-firebase'
import { getFirestore } from 'firebase/firestore';
import SearchTodo from '../components/TodosPage/SearchTodo';
import StartButtons from '../components/StartButtons';


function TodosPage() {

    const dispatch = useDispatch();
    const { todos, filteredTodos, is_loading, error_msg } = useSelector((state: RootState) => state.todos);
    const { me, loggedIn } = useSelector((state: RootState) => state.users);

    console.log(me.bgColor);

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
                                    {/* {todos.length === 0 ? null : <Separator></Separator>} */}

                                    <Title style={{ fontSize: 20 }}>Done!</Title>
                                    {filteredTodos.filter(todo => todo.completed === true).map((todo, i) => (<Todo key={i} order={i} todo={todo}></Todo>))}
                                </>
                            ) : null}
                        </>
                    ) :
                    (<>
                        <MyText>Please log in to see your todos here! </MyText>
                        <StartButtons></StartButtons>
                    </>)}

                {loggedIn && todos.length === 0 ? <MyText>There is no to do yet... Please add!</MyText> : null}
            </Section>
        </Box>
    );
}

export default TodosPage;
// export default compose(
//     firestoreConnect(() => ['todos']), // or { collection: 'todos' }
//     connect((state: RootState, props) => ({
//         todos: state.firestore.ordered.todos
//     }))
// )(TodosPage)


const Box = styled.main`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;

`;

const MyText = styled.h2`
  text-align: center;
  color: greenyellow;
  font-weight: bold;
`;

