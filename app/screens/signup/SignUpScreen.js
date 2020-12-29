import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export default function SignUpScreen() {
  const user = useSelector(state => {
    return state
  })

  return (
    <View>
      <Text>SignUp</Text>
      <Text>SignUp</Text>
      <Text>SignUp</Text>
      <Text>SignUp</Text>
      <Text>SignUp</Text>
      <Text>SignUp</Text>
    </View>

  )
}