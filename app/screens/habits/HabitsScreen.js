import React,{useState} from 'react';
import {View, Text, Button} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import AddHabitModal from './AddHabitModal'
import {setTabBarVisible} from '../../redux/ducks/appState'
import {causeRehydrate} from '../../redux/ducks/appState'


export default function HabitsScreen() {
  const dispatch = useDispatch()
  const tabBarVisible = useSelector(state => state.appState.tabBarVisible)
  // dispatch(setTabBarVisible(false));



  return (
    <DefaultAppScreen>
      <AddHabitModal/>
      <Text>Habits</Text>
      <Button title="Add habit" onPress={()=>{
        // open the habit modal
        dispatch(setTabBarVisible(false));
        
      }}/>
    </DefaultAppScreen>

  )
}