import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Dimensions, Button, Alert, ActivityIndicator, modal} from 'react-native'
import * as Network from 'expo-network';
import Constants from "expo-constants";
import {useDispatch, useSelector} from 'react-redux'
import {causeRehydrate, createUser} from '../../redux/ducks/user'


import styled from 'styled-components/native'
import useInput from '../../shared/functions/useInput'
import isNotEmpty from '../../shared/functions/isNotEmpty'
import alertFunction from '../../shared/functions/alertFunction'
import {validateEmail, validatePassword} from './signUpValidators'
import {createAccountService} from '../../shared/services/createAccountService';

import AsyncStorage from '@react-native-async-storage/async-storage';



import {StyledTextInput,StyledOuterFormContainer, StyledInnerFormContainer } from '../../shared/components/SignFormStyles'
import { set } from 'react-native-reanimated';

export default function signIn({setForm}) {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const name = useInput()
  const email = useInput()
  const password = useInput()
  const repeatPassword = useInput()


  const fakeuser = {
    name: "sifgd",
    email: "sidd@mailcunt.com",
    id: "dfadfgsfslagasfnu"
  }



  async function handleSubmit() {


    if (await (await Network.getNetworkStateAsync()).isConnected) {
        // check its not empty
        if (isNotEmpty(email.value, password.value, repeatPassword.value)) {
          // check if the email is valid
          if(validateEmail(email.value)){
            // check the password fields match
            if (validatePassword(password.value, repeatPassword.value).validated) {
              // make the request
              setLoading(true)
              try {
                const res = await createAccountService({name: name.value,email:email.value,password:password.value})
                setLoading(false)
                if(res.error){
                  alertFunction('There was an issue', res.error.message)
                  // check if the account has already been made and redirect to sign in page
                  if(res.error.status == 201){
                    setForm(prev=>'SignIn')
                  }
                }else{
                  // no error - call a funtion to update the user state object
                  dispatch(createUser({id:res.id,name: res.name, email: res.email}))

                }
              }catch(e){
                alertFunction('Our servers are down', 'Please let our support team know')
              }
            } else {
                // show an alert that the passwords should match
                alertFunction('Password issue', validatePassword(password.value, repeatPassword.value).message)
            }
          }else {
            alertFunction('Email issue', 'Please enter a valid email')
          }
        } else {
            // show an alert that it must not be empty
            alertFunction('Couldnt create account', 'All fields must be filled')
        }
    } else {
      // show alert if not connected to the internet
      alertFunction('Couldnt create account', 'All fields must be filled')
    }
}


  return (
    <StyledView>
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
        {loading ? <ActivityIndicator /> : null}
         

      </StyledOuterFormContainer>
    </StyledView>
  )

}

const StyledView = styled.View`
  color:red;
`;

const StyledButton = styled.Button`

`;