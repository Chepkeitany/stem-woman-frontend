import React from "react";
import { View } from "react-native";
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { loginWithGoogleRequest } from '../../actions/user';
import styles from './styles';

class LoginScreen extends React.Component {
  signIn = async() => {
    const { dispatchLoginWithGoogleRequest } = this.props;

    dispatchLoginWithGoogleRequest();
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

const mapDispatchToProps = {
  dispatchLoginWithGoogleRequest: loginWithGoogleRequest,
};

export default connect(null, mapDispatchToProps) (LoginScreen);
