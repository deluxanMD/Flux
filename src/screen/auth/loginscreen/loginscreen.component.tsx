import {View, Text} from 'react-native';
import React from 'react';
import HeaderOnlyBack from '../../../components/header-only-back/header-only-back.component';

const LoginScreen = () => {
  return (
    <View testID="LoginScreen">
      <HeaderOnlyBack />
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
