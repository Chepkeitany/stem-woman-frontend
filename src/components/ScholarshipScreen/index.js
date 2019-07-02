import React from  "react";
import { View, Text } from "react-native";

class ScholarshipScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'mentor'
    };
  
    render() {
      return (
        <View>
            <Text> ScholarshipScreen </Text>
        </View>
      );
    }
  }

  export default ScholarshipScreen;