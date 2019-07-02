import React from  "react";
import { View, Text } from "react-native";

class MentorScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Mentors'
    };
  
    render() {
      return (
        <View>
            <Text> MentorScreen </Text>
        </View>
      );
    }
  }

  export default MentorScreen;