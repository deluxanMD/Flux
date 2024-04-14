import React from 'react';
import {Header, Icon, Text} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useHeaderWithIcon} from './header-only-back.styles';

type Props = {
  title?: string;
};

const HeaderOnlyBack = ({title}: Props) => {
  const styles = useHeaderWithIcon();
  const navigation = useNavigation();

  return (
    <Header
      backgroundColor={'transparent'}
      leftComponent={
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            testID="HeaderOnlyBack.Icon">
            <Icon name="arrow-back" />
          </TouchableOpacity>
          <Text h4 style={styles.title}>
            {title}
          </Text>
        </View>
      }
      testID="HeaderOnlyBack"
    />
  );
};

export default HeaderOnlyBack;
