import React,{useEffect} from 'react';
import {View, Text, ActivityIndicator, Dimensions} from 'react-native'
import styled from 'styled-components/native'



export default function LoadingModal({isLoading}) {


  return isLoading ? returnLoader() : null
}

function returnLoader(){
  return(
    <Outer>
      <Spinner size="large"/>
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
  background-color: rgba(0,0,0,0.1);
  flex: 1;
  align-items: center;
  justify-content:center;
`;

const Spinner = styled.ActivityIndicator`

`;
