import React from "react";
import { Image, DrawerLayoutAndroid, Text, View } from "react-native";
import { Toolbar } from 'react-native-material-ui';
import { connect } from "react-redux";
import Container from '../Container';

import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import styles from "./styles"

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    const { user } = this.props;
    var navigationView = <View style={{ backgroundColor: colors.white }} />;
    return (
      <Container>
        <DrawerLayoutAndroid
          drawerWidth={sizes.drawerWidth}
          drawerBackgroundColor={colors.drawerColor}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
          <Toolbar
            leftElement="menu"
            centerElement="Stem Woman"
            rightElement={(<View style={styles.profilePhoto}>
              <Image
                style={styles.icon}
                source={{ uri: user.user.photo }} />
            </View>)}
          />
        </DrawerLayoutAndroid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomeScreen);
