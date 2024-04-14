import {makeStyles} from '@rneui/themed';

export const useDatePickerStyles = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
}));
