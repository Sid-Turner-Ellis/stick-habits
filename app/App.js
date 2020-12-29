import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import getStoreFunction from './redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import styled,{ ThemeProvider } from 'styled-components/native'
import theme from './globals/theme'
import Dashboard from './screens/dashboard/DashboardScreen'
import constants from 'expo-constants'
import {getStreak} from './mocks/mockGetStreak'

getStreak()

export default function App() {
  const {store, persistor} = getStoreFunction();
  // use this constant to add padding to the top for android and also a inSafeView for IOS
  const topPadding = constants.statusBarHeight
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppContainer topPadding={topPadding}>
              {/* The navigator containing the screens will go here */}
              <Dashboard/>
            </AppContainer>
          </ThemeProvider>
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = styled.View`
  padding-top: ${({topPadding})=> topPadding};
  background-color: white;
  flex: 1;

`;
