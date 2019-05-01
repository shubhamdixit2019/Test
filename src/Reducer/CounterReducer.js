import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER
}
  from '../Constants/Constants'

const initialState = {
  count: 0
}

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1
      }
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1
      }
    case ASYNC_INCREMENT_COUNTER:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

export default countReducer