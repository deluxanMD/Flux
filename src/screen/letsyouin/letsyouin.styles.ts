import {makeStyles} from '@rneui/base';

export const useLetsYouInStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
  socialContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  divider: {
    width: '100%',
    marginTop: 40,
    flexGrow: 1,
  },
  signInBtnContainer: {
    width: '100%',
    marginBottom: 20,
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
