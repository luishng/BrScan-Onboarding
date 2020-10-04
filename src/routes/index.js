import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import TutorialAttention from '../pages/TutorialAttention'
import ValidateCamera from '../pages/ValidateCamera'
import Tutorial from '../pages/Tutorial'
import ChooseDocument from '../pages/ChooseDocument'
import TypeDocument from '../pages/TypeDocument'
import OptionImage from '../pages/OptionImage'
import Camera from '../pages/Camera'
import LastPage from '../pages/LastPage'

const AppNavigator = createStackNavigator();

const AppNavigatorRoutes = () => (
  <AppNavigator.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff'
      }
    }}
  >
    <AppNavigator.Screen name="Home" component={Home} />
    <AppNavigator.Screen name="SignIn" component={SignIn} />
    <AppNavigator.Screen name="TutorialAttention" component={TutorialAttention} />
    <AppNavigator.Screen name="ValidateCamera" component={ValidateCamera} />
    <AppNavigator.Screen name="Tutorial" component={Tutorial} />
    <AppNavigator.Screen name="ChooseDocument" component={ChooseDocument} />
    <AppNavigator.Screen name="TypeDocument" component={TypeDocument} />
    <AppNavigator.Screen name="OptionImage" component={OptionImage} />
    <AppNavigator.Screen name="Camera" component={Camera} />
    <AppNavigator.Screen name="LastPage" component={LastPage} />
  </AppNavigator.Navigator>
);

export default AppNavigatorRoutes;
