import React from  "react";
import { View, Text } from "react-native";

class ConferenceScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Conferences'
    };
  
    render() {
      return (
        <View>
            <Text> ConferenceScreen </Text>
        </View>
      );
    }
  }

  export default ConferenceScreen;