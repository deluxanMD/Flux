import {View, Image} from 'react-native';
import React from 'react';
import {makeStyles} from '@rneui/base';
import {Button, Text} from '@rneui/themed';

type Props = {
  navigation?: any;
};

const useStyles = makeStyles(() => ({
  container: {flex: 1},
  image: {
    flex: 1,
    width: 400,
    height: 400,
  },
  innerContainer: {
    padding: 20,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  pagination: {
    flex: 0.1,
  },
  button: {
    justifyContent: 'flex-end',
    width: '100%',
  },
}));

const Onboarding = ({navigation}: Props) => {
  const styles = useStyles();

  return (
    <View testID="Onboarding" style={styles.container}>
      <Image
        source={require('../../assets/images/model1.png')}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Text h2 style={styles.text} testID="Onboarding.Text">
          We provide professional service at friendly price
        </Text>
        <Button
          style={styles.button}
          title="Get Started"
          radius={20}
          testID="Onboarding.Button"
          onPress={() => navigation.navigate('letsyouin')}
        />
      </View>
    </View>
  );
};

export default Onboarding;
