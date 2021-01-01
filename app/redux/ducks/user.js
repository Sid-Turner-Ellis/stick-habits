import initialState from '../initialState'

const CREATEUSER = 'createuser'
const CAUSEREHYDRATE = 'causeRehydrate'

export const createUser = ({name, id, email}) => ({
  type: CREATEUSER,
  payload: {
    id,
    name,
    email,
    created_account: Math.floor(Date.now() / 1000),
    last_login: Math.floor(Date.now() / 1000),
  }
})


export const causeRehydrate = () => {
  return {type:CAUSEREHYDRATE}
}



function userReducer (state = initialState, action) {
  switch (action.type) {

    case CREATEUSER:

      return {...state, account:{...state.account, ...action.payload} }
      break;

      case CAUSEREHYDRATE:

        return {...state, rehydrate: !state.rehydrate}
        break;

  
    default:
      return state
  }
}

export default userReducer;