import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import store from "./state/store";
import DateAdapter from "@mui/lab/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";
import {LocalizationProvider} from "@mui/lab";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider locale={ruLocale} dateAdapter={DateAdapter}>
        <App />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
