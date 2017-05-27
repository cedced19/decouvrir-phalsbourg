import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Alert,
  View,
  Text
} from 'react-native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';


export default class WalkingScreen extends Component {
  static navigationOptions = {
    title: 'À la recherche de lieux',
    color: '#ff0000'
  };
  constructor (props) {
     super(props);
     const { navigate } = this.props.navigation;
     LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: 'Vous devez activer la localisation pour que l\'application fonctionne.',
        ok: 'D\'accord',
        cancel: 'Annuler'
      }).then((success) => {
        this.state = {
          watcher: navigator.geolocation.watchPosition((data) => {
            this.setState({
              x: data.coords.longitude,
              y: data.coords.latitude
            });
          }, {
            enableHighAccuracy: true,
            timeout: 1000
          })
        }
      }).catch((error) => {
        navigate('Main');
      });
  }
  render() {
    let text = (this.state !== null) ? 'latitude ' + this.state.x + ' longitude ' + this.state.y : '';

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'royalblue'}
        />
        <Text>
           {text}
        </Text>
      </View>
    );
  }
  componentWillUnmount() {
    if (this.state !== null) {
      navigator.clearWatch(this.state.watcher);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
