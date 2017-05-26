import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/screens/main.js';
import WalkingScreen from './app/screens/walking.js';

export default DecouvrirPhalsbourg = StackNavigator({
  Main: {screen: MainScreen},
  Walking: {screen: WalkingScreen}
}, {
  navigationOptions: {
   headerStyle:  {
     backgroundColor: 'dodgerblue'
   },
   headerTintColor: 'white'
  }
});

AppRegistry.registerComponent('DecouvrirPhalsbourg', () => DecouvrirPhalsbourg);
