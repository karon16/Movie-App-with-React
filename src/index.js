import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./Components/Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Components/Theme/Theme";
import { BrowserRouter } from "react-router-dom";

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
