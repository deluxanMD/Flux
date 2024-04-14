import {View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {makeStyles} from '@rneui/base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    borderColor: '#EA4335',
  },
  titleStyle: {
    color: '#EA4335',
  },
  icon: {
    marginRight: 10,
  },
}));

const GoogleButton = () => {
  const styles = useStyles();

  return (
    <View testID="GoogleButton" style={styles.container}>
      <Button
        type="outline"
        radius={8}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}>
        <MaterialCommunityIcon
          name="google"
          color="#EA4335"
          style={styles.icon}
          size={22}
        />
        Continue with Google
      </Button>
    </View>
  );
};

export default GoogleButton;
