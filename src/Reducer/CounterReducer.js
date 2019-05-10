import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER
}
<<<<<<< HEAD
  from '../Constants/Constants'

const initialState = {
  count: 0
}

export function countReducer (state = initialState, action) {
=======
  from '../Constants/Constants';

const initialState = {
  count: 0
};

export function countReducer(state = initialState, action) {
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1
<<<<<<< HEAD
      }
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1
      }
=======
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1
      };
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
    case ASYNC_INCREMENT_COUNTER:
      return {
        count: state.count + 1
      }
    default:
<<<<<<< HEAD
      return state
  }
}

export default countReducer
=======
      return state;
  }
}

export default countReducer;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
