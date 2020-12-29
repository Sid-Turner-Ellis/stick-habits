import React from 'react';
import {View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export default function Dashboard() {
  const user = useSelector(state => {
    console.log(state);
    return state
  })
  
  return (
    <View>
      <Text>Dashboard</Text>
    </View>

  )
}
