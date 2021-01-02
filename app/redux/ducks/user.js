import initialState from '../initialState'

const CREATEUSER = 'createuser'
const SIGNIN = 'signin'
const CAUSEREHYDRATE = 'causeRehydrate'

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
  console.log('the id ', premium_account, created_account, email);
  let pl;
  console.log('from reducer', state);
  if(state){
    pl = {...state, account: {...state.account, premium_account,email, id, created_account, name }}
  }else {
    pl = {account: {premium_account,email, id, created_account, name} }
  }
  return {type:SIGNIN, payload: pl}

}


  // when signing in a user without saved state, We need to have their name, ID and createdAt... basically all of the account


export const causeRehydrate = () => {
  return {type:CAUSEREHYDRATE}
}



function userReducer (state = initialState, action) {
  switch (action.type) {

    case CREATEUSER:

      return {...state, account:{...state.account, ...action.payload} }
      break;


      case SIGNIN:

        return {...action.payload}
        break;


      case CAUSEREHYDRATE:

        return {...state, rehydrate: !state.rehydrate}
        break;
  
    default:
      return state
  }
}

export default userReducer;