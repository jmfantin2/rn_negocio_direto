import React, { Component } from "react";

import RootStackContainer from "./src/routes";
import { ThemeProvider } from "styled-components";
import { general } from "./assets/general";

import { setTopLevelNavigator } from "./src/utils";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={general.styles}>
        <RootStackContainer
          ref={(navigatorRef) => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
      </ThemeProvider>
    );
  }
}
