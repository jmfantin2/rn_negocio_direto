import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';

import RootStackContainer from './routes';
import { colors, strings } from '../../assets/general';

import './config/ReactotronConfig';
import { setTopLevelNavigator } from './utils';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <ThemeProvider theme={general.styles}>
          <RootStackContainer
            ref={(navigatorRef) => {
              setTopLevelNavigator(navigatorRef);
            }}
          />
        </ThemeProvider>
      </PaperProvider>
    );
  }
}
