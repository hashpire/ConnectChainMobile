import React from 'react';
import { Alert } from 'react-native';
import styles from './Styles/HomeScreenStyles';
import I18n from '../I18n';
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

class HomeScreen extends React.Component {  
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>float Test</Label>
            <Input />
          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => Alert.alert("Button Clicked", "Button Clicked")}>
            <Text>HAHA</Text>
          </Button>
          <Text>{I18n.t('title')}</Text>
          <Text>
            {I18n.t('current', { language: I18n.currentLocale() })}
          </Text>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen;