import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS,
  FETCH_DELETE_USER_FAILURE,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_PENDING,
  FETCH_CREATE_USER_FAILURE,
  FETCH_CREATE_USER_SUCCESS,
  FETCH_CREATE_USER_PENDING,
  UPDATE_USER_FAILURE,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE,
  FETCH_LIST_USER_REQUEST,
  FETCH_LIST_USER_SUCCESS
} from '../Constants/Constants'

export const fetchListRequest =
  () => ({ type: FETCH_LIST_REQUEST })

export const fetchListFailure =
  (payload) => ({ type: FETCH_LIST_FAILURE, payload })

export const fetchListSuccess =
  (payload) => ({ type: FETCH_LIST_SUCCESS, payload })

export const fetchListUserRequest =
  () => ({ type: FETCH_LIST_USER_REQUEST })

export const fetchListUserFailure =
  (payload) => ({ type: FETCH_LIST_USER_FAILURE, payload })

export const fetchListUserSuccess =
  (payload) => ({ type: FETCH_LIST_USER_SUCCESS, payload })

export const deleteUserSuccess =
  (payload) => ({ type: FETCH_DELETE_USER_SUCCESS, payload })

export const deleteUserFailure =
  (payload) => ({ type: FETCH_DELETE_USER_FAILURE, payload })

export const deleteUserPending =
  (payload) => ({ type: FETCH_DELETE_USER_PENDING, payload })

export const createUserSuccess =
  () => ({ type: FETCH_CREATE_USER_SUCCESS })

export const createUserPending =
  (payload) => ({ type: FETCH_CREATE_USER_PENDING, payload })

export const createUserFailure =
  (payload) => ({ type: FETCH_CREATE_USER_FAILURE, payload })

export const updateUserSuccess =
  (payload) => ({ type: UPDATE_USER_SUCCESS, payload })

export const updateUserPending =
  (payload) => ({ type: UPDATE_USER_PENDING, payload })

export const updateUserFailure =
  (payload) => ({ type: UPDATE_USER_FAILURE, payload })
