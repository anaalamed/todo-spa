import React from "react";
import ReactDOM from "react-dom";
import store from "./state/configure.store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase/compat/app'

import './initializeApp';
import { GlobalStyles } from "./styles/reset.css";
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const render = () => {
  const App = require("./view/App.view").default;
  console.log("process.env.NODE_ENV " + process.env.NODE_ENV);

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <App />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
      <GlobalStyles />
    </React.StrictMode>,
    document.querySelector("#root")
  );
};

render();

// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("./view/App.view", render);
// }
