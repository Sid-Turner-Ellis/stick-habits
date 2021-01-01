import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import getStoreFunction from './redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import {useSelector} from 'react-redux'

import styled,{ ThemeProvider } from 'styled-components/native'
import theme from './globals/theme'
import * as SplashScreen from 'expo-splash-screen';
import AppGateway from './AppGateway'




export default function App() {
  const {store, persistor} = getStoreFunction();
  useEffect(()=>{
    // this will display the splash screen
    SplashScreen.preventAutoHideAsync()

    // this will hide it again
    setTimeout(()=>{
      SplashScreen.hideAsync()
    },2000)

  },[])

  // use this constant to add padding to the top for android and also a inSafeView for IOS
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppGateway />
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


