import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/native'

import SignUp from './SignUp'
import SignIn from './SignIn'
import LoadingModal from '../../shared/components/LoadingModal'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen';


export default function SignUpScreen() {
  const [form, setForm] = useState('SignIn')
  const [isLoading, setIsLoading] = useState(false)

 

  return (
    <DefaultAppScreen>
      <InnerContainerTop>
        <Text>Lets get started</Text>
        <SelectorContainer>
          <SelectorText onPress={()=>setForm('SignUp')}>Sign Up</SelectorText>
          <SelectorText onPress={()=>setForm('SignIn')}>Sign In</SelectorText>
        </SelectorContainer>
      </InnerContainerTop>

      <LoadingModal isLoading={isLoading}/>

      <InnerContainerBottom>
        {/* Render each form depending which is selected */}
        {form == 'SignUp'? <SignUp setForm={setForm} setIsLoading={setIsLoading}/> : <SignIn setIsLoading={setIsLoading} />}
      </InnerContainerBottom>
    </DefaultAppScreen>

  )
}

const Wrapper = styled.View`
  flex: 1;

`;

const InnerContainer = styled.View`
  align-items: center;
`;

const InnerContainerTop = styled(InnerContainer)`
  flex: 2;
  background-color: salmon;
  justify-content: center;

`
const InnerContainerBottom = styled(InnerContainer)`
  flex: 3;

`

const SelectorContainer = styled.View`
  flex: 1;
  flex-direction: row;

`;

const SelectorText = styled.Text`

`;