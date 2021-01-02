import React from 'react'
import {View, Text, TextInput, Dimensions, Button} from 'react-native'
import styled from 'styled-components/native'





export const StyledOuterFormContainer = styled.View`

`;


export const StyledInnerFormContainer = styled.View`

`;




export const StyledTextInput = styled.TextInput`
  border-bottom-width: 1;
  border-bottom-color: ${props => props.theme.colors.darkGrey};
  width: ${Math.floor((Dimensions.get('window').width / 100) * 80)};
  align-self:center;



`;



