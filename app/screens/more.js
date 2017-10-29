import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions
} from 'react-native';

import { Container, Content, Card, CardItem, Text, Button, Left, Body, H1 } from 'native-base';

import ResponsiveImage from 'react-native-responsive-image';


export default class MoreScreen extends Component {
  static navigationOptions = {
    title: 'En savoir plus',
    color: '#ff0000'
  };
  constructor(props) {
    super(props);
  }
  componentWillMount () {
  }
  render() {

    function makeid() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    const listItems = this.props.navigation.state.params.more.map((item) => {
      if (typeof item.image !== 'undefined') {
        var { width } = Dimensions.get('window');
        var height = (width * item.image.height) / item.image.width;
      }
      return (<Card style={{ flex: 0 }} key={makeid()}>
            {(typeof item.image !== 'undefined') ?  (
            <CardItem>
              <Body>
                <ResponsiveImage style={{ resizeMode: 'cover' }}  source={{uri: item.image.uri, isStatic: true }} initHeight={height} initWidth={width} />
              </Body>
            </CardItem>
            ) : null}
            {(typeof item.text !== 'undefined') ?  (
            <CardItem>
                  <Body>
                        <Text>
                            {item.text}
                        </Text>
                  </Body>
            </CardItem>
            ) : null}
       </Card>)
    });
    return (
      <Container ref="walking">
                <StatusBar backgroundColor={'royalblue'} />
                <Content>
                    <Card style={{ flex: 0 }}>
                          <CardItem>
                            <Body>
                              <H1>{this.props.navigation.state.params.name}</H1>
                            </Body>
                          </CardItem>
                     </Card>
                     {listItems}
                 </Content>
      </Container>
    );
  }
}
