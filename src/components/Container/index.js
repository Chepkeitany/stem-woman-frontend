// @flow

import { View } from 'react-native';
import React from 'react';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default Container;
