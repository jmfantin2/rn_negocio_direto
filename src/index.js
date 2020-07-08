import React, { Component } from "react";

import RootStackContainer from "./routes";
import { ThemeProvider } from "styled-components";
import { colors, strings } from "../../assets/general";

import "./config/ReactotronConfig";
import { setTopLevelNavigator } from "./utils";

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
