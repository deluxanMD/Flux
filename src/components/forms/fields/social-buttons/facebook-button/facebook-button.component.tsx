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
    borderColor: '#1877F2',
  },
  titleStyle: {
    color: '#1877F2',
  },
  icon: {
    marginRight: 10,
  },
}));

const FacebookButton = () => {
  const styles = useStyles();

  return (
    <View testID="FacebookButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        testID="FacebookButton.Button">
        <Icon
          name="facebook"
          color="#1877F2"
          style={styles.icon}
          testID="FacebookButton.Icon"
        />
        Continue with Facebook
      </Button>
    </View>
  );
};

export default FacebookButton;
