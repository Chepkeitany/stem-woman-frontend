import React from "react";
import { connect } from "react-redux";
import { Image, View } from "react-native";
import { Toolbar } from 'react-native-material-ui';

import styles from './styles';

const MyToolbar = ({ user, navigation, title }) => (
  <View>
    <Toolbar
      leftElement="menu"
      centerElement={title}
      rightElement={(<View style={styles.profilePhoto}>
        <Image
          style={styles.icon}
          source={{ uri: user.user.photo }} />
      </View>)}
      onLeftElementPress={() => navigation.openDrawer()}
    />
  </View>
)


const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(MyToolbar);
