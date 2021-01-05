import React from 'react';
import {View, Text, Button} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DefaultAppScreen from '../../shared/components/DefaultAppScreen'
import {syncStateService} from '../../shared/services/SyncStateService'

export default function ProfileScreen() {
  const user = useSelector(state => {
    return state.user
  })

  async function handleOnPress(){
    const id = user.account.id
    const res = await syncStateService(id, user)
    console.log(res);
    if(res.error){
      console.log(res);
      console.log('failed to sync');
    }else {
      console.log(res);
      console.log('sync successful');
    }
  }

  return (
    <DefaultAppScreen>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Button title="Sync your data" onPress={()=>{
        handleOnPress()
      }}/>
      
    </DefaultAppScreen>

  )
}