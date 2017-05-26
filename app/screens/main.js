import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';


export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Découvrir Phalsbourg',
    color: '#ff0000'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'royalblue'}
        />
        <Text style={styles.welcome}>
          Bienvenue sur l'application {'\n'} "Découvrir Phalsbourg"
        </Text>
        <Text style={styles.instructions}>
          Phalsbourg est actuellement peuplé d'environ 5000 habitants.
        </Text>
        <Text style={styles.instructions}>
          Découvrez, grâce à l'application, l'histoire de Phalsbourg simplement en vous ballandant dans les rues à la recherche du passé...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
