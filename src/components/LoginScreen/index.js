import React from "react";
import { View } from "react-native";
import { GoogleSigninButton, GoogleSignin, statusCodes } from 'react-native-google-signin';
import styles from './styles';

class LoginScreen extends React.Component {
  signIn = async() => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure({
        webClientId: '795598430361-2q74kqrf62ve1jjaloh1tg3d1vdismog.apps.googleusercontent.com',
        offlineAccess: false,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        // this.setState({ isSigninInProgress: true });
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  }

  render() {
    return (
      <View style={styles.login}>
        <GoogleSigninButton
          style={{ width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.signIn}
        />
      </View>

    )
  }
}

export default LoginScreen;