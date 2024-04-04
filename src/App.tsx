import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './rn-elements/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>App Component</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
