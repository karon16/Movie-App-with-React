import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./Components/Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Components/Theme/Theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
