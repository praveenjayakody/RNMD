import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './src/MainScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
		<StatusBar barStyle={Platform.OS === 'ios' ? "dark-content": "light-content"} />
		<MainScreen />
    </PaperProvider>
  );
}