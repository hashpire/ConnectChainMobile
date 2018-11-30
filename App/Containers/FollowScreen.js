import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/FollowScreenStyles';

class FollowScreen extends React.Component {
  static navigationOptions = {
    title: 'Follow',
  };
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Follow Screen</Text>
      </View>    
    )
  }
}

export default FollowScreen;