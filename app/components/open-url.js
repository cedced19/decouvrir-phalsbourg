import React, { Component } from 'react';

import {
  Linking,
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

export default class OpenURLButton extends Component {
  static propTypes = {
    url: React.PropTypes.string,
    text: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      }
    });
  };

  render() {
    return (
        <Button info onPress={this.handleClick}>
          <Text style={{color: 'white'}}>{this.props.text}</Text>
        </Button>
    );
  }
}
