import React,{useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import styled from 'styled-components/native'


export default function HabitOverview() {
  const dispatch = useDispatch()
  const tabBarVisible = useSelector(state => state.appState.tabBarVisible)





  return (
    <View>

    </View>
  )
}