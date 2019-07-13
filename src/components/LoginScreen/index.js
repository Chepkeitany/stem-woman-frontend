import React from "react";
import { Image, View } from "react-native";
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { loginWithGoogleRequest } from '../../actions/user';
import logoImage from '../../assets/logo.png';
import styles from './styles';

class LoginScreen extends React.Component {
  signIn = async() => {
    const { dispatchLoginWithGoogleRequest } = this.props;
    dispatchLoginWithGoogleRequest();
  }

  render() {
    return (
      <View style={styles.login}>
        <Image source={logoImage} style={{ width: 400, height: 400 }}/>
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
