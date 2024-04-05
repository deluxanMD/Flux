import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/auth/loginscreen/loginscreen.component';
import BottomTabNavigation from '../bottom-tab/bottom-tab-navigation';

const Stack = createStackNavigator();

const screenOptions = {headerShown: false};

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="App" screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
