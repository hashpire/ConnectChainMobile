import React from 'react';
import styles from './Styles/FollowScreenStyles';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class FollowScreen extends React.Component {
  static navigationOptions = {
    title: 'Follow',
  };
  
  render() {
    return (
      <Container>
        <Header transparent>
          <Left />
          <Body>
            <Title>Follow</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.content}>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>  
    )
  }
}

export default FollowScreen;