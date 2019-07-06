/**
 * Initialized through react-native-cli
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ThemeContext, getTheme } from 'react-native-material-ui';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/NavigationService';
import store from './store';
import colors from './constants/colors';

type Props = {};

const uiTheme = {
  palette: {
    primaryColor: colors.primaryColor,
  }
}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <AppNavigator ref={(navigatorRef) => {
            NavigationService.setNavigator(navigatorRef);
          }} />
        </ThemeContext.Provider>
      </Provider>
    );
  }
}
