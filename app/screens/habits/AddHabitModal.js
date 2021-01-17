import React,{useEffect} from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from  'react-redux'
import {setTabBarVisible} from '../../redux/ducks/appState'
import useStateObject from '../../shared/functions/useStateObject'
import useInput from '../../shared/functions/useInput'

import ChooseHabitType from './habitOptions/ChooseHabitType'
import ChooseUnits from './habitOptions/ChooseUnits'
import ChooseAmount from './habitOptions/ChooseAmount'
import ChooseChances from './habitOptions/ChooseAmount'
import { addHabit } from '../../redux/ducks/user';







export default function AddHabitModal() {
  const showHabitModal = useSelector(state => !state.appState.tabBarVisible)
  const test = useSelector(state => state.user)
  

  
  return showHabitModal ? <ReturnHabitModal /> : null

}

function ReturnHabitModal(){
  const [habitName] = useInput()
  const habitType = useStateObject('classic')
  const chooseUnits = useStateObject('pages')
  const chooseAmount = useStateObject(0)
  const chooseChances = useStateObject(0)
  const dispatch = useDispatch()

  function closeHabitHandler(){
    // close the modal;
    dispatch(setTabBarVisible(true))
  }

  function addHabitHandler(){
    // check the form is filled completely

    // call the function to create the action object
    dispatch(addHabit({
      name:habitName.value,
      type:habitType.value,
      units:chooseUnits.value,
      target_per_day:chooseAmount.value,
      chances:chooseChances.value,
    }))

    // close the modal
    dispatch(setTabBarVisible(true))

  }
  return(
    <Outer>
      {/* habit name */}
      <View>
        <Text>Habit name</Text>
        <TextInput {...habitName} style={{backgroundColor:'white'}}/>
      </View>

      {/* habit type */}
      <ChooseHabitType state={habitType}/>

      {/* choose the units measured in */}
      <ChooseUnits state={chooseUnits}/>

      {/* choose amount per day  */} 
      <ChooseAmount state={chooseAmount} label="choose the amount per day "/>

      {/* choose the number of chances */}
      <ChooseChances state={chooseChances} label="choose the number of chances"/>







      {/* this bottom tab should be its own component */}
      <BottomTab>
        <TouchableOpacity onPress={closeHabitHandler}>
          <Text>
            close
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addHabitHandler}>
          <Text>
            add habit
          </Text>
        </TouchableOpacity>
      </BottomTab>
    </Outer>
  )
}



const Outer = styled.View`
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({theme})=> theme.colors.backgroundColor};
`;

const BottomTab = styled.View`
  /* padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10; */
  height: 64;
  background-color: ${props => props.theme.navigator.backgroundColor};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

