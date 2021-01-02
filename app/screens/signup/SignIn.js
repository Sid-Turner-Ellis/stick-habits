import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import * as Network from 'expo-network';
import Constants from "expo-constants";
import {useDispatch, useSelector} from 'react-redux'

import styled from 'styled-components/native'
import useInput from '../../shared/functions/useInput'
import isNotEmpty from '../../shared/functions/isNotEmpty'
import alertFunction from '../../shared/functions/alertFunction'
import {signInService} from '../../shared/services/signInService'


import {StyledTextInput,StyledOuterFormContainer, StyledInnerFormContainer } from '../../shared/components/SignFormStyles'
import { signUserIn } from '../../redux/ducks/user';

export default function signIn({setIsLoading}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()


    
  async function handleSubmit() {



    if (await (await Network.getNetworkStateAsync()).isConnected) {
        // check its not empty
        if (isNotEmpty(email.value, password.value)) {
          // make the request
          setIsLoading(true)

          try {
            const res = await signInService(email.value, password.value)
            setIsLoading(false)

      
            if(res.error){
              alertFunction('Couldnt sign in', res.error.message)
            }else {
              // there was no error, Load the state
              dispatch(signUserIn(res))
            }
      
          }catch(e){
            alertFunction('Our servers are down', 'Please let our support team know')
          }


        } else {
            // show an alert that it must not be empty
            alertFunction('Couldnt sign in', 'All fields must be filled')
        }
    } else {
      // show alert if not connected to the internet
      alertFunction('No connection', 'A connection is required to sign in')
    }
  }

   


  return (
    <View>

      <StyledOuterFormContainer>

        <StyledInnerFormContainer>
          <Text>Email address</Text>
          <StyledTextInput label='Email' {...email}/>
        </StyledInnerFormContainer>

        <StyledInnerFormContainer>
          <Text>Password</Text>
          <StyledTextInput label="Password" {...password} secureTextEntry={true}/>
        </StyledInnerFormContainer>

        <StyledButton color={'red'} title="Sign in" onPress={()=>{
          handleSubmit()
        }}/>

      </StyledOuterFormContainer>
    </View>
  )

}



const StyledButton = styled.Button`

`;