import {Image, View} from 'react-native';
import React from 'react';
import {makeStyles} from '@rneui/base';
import {Button, Divider, Text, withTheme} from '@rneui/themed';
import FacebookButton from '../../components/forms/fields/facebook-button/facebook-button.component';
import GoogleButton from '../../components/forms/fields/google-button/google-button.component';
import AppleButton from '../../components/forms/fields/apple-button/apple-button.component';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    marginTop: 10,
  },
  socialContainer: {
    marginTop: 10,
    width: '100%',
  },
  divider: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  signInBtnContainer: {
    paddingTop: 20,
    width: '100%',
    alignSelf: 'flex-end',
  },
  signupLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupLinkText: {
    fontSize: 14,
  },
}));

const LetsYouIn = withTheme(({theme}) => {
  const styles = useStyles();

  return (
    <View testID="LetsYouIn" style={styles.container}>
      <Image
        source={require('../../assets/images/cartoon1.png')}
        style={styles.image}
      />
      <Text h1 style={styles.title} testID="LetsYouIn.Title">
        Let's You In
      </Text>
      <View style={styles.socialContainer}>
        <FacebookButton />
        <GoogleButton />
        <AppleButton />
      </View>
      <Divider color={theme?.colors.primary} style={styles.divider} />
      <View style={styles.signInBtnContainer}>
        <Button radius={8} testID="LetsYouIn.Signin.Button">
          Sign in with password
        </Button>
        <View style={styles.signupLink}>
          <Text testID="LetsYouIn.Signup.Text">Don't have an account?</Text>
          <Button
            testID="LetsYouIn.Signup.Link"
            type="clear"
            titleStyle={styles.signupLinkText}>
            Sign up
          </Button>
        </View>
      </View>
    </View>
  );
});

export default LetsYouIn;
