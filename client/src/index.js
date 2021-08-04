import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "react-hook-popup";

ReactDOM.render(
  <PopupProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PopupProvider>,
  document.getElementById("root")
);
