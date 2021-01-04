import {Picker} from '@react-native-picker/picker';
import React,{useEffect,useState} from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from  'react-redux'



export default function ChooseUnits({state}) {

  return (
    <View>
      <Text>Select the units this habit is measured in</Text>
      
      <Picker selectedValue={state.value} mode='dialog' onValueChange={(val, ind) => {
        state.set(val)
      }} >
        <Picker.Item label="pages" value="pages"/>
        <Picker.Item label="hours" value="hours"/>
        <Picker.Item label="sessions" value="sessions"/>
      </Picker>
      
    </View>
  )

}





