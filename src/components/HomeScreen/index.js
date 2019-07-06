import React from "react";
import { DrawerLayoutAndroid, View } from "react-native";
import { Avatar, Toolbar } from 'react-native-material-ui';
import Container from '../Container';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    var navigationView = <View style={{ flex: 1, backgroundColor: "#fff" }} />;
    return (
      <Container>
        <DrawerLayoutAndroid
          drawerWidth={100}
          drawerBackgroundColor="#7778ab"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
        <Toolbar
          leftElement="menu"
          centerElement="Stem Woman"
          rightElement={(<Avatar icon="person" />)}
        />
        </DrawerLayoutAndroid>
      </Container>
    );
  }
}

export default HomeScreen;
