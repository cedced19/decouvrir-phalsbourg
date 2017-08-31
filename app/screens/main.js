import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  Linking
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
        <Image source={require('../images/blason.png')} style={styles.blason} />
        <Text style={styles.welcome}>
          Bienvenue dans l’application {'\n'} "Découvrir Phalsbourg"
        </Text>
        <Text style={styles.instructions}>
          La ville de Phalsbourg, fondée en 1570 par le comte palatin Georges-Jean de Veldenz, est actuellement peuplé d’environ 5000 habitants. La ville prend le nom de Pfalzburg, « Pfalz » signifiant Palatinat et « Burg » forteresse. Par manque d’argent, la ville est cédée au duc de Lorraine dès 1590. La commune est annexé au Royaume de France en 1661. En 1670, Vauban remanie les fortifications de la ville encore visible aujourd’hui.
        </Text>
        <Text style={styles.instructions}>
          Découvrez, l’histoire de Phalsbourg simplement en vous baladant dans les rues à la recherche du passé...
        </Text>
        <Button
          onPress={() => navigate('Walking')}
          title="Démarrer"
          accessibilityLabel="Commencer à découvrir la ville."
        />
        <Text style={styles.contribute} onPress={() => Linking.openURL(`https://cedced19.github.io/decouvrir-phalsbourg/`)}>
          Contribuer au projet
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
    color: '#333333',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 5,
  },
  blason: {
    width: 100,
    height: 110
  },
  contribute: {
    position: 'absolute',
    bottom: 10,
    textAlign: 'center',
    color: '#3498db'
  }
});
