import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

import Routes from './routes'

export default class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    );
  }
}
