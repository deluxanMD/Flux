import {View} from 'react-native';
import React from 'react';
import {Button, Icon} from '@rneui/themed';
import {useFacebookIconBtnStyles} from './facebook-icon-button.styles';

const FacebookIconButton = () => {
  const styles = useFacebookIconBtnStyles();

  return (
    <View testID="FacebookIconButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        testID="FacebookIconButton.Button">
        <Icon
          name="facebook"
          color="#1877F2"
          style={styles.icon}
          testID="FacebookIconButton.Icon"
        />
      </Button>
    </View>
  );
};

export default FacebookIconButton;
