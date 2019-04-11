import {
  ADD_TODO,
  FILTER_SEARCH,
  REMOVE
} from '../Constants/CounterConstants';

export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const filterSearch = (payload) => ({ type: FILTER_SEARCH, payload });

export const remove = (payload) => ({ type: REMOVE, payload });