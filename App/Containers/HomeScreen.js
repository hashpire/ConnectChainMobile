import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/HomeScreenStyles';
import I18n from '../I18n';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Home Screen</Text>
        <Text>{I18n.t('title')}</Text>
        <Text>
          {I18n.t('current', { language: I18n.currentLocale() })}
        </Text>
      </View>    
    )
  }
}

export default HomeScreen;