import {View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useGoogleIconBtnStyles} from './google-icon-button.styles';

const GoogleIconButton = () => {
  const styles = useGoogleIconBtnStyles();

  return (
    <View testID="GoogleIconButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        testID="GoogleIconButton.Button">
        <MaterialCommunityIcon
          name="google"
          size={24}
          color="#EA4335"
          style={styles.icon}
          testID="GoogleIconButton.Icon"
        />
      </Button>
    </View>
  );
};

export default GoogleIconButton;
