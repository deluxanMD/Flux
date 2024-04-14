import {Theme} from '@rneui/base';
import {makeStyles} from '@rneui/themed';

export const useFluxHelperTextStyles = makeStyles((theme: Theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: theme.colors.error,
    paddingLeft: 4,
  },
}));
