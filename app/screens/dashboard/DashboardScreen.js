import React,{useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Button, TextInput} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/native'
import { causeRehydrate } from '../../redux/ducks/appState';
import {setTabBarVisible} from '../../redux/ducks/appState'
import wasEntryMadeToday from '../../shared/functions/wasEntryMadeToday'

import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import { createEntry } from '../../redux/ducks/user';

export default function DashboardScreen() {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.user.habits)
  const navVisible = useSelector(state => state.appState.tabBarVisible)
  const [currentHabitID, setCurrentHabitID] = useState(null)
  // habits.forEach(element => {

  //   if(element.entries.length > 1){
  //     console.log(element);

  //   }
  // });


  useEffect(()=>{
    // this will cause redux to rehydrate the store after the page changes
    dispatch(causeRehydrate())
  },[])
  

  function onPressHabit(e, habit){
    // this will hide the nav bar - Its necessary when we add the actual swipe up modal
    dispatch(setTabBarVisible(false))

    // call a component the modal component and pass in the habits
    setCurrentHabitID(habit.habit_id)
    


  }

  return (
    <DefaultAppScreen>
      <Text>Dashboard</Text>

      {
        habits.map((habit, i)=> <HabitCard onPressHabit={onPressHabit} key={i} habit={habit}/>)
      }
      {!navVisible ? <UpdateHabitValueModal currentHabitID={currentHabitID}/> : null}

    </DefaultAppScreen>

  )
}



function HabitCard({habit, onPressHabit}){

  return (
    <TouchableOpacity onPress={(e)=> onPressHabit(e, habit) }>
      <p>{habit.name}</p>
    </TouchableOpacity>
  )
}

function UpdateHabitValueModal({currentHabitID}){
  const habit = useSelector(state => state.user.habits.find(h => currentHabitID == h.habit_id))
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()

  function onPressEvent(){

    // close the modal
    dispatch(setTabBarVisible(false))

    // run the function to update the value 
    
    if(wasEntryMadeToday(habit)){
      // dispatch(createEntry(habit, 10))

    }else {

    }
    console.log(createEntry(habit, amount).payload.updatedHabit)

  }


  return(
    <View>
      <Text style={{color:'red'}}>{'hihihi'}</Text>
      <TextInput  value={amount} keyboardType='number-pad' onChangeText={(text)=>{
        setAmount(+(text))
      }}/>
     <Button
      title="Update amount"
      color="#841584"
      onPress={onPressEvent}
    />


    </View>
  )

}