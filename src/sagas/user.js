import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import NavigationService from '../navigation/NavigationService';

import types, {
  loginWithGoogleError,
  setUserInfo,
} from '../actions/user';

export function* loginWithGoogle() {
    try {
      yield call(GoogleSignin.hasPlayServices);
      yield call(GoogleSignin.configure, {
        webClientId: '795598430361-2q74kqrf62ve1jjaloh1tg3d1vdismog.apps.googleusercontent.com',
        offlineAccess: false,
      });
  
      const { user } = yield GoogleSignin.signIn();
      // TODO Make api call to stem-woman.info
      console.log(user);

      yield put(setUserInfo({ user }));
      NavigationService.navigate('Main');
    } catch (error) {
      // Handle different types of Google Errors
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
  
      yield put(loginWithGoogleError());
    }
  }
  
  export function* watchGoogleLogin() {
    yield takeLatest(types.LOGIN_WITH_GOOGLE_REQUEST, loginWithGoogle);
  }

  export function* userSaga() {
    yield all([
      fork(watchGoogleLogin),
    ]);
  }