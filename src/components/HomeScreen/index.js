import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import Container from '../Container';
import Toolbar from '../Toolbar';

import logoImage from "../../assets/logo-cropped.png"

import commonStyles from "../../constants/styles";
import styles from "./styles";

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
          <Image source={logoImage} style={{width: 350, height: 200 }} />
          <View style={styles.about}>
          <Text style={styles.headingText}> Science Technology Engineering & Mathematics </Text>
          <Text style={styles.navItems}> See what other women have done <Text style={commonStyles.bold}> Heroines </Text></Text>
          <Text style={styles.navItems}> Not sure about STEM? Talk to someone: <Text style={commonStyles.bold}> Mentors </Text></Text>
          <Text style={styles.navItems}> Lots of opportunities for you: <Text style={commonStyles.bold}> Scholarships & Conferences </Text></Text>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomeScreen);
