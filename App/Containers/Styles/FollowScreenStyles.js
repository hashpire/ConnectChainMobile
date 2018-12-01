import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    backgroundColor: Colors.background
  }
});

export default styles;