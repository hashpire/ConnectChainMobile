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
        <Text style={styles.titleText}>Home Screen</Text>
        <View style={styles.section} >
          <Text style={styles.sectionText}>{I18n.t('title')}</Text>
          <Text style={styles.sectionText}>
          {I18n.t('current', { language: I18n.currentLocale() })}
          </Text>
          <Text style={styles.sectionText}>
            This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
          </Text>
          </View>
      </View>    
    )
  }
}

export default HomeScreen;