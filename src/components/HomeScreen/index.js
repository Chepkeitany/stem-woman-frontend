import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import Container from '../Container';
import Toolbar from '../Toolbar';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Toolbar title="Home" navigation={navigation} />
        <View>
          <Text> Home Screen </Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomeScreen);
