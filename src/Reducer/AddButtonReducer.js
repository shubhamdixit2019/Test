import * as Constants from '../Constants/CounterConstants';

const initialState = {
    term: ''
};

function addButtonReducer(state = initialState, action) {

  switch(action.type) {
    case Constants.incrementCounter:
      return {
        count: state.count + 1
      };
    case Constants.decrementCounter:
      return {
        count: state.count - 1
      };
    case Constants.asyncIncrementCounter:
    return{
      count: state.count + 1
    }
    default:
      return state;
  }
}

export {countReducer};
