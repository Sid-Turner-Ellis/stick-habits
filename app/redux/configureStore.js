import {createStore , combineReducers} from 'redux'
import userReducer from './ducks/user'
import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)



export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  
  // run this to remove the stored data
  // persistor.purge()
  return { store, persistor }
}