import React, { Component } from "react";

import RootStackContainer from "./src/routes";

import { setTopLevelNavigator } from "./src/utils";

export default class App extends Component {
  render() {
    return (
      <RootStackContainer
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
