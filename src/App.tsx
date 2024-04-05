import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {lightTheme, darkTheme} from './rn-elements/theme/theme';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {ThemeProvider} from '@rneui/themed';

const App = () => {
  const mode = useSelector((state: RootState) => state.app.mode);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View testID="App.Container">
            <Text>App Component</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
