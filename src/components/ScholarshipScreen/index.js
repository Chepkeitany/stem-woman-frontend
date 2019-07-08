import React from  "react";
import { View, Text } from "react-native";

import Container from "../Container";
import Toolbar from "../Toolbar";

class ScholarshipScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Scholarships'
    };
  
    render() {
      const { navigation } = this.props;
      return (
        <Container>
          <Toolbar title="Scholarships" navigation={navigation} />
          <View>
            <Text> Scholarship Screen </Text>
          </View>
        </Container>
      );
    }
  }

  export default ScholarshipScreen;