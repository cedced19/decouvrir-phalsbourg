import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';


export default class WalkingScreen extends Component {
  static navigationOptions = {
    title: 'À la recherche de lieux',
    color: '#ff0000'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'royalblue'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
