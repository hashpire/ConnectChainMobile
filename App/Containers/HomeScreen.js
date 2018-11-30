import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/HomeScreenStyles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Home Screen</Text>
      </View>    
    )
  }
}

export default HomeScreen;