import React, {useContext} from 'react';
import {View} from 'react-native'
import styled, {ThemeContext} from 'styled-components/native'

export default function DefaultAppScreen(props) {

  return (
    <StyledView>
      {props.children}
    </StyledView>

  )
}

const StyledView = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
  padding-left: 20;
  padding-right: 20;
`;

