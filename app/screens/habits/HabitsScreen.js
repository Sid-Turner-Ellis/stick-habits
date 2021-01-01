import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'


export default function HabitsScreen() {
  const user = useSelector(state => {
    return state
  })

  return (
    <DefaultAppScreen>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
      <Text>Haits</Text>
    </DefaultAppScreen>

  )
}