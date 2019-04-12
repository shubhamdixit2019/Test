import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS
} from '../Constants/Constants';

export const fetchListRequest
  = (payload) => ({ type: FETCH_LIST_REQUEST, payload });

export const fetchListFailure
  = (payload) => ({ type: FETCH_LIST_FAILURE, payload });

export const fetchListSuccess
  = (payload) => ({ type: FETCH_LIST_SUCCESS, payload });