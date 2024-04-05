import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {lightTheme, darkTheme} from './rn-elements/theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from './redux/app/app.slice';
import {RootState} from './redux/store';
import {Button, ThemeProvider} from '@rneui/themed';

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.app.mode);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>App Component {mode}</Text>
            <Button title={'lkjljj'} onPress={() => dispatch(toggle())} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
