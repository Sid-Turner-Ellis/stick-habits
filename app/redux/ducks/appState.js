const SETTABBARVISIBILE = 'setTabBarVisible'
const CAUSEREHYDRATE = 'causeRehydrate'


const initialState = {
  tabBarVisible: true,
  rehydrate: false
}

export const setTabBarVisible = (bool) => ({
  type: SETTABBARVISIBILE,
  payload: bool
})

export const causeRehydrate = () => {
  return {type:CAUSEREHYDRATE}

}

function appStateReducer (state = initialState, action) {
  switch (action.type) {

    case SETTABBARVISIBILE :

      return {...state, tabBarVisible: action.payload }
      break;
      
      case CAUSEREHYDRATE:

        return {...state, rehydrate: !state.rehydrate}
        break;
      




    default:
      return state
  }
}

export default appStateReducer;



