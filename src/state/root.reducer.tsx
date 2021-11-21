import { combineReducers } from "redux";
import todos_slice from "./slices/todos.slice";
import users_slice from "./slices/users.slice";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
  todos: todos_slice,
  users: users_slice,
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>