import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export default function HabitsScreen() {
  const user = useSelector(state => {
    console.log(state);
    return state
  })

  return (
    <View>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
    </View>

  )
}