import React,{useEffect} from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from  'react-redux'
import {setTabBarVisible} from '../../redux/ducks/appState'



export default function AddHabitModal() {
  const showHabitModal = useSelector(state => !state.appState.tabBarVisible)

  return showHabitModal ? returnHabitModal() : null

}

function returnHabitModal(){
  const dispatch = useDispatch()

  function closeHabitHandler(){
    // close the modal;
    dispatch(setTabBarVisible(true))
  }

  function addHabitHandler(){
    // check the form is filled completely
    // close the modal
    dispatch(setTabBarVisible(true))
  }
  return(
    <Outer>
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

