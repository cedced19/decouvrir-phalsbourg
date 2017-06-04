import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text, Body, H2, ListItem } from 'native-base';
import OpenURLButton  from '../components/open-url.js';

const sources = require('../sources.json');


function extractRootDomain(url) {
    var hostname;

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    var splitArr = hostname.split('.'),
        arrLen = splitArr.length;

    if (arrLen > 2) {
        hostname = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return hostname;
}

export default class SourcesScreen extends Component {
  static navigationOptions = {
    title: 'Sources'
  };
  render() {
    const { navigate } = this.props.navigation;
    const listCategory = function (category) {
      return sources[category].map((item) => {
        return (
              <ListItem key={item.url}>
                      <Body>
                        <Text>
                          {item.name}
                        </Text>
                      </Body>
                      <OpenURLButton url={item.url} text={extractRootDomain(item.url)} />
              </ListItem>)
      });
    }
    return (
      <Container>
        <StatusBar
          backgroundColor={'royalblue'}
        />
        <Content>
          <H2 style={{ margin: 10 }}>Descriptions</H2>
          {listCategory('descriptions')}
          <H2 style={{ margin: 10 }}>Illustrations</H2>
          {listCategory('images')}
        </Content>
      </Container>
    );
  }
}
