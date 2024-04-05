import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {lightTheme, darkTheme} from './rn-elements/theme/theme';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {ThemeProvider} from '@rneui/themed';
import StackNavigation from './navigation/stack-nav/stack-navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const mode = useSelector((state: RootState) => state.app.mode);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
