/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/screens/main.js';

const DecouvrirPhalsbourg = StackNavigator({
  Main: {screen: MainScreen}
}, {
  navigationOptions: {
   headerStyle:  {
     backgroundColor: 'dodgerblue'
   },
   headerTintColor: 'white'
  }
});

AppRegistry.registerComponent('DecouvrirPhalsbourg', () => DecouvrirPhalsbourg);
