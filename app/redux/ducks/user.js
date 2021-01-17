import { v4 as uuidv4 } from 'uuid';

import AddHabitModal from '../../screens/habits/AddHabitModal'
import initialState from '../initialState'
import createDateString from '../../shared/functions/createDateString'
import wasEntryMadeToday from '../../shared/functions/wasEntryMadeToday'

// Types
const CREATEUSER = 'createuser'
const SIGNIN = 'signin'
const ADDHABIT = 'addHabit'
const DELETEHABIT = 'deleteHabit'
const CREATEENTRY = 'createEntry'



function userReducer (state = initialState, action) {
  switch (action.type) {

    case CREATEUSER:

      return {...state, account:{...state.account, ...action.payload} }
      break;


      case SIGNIN:

        return {...action.payload}
        break;

        case ADDHABIT:

          return {...state, habits: [...state.habits, action.payload]}
          break;

          
        case DELETEHABIT:

          return {...state, habits: state.habits.filter(v => action.payload != v.habit_id)}
          break;


        case CREATEENTRY: 
          return {...state, habits: [...state.habits.filter(h=> h.habit_id != action.payload.oldHabitID), action.payload.updatedHabit ]}
   
    default:
      return state
  }
}

export default userReducer;



// HABIT FUNCTIONS 
export const createUser = ({name, id, email}) => ({
  type: CREATEUSER,
  payload: {
    id,
    name,
    email,
    created_account: Math.floor(Date.now() / 1000)
  }
})


export const signUserIn = ({premiumAccount: premium_account, email, state, _id:id, createdAt: created_account,name }) => {
  let pl;
  console.log('from reducer', state);
  if(state){
    pl = {...state, account: {...state.account, premium_account,email, id, created_account, name }}
  }else {
    pl = {account: {premium_account,email, id, created_account, name} }
  }
  return {type:SIGNIN, payload: pl}

}


// HABIT FUNCTIONS
export const addHabit = ({name, type:habitType, units, chances, target_per_day}) => ({
  type: ADDHABIT,
  payload: {
    habit_id: uuidv4(),
    name,
    created_habit: Math.floor(Date.now() / 1000),
    rules : {
      type:habitType,
      units,
      target_per_day,
      chances,
      last_updated: Math.floor(Date.now() / 1000)
    },
    entries:[]
  }
})

export const deleteHabit = (habit) => (({
  type: DELETEHABIT,
  payload: habit.habit_id
}))


// ENTRY FUNCTIONS
export const createEntry = (habit,value) =>{
  // from this i will return the old habit object and filter any date string that matches today
  
  const {entries} = habit
  const newEntry = {
    value: value || 0,
    dateString: createDateString(),
    timestamp: Math.floor((Date.now() / 1000)),
    completed: value >= habit.rules.target_per_day ,
    // dateString: "18.1.2021"
  }
  const updatedEntries = [newEntry, ...entries.filter(e => e.dateString != newEntry.dateString)]
  const updatedHabit = {
    ...habit,
    entries: updatedEntries
  }

  return {
    type: CREATEENTRY,
    payload: {
      oldHabitID: habit.habit_id,
      updatedHabit
    }
  }
}
