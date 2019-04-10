import {createStore} from 'redux';
import {countReducer} from './Reducer/CounterReducer';

export const countStore = createStore(countReducer);