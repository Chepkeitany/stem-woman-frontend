import React from  "react";
import { View, Text } from "react-native";

class HeroineScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Heroines'
    };
  
    render() {
      return (
        <View>
            <Text> HeroineScreen </Text>
        </View>
      );
    }
  }

  export default HeroineScreen;