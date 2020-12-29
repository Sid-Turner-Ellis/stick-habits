const INCREMENT = 'increment'
const DECREMENT = 'decrement'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

const initialState = {
  count: 5
}

function counterReducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
      break;

      case DECREMENT:
        return {...state, count: state.count - 1}
        break;
  
    default:
      return state
      break;
  }
}

export default counterReducer;