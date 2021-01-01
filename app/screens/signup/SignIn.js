import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Dimensions, Button} from 'react-native'
import styled from 'styled-components/native'
import useInput from '../../shared/functions/useInput'
import {StyledTextInput,StyledOuterFormContainer, StyledInnerFormContainer } from '../../shared/components/SignFormStyles'

export default function signIn() {
  const email = useInput()
  const password = useInput()
  const repeatPassword = useInput()


  return (
    <StyledView>

     <Text> rahhhh ok sign in den innit</Text>

    </StyledView>
  )

}

const StyledView = styled.View`
  color:red;
`;

