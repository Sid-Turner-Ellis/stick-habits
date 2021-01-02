import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux'

import styled from 'styled-components/native'
import Navigator from './navigator/Navigator'
import AccountScreen from './screens/signup/AccountScreen'
import constants from 'expo-constants'





export default function AppGateway(){
  let loggedIn = useSelector(state => {
    return state.user.account["created_account"] ? true : false

  })



  return(
    <AppContainer topPadding={constants.statusBarHeight}>
      {loggedIn ? <Navigator /> : <AccountScreen />}
    </AppContainer>
  )
}


const AppContainer = styled.View`
  padding-top: ${({topPadding})=> topPadding};
  background-color: white;
  flex: 1;
`;