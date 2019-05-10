import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS
<<<<<<< HEAD
} from '../Constants/Constants'

export const fetchListRequest =
  (payload) => ({ type: FETCH_LIST_REQUEST, payload })

export const fetchListFailure =
  (payload) => ({ type: FETCH_LIST_FAILURE, payload })

export const fetchListSuccess =
  (payload) => ({ type: FETCH_LIST_SUCCESS, payload })
=======
} from '../Constants/Constants';

export const fetchListRequest
  = (payload) => ({ type: FETCH_LIST_REQUEST, payload });

export const fetchListFailure
  = (payload) => ({ type: FETCH_LIST_FAILURE, payload });

export const fetchListSuccess
  = (payload) => ({ type: FETCH_LIST_SUCCESS, payload });
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
