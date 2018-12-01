import React from 'react';
import { View } from 'react-native';
import styles from './Styles/SettingsScreenStyles';
import { Container, Header, Left, Title, Body, Right, Content, Text , Button , Icon } from 'native-base';
class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>EditScreenOne</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Test</Text>
        </Content>
      </Container>
    )
  }
}

export default SettingsScreen;