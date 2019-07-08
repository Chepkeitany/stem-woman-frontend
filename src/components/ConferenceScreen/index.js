import React from  "react";
import { View, Text } from "react-native";

import Container from "../Container";
import Toolbar from "../Toolbar";

class ConferenceScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Conferences'
    };
  
    render() {
      const { navigation } = this.props;
      return (
        <Container>
          <Toolbar title="Conferences" navigation={navigation} />
          <View>
            <Text> Conference Screen </Text>
          </View>
        </Container>
      );
    }
  }

  export default ConferenceScreen;