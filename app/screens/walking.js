import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Alert,
  View,
  Text
} from 'react-native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

BackgroundGeolocation.configure({
  desiredAccuracy: 0,
  stationaryRadius: 10,
  distanceFilter: 10,
  locationTimeout: 30,
  notificationTitle: 'Découvrir Phalsbourg',
  notificationText: 'Découverte de Phalsbourg en cours...',
  startOnBoot: false,
  stopOnTerminate: false,
  locationProvider: BackgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
  interval: 30000,
  fastestInterval: 10000,
  activitiesInterval: 60000,
  stopOnStillActivity: false,
  notificationIconLarge: 'small',
  notificationIconSmall: 'small'
});

export default class WalkingScreen extends Component {
  static navigationOptions = {
    title: 'À la recherche de lieux',
    color: '#ff0000'
  };
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
  }
  componentWillMount () {
     const { navigate } = this.props.navigation;
     LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: 'Vous devez activer la localisation pour que l\'application fonctionne.',
        ok: 'D\'accord',
        cancel: 'Annuler'
      }).then((success) => {
        BackgroundGeolocation.on('location', (data) => {
          if (this.refs.walking) {
            let location = { x: data.longitude, y: data.latitude };
            this.setState({ location });
          }
        });
        BackgroundGeolocation.start();
      }).catch((error) => {
        navigate('Main');
      });
  }
  render() {
    let text = 'latitude ' + this.state.location.x + ' longitude ' + this.state.location.y;
    return (
      <View style={styles.container} ref="walking">
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
    BackgroundGeolocation.stop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
