import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import MainScreen from './app/screens/main.js';
import WalkingScreen from './app/screens/walking.js';
import MoreScreen from './app/screens/more.js';
import AboutScreen from './app/screens/about.js';
import SourcesScreen from './app/screens/sources.js';

const HomeStack = StackNavigator({
  Main: {screen: MainScreen},
  Walking: {screen: WalkingScreen},
  More: {screen: MoreScreen}
}, {
  navigationOptions: {
   drawerLabel: 'Accueil',
   headerStyle:  {
     backgroundColor: 'dodgerblue'
   },
   headerTintColor: 'white'
  }
});

const MoreDetailsTabs = TabNavigator(
  {
    About: {
      screen: AboutScreen
    },
    Sources: {
      screen: SourcesScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff'
    },
    navigationOptions: {
     drawerLabel: 'Plus de détails'
    }
  }
);


export default DecouvrirPhalsbourg = DrawerNavigator({
  Home: {
    screen: HomeStack
  },
  MoreDetails: {
    screen: MoreDetailsTabs
  }
});

AppRegistry.registerComponent('DecouvrirPhalsbourg', () => DecouvrirPhalsbourg);
