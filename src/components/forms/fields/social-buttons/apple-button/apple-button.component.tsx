import {View} from 'react-native';
import React from 'react';
import {Button, Icon} from '@rneui/themed';
import {makeStyles} from '@rneui/base';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    borderColor: '#000000',
  },
  titleStyle: {
    color: '#000000',
  },
  icon: {
    marginRight: 10,
  },
}));

const AppleButton = () => {
  const styles = useStyles();

  return (
    <View testID="AppleButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        testID="AppleButton.Button">
        <Icon
          name="apple"
          color="#000000"
          style={styles.icon}
          testID="AppleButton.Icon"
        />
        Continue with Apple
      </Button>
    </View>
  );
};

export default AppleButton;
