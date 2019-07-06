/**
 * Initialized through react-native-cli
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider }  from "react-redux";
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/NavigationService';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator ref={(navigatorRef) => {
            NavigationService.setNavigator(navigatorRef);
          }} />
      </Provider>
    );
  }
}
