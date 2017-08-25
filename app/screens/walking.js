import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions
} from 'react-native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

import { Container, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';

import ResponsiveImage from 'react-native-responsive-image';

const points = require('../points.json');


function distanceBtwPoint(position, reference){
    var R = 6378.137;
    var dLat = reference.y * Math.PI / 180 - position.y * Math.PI / 180;
    var dLon = reference.x * Math.PI / 180 - position.x * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(position.y * Math.PI / 180) * Math.cos(reference.y * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000;
};

function getDistances (position, array) {
  array.forEach(function (item) {
    item.distance = Math.floor(distanceBtwPoint(position, item));
  });
  return array;
};


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
          interval: 5000,
          fastestInterval: 2500,
          activitiesInterval: 5000,
          stopOnStillActivity: false,
          notificationIconLarge: 'icon_location',
          notificationIconSmall: 'icon_location'
        });
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
    let distances = getDistances(this.state.location, points);
    distances.sort(function (a, b) {
      return a.distance - b.distance;
    });



    const listItems = distances.map((item) => {
      if (typeof item.text !== 'undefined' && typeof item.image !== 'undefined') {
        var { width } = Dimensions.get('window');
        var height = (width * item.image.height) / item.image.width;
      }
      return (<Card style={{ flex: 0 }} key={item.name}>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{item.name}</Text>
                        {(!isNaN(item.distance)) ?  (
                          <Text note>À {item.distance}m</Text>
                        ) : (
                          <Text note>Distance inconnue</Text>
                        )}
                    </Body>
                </Left>
            </CardItem>
            {(typeof item.text !== 'undefined' || typeof item.image !== 'undefined') ?  (
              <CardItem>
                  <Body>
                      {(typeof item.image !== 'undefined') ?  (
                        <ResponsiveImage style={{ resizeMode: 'cover' }}  source={{uri: item.image.uri, isStatic: true }} initHeight={height} initWidth={width} />
                      ) : null}
                      {(typeof item.text !== 'undefined') ?  (
                        <Text>
                            {item.text}
                        </Text>
                      ) : null}
                  </Body>
              </CardItem>
            ) : null}
       </Card>)
    });
    return (
      <Container ref="walking">
                <StatusBar backgroundColor={'royalblue'} />
                <Content>
                     {listItems}
                 </Content>
      </Container>
    );
  }
  componentWillUnmount() {
    BackgroundGeolocation.stop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
