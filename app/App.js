import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import getStoreFunction from './redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from 'styled-components'
import theme from './globals/theme'
import Dashboard from './screens/dashboard/Dashboard'


export default function App() {
  const {store, persistor} = getStoreFunction();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            {/* The navigator containing the screens will go here */}
            <Dashboard/>
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
