import React from "react";
import { View, Text } from "react-native";

import Container from "../Container";
import Toolbar from "../Toolbar";

class MentorScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Mentors'
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Toolbar title="Mentors" navigation={navigation} />
        <View>
          <Text> MentorScreen </Text>
        </View>
      </Container>
    );
  }
}

export default MentorScreen;
