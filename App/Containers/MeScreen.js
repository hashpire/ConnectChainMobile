import React from 'react';
import { View } from 'react-native';
import styles from './Styles/MeScreenStyles';
import { Container, Header, Right, Button, Content , Text , Icon } from 'native-base';
class MeScreen extends React.Component {
  
  render() {
    return (
      <Container>
        <Header>
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