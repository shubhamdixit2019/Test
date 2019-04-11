import {createStore} from 'redux';
import reducers from './Reducer';
//import todoReducer from  './Reducer/todo'

export const store = createStore(reducers);
