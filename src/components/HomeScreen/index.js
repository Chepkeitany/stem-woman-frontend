import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { Toolbar } from 'react-native-material-ui';
import { connect } from "react-redux";
import Container from '../Container';

import styles from "./styles"

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    const { user, navigation } = this.props;
    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Stem Woman"
          rightElement={(<View style={styles.profilePhoto}>
            <Image
              style={styles.icon}
              source={{ uri: user.user.photo }} />
          </View>)}
          onLeftElementPress={() => navigation.openDrawer()}
        />
        <View>
          <Text> Home Screen </Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomeScreen);
