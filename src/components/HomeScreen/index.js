import React from  "react";
import { DrawerLayoutAndroid, View, Text } from "react-native";

class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };
  
    render() {
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        </View>
      );
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerBackgroundColor="#7778ab"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
        </DrawerLayoutAndroid>
      );
    }
  }

  export default HomeScreen;