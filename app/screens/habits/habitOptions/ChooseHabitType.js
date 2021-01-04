import {Picker} from '@react-native-picker/picker';
import React,{useEffect,useState} from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from  'react-redux'



export default function ChooseHabitType({state}) {

  return (
    <View>
      <Text>Select the habit type</Text>
      
      <Picker selectedValue={state.value} mode='dialog' onValueChange={(val, ind) => {
        state.set(val)
      }} >
        <Picker.Item label="classic" value="classic"/>
        <Picker.Item label="two day rule" value="twodayrule"/>
        <Picker.Item label="minimum amount" value="minimumtype"/>
      </Picker>
      
    </View>
  )

}





