import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigator(nav) {
  if (nav) {
    navigator = nav;
  }
}

function navigate(routeName, params) {
  if (navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params });
    navigator.dispatch(action);
  }
}

function goBack() {
  if (navigator) {
    let action = NavigationActions.back({});
    navigator.dispatch(action);
  }
}

export default {
    navigate,
    setNavigator,
    goBack,
  };