import React from  "react";
import { View, Text } from "react-native";

class HeroineScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'heroine'
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