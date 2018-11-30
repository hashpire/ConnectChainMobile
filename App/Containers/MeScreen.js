import React from 'react';
import { View, Text , Button } from 'react-native';
import styles from './Styles/MeScreenStyles';

class MeScreen extends React.Component {
  static navigationOptions = {
    title: 'Me',
  };
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Me Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>    
    )
  }
}

export default MeScreen;