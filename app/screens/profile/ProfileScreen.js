import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export default function ProfileScreen() {
  const user = useSelector(state => {
    return state
  })

  return (
    <View>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
    </View>

  )
}