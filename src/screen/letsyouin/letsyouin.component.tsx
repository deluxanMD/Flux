import {Image, View} from 'react-native';
import React from 'react';
import {Button, Divider, Text, withTheme} from '@rneui/themed';
import FacebookButton from '../../components/forms/fields/facebook-button/facebook-button.component';
import GoogleButton from '../../components/forms/fields/google-button/google-button.component';
import AppleButton from '../../components/forms/fields/apple-button/apple-button.component';
import HeaderOnlyBack from '../../components/header-only-back/header-only-back.component';
import {useLetsYouInStyles} from './letsyouin.styles';

const LetsYouIn = withTheme(({theme}) => {
  const styles = useLetsYouInStyles();

  return (
    <View testID="LetsYouIn" style={styles.container}>
      <HeaderOnlyBack />
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
      <View style={styles.divider}>
        <Divider color={theme?.colors.primary} />
      </View>
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
