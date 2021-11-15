import React from "react";
import ReactDOM from "react-dom";
import store from "./state/configure.store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/reset.css";

const render = () => {
  const App = require("./view/App.view").default;
  console.log("process.env.NODE_ENV " + process.env.NODE_ENV);

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
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
