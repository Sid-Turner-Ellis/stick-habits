import React, {useState, useContext} from 'react'
import styled, {ThemeContext} from 'styled-components/native'
import {View, Text, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import theme from '../globals/theme';
import {useDispatch, useSelector, useRef} from  'react-redux'




export default function TabBar({state, navigation}){
  const [selected, setSelected] = useState('Dashboard')
  const theme = useContext(ThemeContext)
  const tabBarVisible = useSelector(state => state.appState.tabBarVisible)


  function renderColor(routeName){return  isSelected(routeName) ? theme.colors.primary : theme.navigator.unselectedIconColor }

  function handlePress(routeName){ 
    if(!isSelected(routeName)){
      navigation.navigate(routeName)
      setSelected(routeName) 
    }
  }

  function isSelected(routeName){
    if(routeName === selected ) return true
    else return false
  }

  const {routes} = state;

  return (
    <StyledView tabBarVisible={tabBarVisible} onLayout={(event)=>{
      const {x, y, width, height} = event.nativeEvent.layout
      // might want to put this in global state and then render the size of the other one based on it
    }}>
      {
          routes.map(route => {
            return (
              <TabItem
              tab={route}
              handlePress={handlePress}
              color={renderColor(route.name)}
              key={route.key}
              isSelected={isSelected}
              />
            )
          })
        }
    </StyledView>
    )
}

const StyledView = styled.View`
  display:${({tabBarVisible}) => tabBarVisible ? '' : 'none'};
  
  flex-direction: row;
  align-items: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  background-color: ${props => props.theme.navigator.backgroundColor};

`;





// tab items component
function TabItem({tab,color, handlePress, isSelected}){
  return(

    <StyledTouchableOpacity activeOpacity={0.5} onPress={()=> {
      handlePress(tab.name)
    }}>
      <AntDesign name={tab.params.icon} size={24} color={color} />

      {isSelected(tab.name) ? theText() : null}
      
    </StyledTouchableOpacity>
  )

  function theText(){
    let name = tab.name
    if(tab.name == 'Dashboard'){
      name = 'home'
    }
    return (
      <StyledText color={color}>
        {name.toLowerCase()}
      </StyledText>
    )
  }
}


const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  flex:1;
`;


const StyledText = styled.Text`
  color: ${props => props.color};
`;