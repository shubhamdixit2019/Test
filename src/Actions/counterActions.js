import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER
} from '../Constants/CounterConstants';

export const increment = () => ({ type: INCREMENT_COUNTER });

export const decrement = () => ({ type: DECREMENT_COUNTER });

export const asyncIncrement = () => ({ type: ASYNC_INCREMENT_COUNTER });