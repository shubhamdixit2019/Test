import * as Constants from '../Constants/CounterConstants';

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.incrementCounter:
      state.count = state.count + 1
      return {
        count: state.count + 1
      };
    case Constants.decrementCounter:
      return {
        count: state.count - 1
      };
    case Constants.asyncIncrementCounter:
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
}

export {countReducer};
