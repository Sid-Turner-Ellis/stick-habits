import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import getStoreFunction from './redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import styled,{ ThemeProvider } from 'styled-components/native'
import theme from './globals/theme'
import Navigator from './navigator/Navigator'
import SignUp from './screens/signup/SignUpScreen'
import constants from 'expo-constants'
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const {store, persistor} = getStoreFunction();
  const loggedIn = store.getState().user.createdAccount ? true : false

  useEffect(()=>{
    // this will display the splash screen
    SplashScreen.preventAutoHideAsync()

    // this will hide it again
    setTimeout(()=>{
      SplashScreen.hideAsync()
    },2000)

  },[])

  // use this constant to add padding to the top for android and also a inSafeView for IOS
  const topPadding = constants.statusBarHeight
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppContainer topPadding={topPadding}>
              {/* The navigator containing the screens will go here */}
              {!loggedIn ? <Navigator /> : <SignUp />}
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
