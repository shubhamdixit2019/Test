import {
  ADD_TODO,
  FILTER_SEARCH,
  REMOVE_TODO,
  OFFICE,
  HOME
} from '../Constants/Constants';

export const officeaddTodo = (payload) => ({ type: ADD_TODO+OFFICE, payload });

export const officefilterSearch = (payload) => ({ type: FILTER_SEARCH+OFFICE, payload });

export const officeremove = (payload) => ({ type: REMOVE_TODO+OFFICE, payload });


export const homeaddTodo = (payload) => ({ type: ADD_TODO+HOME, payload });

export const homefilterSearch = (payload) => ({ type: FILTER_SEARCH+HOME, payload });

export const homeremove = (payload) => ({ type: REMOVE_TODO+HOME, payload });