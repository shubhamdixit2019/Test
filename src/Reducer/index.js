// This file is to combine the multiple reducers
import { combineReducers } from 'redux'
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
