import React,{useEffect} from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/native'
import { causeRehydrate } from '../../redux/ducks/user';

import DefaultAppScreen from '../../shared/components/DefaultAppScreen'

export default function DashboardScreen() {
  const dispatch = useDispatch()

  const state = useSelector(state => {
    console.log(state);
  })
  useEffect(()=>{
    // this will cause redux to rehydrate the store after the page changes
    dispatch(causeRehydrate())
  },[])

  return (
    <DefaultAppScreen>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <StyledText>Dashboard</StyledText>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </DefaultAppScreen>

  )
}

const StyledText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;

