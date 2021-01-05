import React,{useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import styled from 'styled-components/native'
import { deleteHabit } from '../../redux/ducks/user';


export default function HabitOverview() {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.user.habits)

  // useEffect(()=> {
  //   dispatch({type: 'deleteHabit'})
  // },[])





  return (
    <View>
      {habits.map((v, i) => <HabitOverviewCard habit={v} key={i}/>)}
    </View>
  )
}


function HabitOverviewCard({habit}){
  const dispatch = useDispatch()

  function handleOnPressDelete(habit){
    dispatch(deleteHabit(habit))
  }

  return (
    <StyledView>
      <Text> {habit.name} </Text>
      <Text onPress={()=>{handleOnPressDelete(habit)}}>Delete</Text>
    </StyledView>

  )

}

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;