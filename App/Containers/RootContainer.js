import React from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './Styles/RootContainerStyles';
class RootContainer extends React.Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='default' />
        <AppNavigation />
      </View>
    )
  }
}

export default RootContainer;