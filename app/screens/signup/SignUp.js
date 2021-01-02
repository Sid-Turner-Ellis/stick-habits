import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Dimensions, Button, Alert, ActivityIndicator} from 'react-native'
import * as Network from 'expo-network';
import Constants from "expo-constants";
import {useDispatch, useSelector} from 'react-redux'
import {causeRehydrate, createUser} from '../../redux/ducks/user'

import styled from 'styled-components/native'
import useInput from '../../shared/functions/useInput'
import isNotEmpty from '../../shared/functions/isNotEmpty'
import alertFunction from '../../shared/functions/alertFunction'
import {validateEmail, validatePassword} from './signUpValidators'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import {createAccountService} from '../../shared/services/createAccountService';
import AsyncStorage from '@react-native-async-storage/async-storage';



import {StyledTextInput,StyledOuterFormContainer, StyledInnerFormContainer } from '../../shared/components/SignFormStyles'
import { set } from 'react-native-reanimated';

export default function signIn({setForm, setIsLoading}) {
  const dispatch = useDispatch()
  const [name, setName] = useInput()
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()
  const [repeatPassword, setRepeatPassword] = useInput()


  async function handleSubmit() {
    if (await (await Network.getNetworkStateAsync()).isConnected) {
        // check its not empty
        if (isNotEmpty(email.value, password.value, repeatPassword.value)) {
          // check if the email is valid
          if(validateEmail(email.value)){
            // check the password fields match
            if (validatePassword(password.value, repeatPassword.value).validated) {
              // make the request
              setIsLoading(true)
              try {
                const res = await createAccountService({name: name.value,email:email.value,password:password.value})
                setIsLoading(false)
                if(res.error){
                  alertFunction('There was an issue', res.error.message)
                  // check if the account has already been made and redirect to sign in page
                  if(res.error.status == 201){
                    setForm(prev=>'SignIn')
                  }
                }else{
                  // no error - call a funtion to update the user state object
                  dispatch(createUser({id:res.id,name: name.value, email: res.email}))

                }
              }catch(e){
                setIsLoading(false);

                alertFunction('Our servers are down', 'Please let our support team know')
              }
            } else {
                // show an alert that the passwords should match
                setPassword('')
                setRepeatPassword('')
                alertFunction('Password issue', validatePassword(password.value, repeatPassword.value).message)


            }
          }else {
            setEmail('')
            alertFunction('Email issue', 'Please enter a valid email')
          }
        } else {
            // show an alert that it must not be empty
            alertFunction('Couldnt create account', 'All fields must be filled')
        }
    } else {
      // show alert if not connected to the internet
      alertFunction('No network', 'Please connect to the internet and then create an account')
    }
}


  return (
    <View>

      <StyledOuterFormContainer>

        <StyledInnerFormContainer>
          <Text>Enter your name</Text>
          <StyledTextInput label='Name' {...name}/>
        </StyledInnerFormContainer>

        <StyledInnerFormContainer>
          <Text>Enter your email address</Text>
          <StyledTextInput label='Email' {...email}/>
        </StyledInnerFormContainer>

        <StyledInnerFormContainer>
          <Text>Enter your password</Text>
          <StyledTextInput label="Password" {...password} secureTextEntry={true}/>
        </StyledInnerFormContainer>

        <StyledInnerFormContainer>
          <Text>Enter your password again</Text>
          <StyledTextInput label="Repeat password" {...repeatPassword} secureTextEntry={true}/>
        </StyledInnerFormContainer>

        <StyledButton color={'red'} title="Sign up" onPress={()=>{
          handleSubmit()
        }}/>

      </StyledOuterFormContainer>
    </View>
  )

}



const StyledButton = styled.Button`

`;