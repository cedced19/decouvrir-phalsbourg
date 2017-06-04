import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import { StatusBar } from 'react-native';
import OpenURLButton  from '../components/open-url.js';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'À propos'
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
                  L’application a été créé par Cédric JUNG pour faire découvrir la ville de Phalsbourg aux visiteurs de manière ludique.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
                <Text>Conception</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  L’application a été créé à l’aide de react-native, un système créé par Facebook pour créer des applications dites "hybride" sur iOS et Android.
                </Text>
                <Text>
                  Vous pouvez voir le fonctionnement de l’application sur GitHub.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <OpenURLButton url={'https://github.com/cedced19/decouvrir-phalsbourg'} text={'Code source'} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
