import React from  "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import Container from '../Container';
import Toolbar from '../Toolbar';

class HeroineScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Heroines'
    };
  
    render() {
      const { navigation } = this.props;

      return (
        <Container>
          <Toolbar title="Heroines" navigation={navigation} />
          <View>
            <Text> Heroines Screen </Text>
          </View>
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  });

  export default connect(mapStateToProps, null)(HeroineScreen);