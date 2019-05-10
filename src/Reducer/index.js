// This file is to combine the multiple reducers
import { combineReducers } from 'redux'
<<<<<<< HEAD
import todoReducer from './todo'
import countReducer from './CounterReducer'
import displayAPIReducer from './DisplayAPIReducer'
import userListReducer from './UserListReducer'

export default combineReducers({
  todo: todoReducer,
  count: countReducer,
  displayAPI: displayAPIReducer,
  userList: userListReducer
})
=======
import todoReducer from './todo';
import countReducer from './CounterReducer';
import displayAPIReducer from './DisplayAPIReducer'
import createReducerTodoForMultipleUse from './todo'
import { HOME,OFFICE } from '../Constants/Constants'

export default combineReducers({
   todo: todoReducer,
 count: countReducer,
 displayAPI: displayAPIReducer,
// ReducerHome : createReducerTodoForMultipleUse(HOME),
//   ReducerOffice : createReducerTodoForMultipleUse(OFFICE)
});
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
