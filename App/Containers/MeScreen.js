import React from 'react';
import { View } from 'react-native';
import styles from './Styles/MeScreenStyles';
import { Container, Header, Right, Button, Content , Text , Icon, StyleProvider } from 'native-base';
// import getTheme from '../../native-base-theme/components';
// import platform from '../../native-base-theme/variables/platform';
class MeScreen extends React.Component {
  
  render() {
    return (
      <Container>
        <Header transparent>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="ios-settings" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>Me Screen</Text>
        </Content>
      </Container>  
    )
  }
}

export default MeScreen;