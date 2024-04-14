import {makeStyles} from '@rneui/base';

export const useSignupScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginBottom: 20,
  },
  divider: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  socialContainer: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialBtn: {
    width: 100,
  },
  singInLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  singInLinkText: {
    fontSize: 14,
  },
}));
