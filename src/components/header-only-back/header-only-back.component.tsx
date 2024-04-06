import React from 'react';
import {Header, Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import {makeStyles} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'transparent',
  },
}));

const HeaderOnlyBack = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <Header
      backgroundColor={styles.container.backgroundColor}
      leftComponent={
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          testID="HeaderOnlyBack.Icon">
          <Icon name="arrow-back" />
        </TouchableOpacity>
      }
      testID="HeaderOnlyBack"
    />
  );
};

export default HeaderOnlyBack;
