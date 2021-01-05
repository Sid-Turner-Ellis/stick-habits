import {Picker} from '@react-native-picker/picker';
import React,{useEffect,useState} from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from  'react-redux'


//https://stackoverflow.com/questions/48798415/react-native-how-to-key-number-pad-only-without-punctuations


export default function ChooseAmount({state, label}) {

  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={{backgroundColor:'white'}} value={state.value} keyboardType='number-pad' onChangeText={(text)=>{
        state.set(+(text))
      }}/>
    </View>
  )

}





