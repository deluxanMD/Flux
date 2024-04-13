import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/auth/loginscreen/loginscreen.component';
import BottomTabNavigation from '../bottom-tab/bottom-tab-navigation';
import Onboarding from '../../screen/onboarding/onboarding.component';
import LetsYouIn from '../../screen/letsyouin/letsyouin.component';
import SignupScreen from '../../screen/auth/signup/signupscreen.component';

const Stack = createStackNavigator();

const screenOptions = {headerShown: false};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={screenOptions}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="letsyouin" component={LetsYouIn} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
