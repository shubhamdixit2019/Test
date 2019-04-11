// This file is to combine the multiple reducers
import { combineReducers } from 'redux'
import todoReducer from './todo';
import countReducer from './CounterReducer';

export default combineReducers({
  todo: todoReducer,
  count: countReducer
});
