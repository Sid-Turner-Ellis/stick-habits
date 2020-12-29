import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/native'

export default function DashboardScreen() {
  const user = useSelector(state => {
    return state
  })

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <StyledText>Dashboard</StyledText>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </View>

  )
}

const StyledText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;

