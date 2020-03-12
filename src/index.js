import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import blueGrey from "@material-ui/core/colors/blueGrey";
// import lightGreen from "@material-ui/core/colors/lightGreen";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   light: lightGreen[300],
    //   main: lightGreen[500],
    //   dark: lightGreen[700]
    // },
    // secondary: {
    //   light: blueGrey[300],
    //   main: blueGrey[500],
    //   dark: blueGrey[700]
    // },
  type: "light"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
