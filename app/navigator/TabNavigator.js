import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar'

import DashboardScreen from '../screens/dashboard/DashboardScreen'
import HabitsScreen from '../screens/habits/HabitsScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'




const Tab = createBottomTabNavigator();


export default function TabNavigator(){
  return(
    <Tab.Navigator initialRouteName={"Dashboard"} backBehavior={"initialRoute"} tabBar={(props)=> <TabBar {...props}/>}>
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          initialParams={{
            icon: 'home'
          }}
        />
        <Tab.Screen 
          name="Habits" 
          component={HabitsScreen} 
          initialParams={{
            icon: 'bars'
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          initialParams={{
            icon: 'user'
          }}
        />
      </Tab.Navigator>
  )
}



