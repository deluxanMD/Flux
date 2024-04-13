import React from 'react';
import {Icon} from '@rneui/themed';
import {useFluxHelperTextStyles} from './flux-helper-text-field.styles';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

interface Props {
  message?: string;
  testID?: string;
}

const FluxHelperTextField = ({
  message,
  testID = 'FluxHelperTextField',
}: Props) => {
  const styles = useFluxHelperTextStyles();

  return (
    <View testID={testID} style={styles.container}>
      <Icon
        name="error-outline"
        type="materialicons"
        color={styles.errorText.color}
        size={14}
        testID="FluxHelperTextField"
      />
      <Text variant="labelSmall" style={styles.errorText}>
        {message}
      </Text>
    </View>
  );
};

export default FluxHelperTextField;
