import {View} from 'react-native';
import React from 'react';
import {Button, Icon} from '@rneui/themed';
import {useAppleIconBtnStyles} from './apple-icon-button.styles';

const AppleIconButton = () => {
  const styles = useAppleIconBtnStyles();

  return (
    <View testID="AppleIconButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        testID="AppleIconButton.Button">
        <Icon
          name="apple"
          color="#000000"
          style={styles.icon}
          testID="AppleIconButton.Icon"
        />
      </Button>
    </View>
  );
};

export default AppleIconButton;
