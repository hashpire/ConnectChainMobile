import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/SettingsScreenStyles';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Settings Screen</Text>
      </View>    
    )
  }
}

export default SettingsScreen;