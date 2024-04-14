import {makeStyles} from '@rneui/themed';

export const useHeaderWithIcon = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
  },
  title: {
    marginLeft: 8,
    fontSize: 18,
  },
}));
