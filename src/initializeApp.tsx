import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore' // <- needed if using firestore

const firebaseConfig = {
    apiKey: "AIzaSyCbtjWerogpa2Xm2JGLZRE6yLh_7Hz7tTo",
    authDomain: "anaalamed-todo-mobile.firebaseapp.com",
    projectId: "anaalamed-todo-mobile",
    storageBucket: "anaalamed-todo-mobile.appspot.com",
    messagingSenderId: "417992404319",
    appId: "1:417992404319:web:0ecfb930a803b6f26c5aea",
    measurementId: "G-GESCRP0W54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// firebase.firestore().settings({ timestanpsSnapsots: true })

const storage = getStorage();

const functions = getFunctions();

// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "localhost", 5001);

export const registerFunc = httpsCallable(functions, 'register');
export const getUserFunc = httpsCallable(functions, 'getUser');
export const updateUserFunc = httpsCallable(functions, 'updateUser');
export const uploadPhotoFunc = httpsCallable(functions, 'uploadPhoto');


export const getTodosFunc = httpsCallable(functions, 'getTodos');
export const addTodoFunc = httpsCallable(functions, 'addTodo');
export const deleteTodoFunc = httpsCallable(functions, 'deleteTodo');
export const updateTodoFunc = httpsCallable(functions, 'updateTodo');
export const toggleCompleteTodoFunc = httpsCallable(functions, 'toggleCompleteTodo');

export default firebase;