import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'


export default function ProfileScreen() {
  const user = useSelector(state => {
    return state
  })

  return (
    <DefaultAppScreen>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
    </DefaultAppScreen>

  )
}