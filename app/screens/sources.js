import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';


export default class SourcesScreen extends Component {
  static navigationOptions = {
    title: 'Sources'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar
          backgroundColor={'royalblue'}
        />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Les descriptions des lieux ont été réalisé à partir des documents suivants.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
