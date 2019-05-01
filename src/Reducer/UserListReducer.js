import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_FAILURE,
  FETCH_DELETE_USER_PENDING,
  FETCH_CREATE_USER_FAILURE,
  FETCH_CREATE_USER_SUCCESS,
  FETCH_CREATE_USER_PENDING
} from '../Constants/Constants'

const initialState = {
  status: '',
  isPending: false,
  errorMessage: '',
  list: null,
  result: ''
}

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        status: 'Please Wait.... Data Loading',
        isPending: true
      }
    case FETCH_LIST_FAILURE:
      return {
        errorMessage: ('Following Error Encountered ' + action.payload.error),
        isPending: false,
        status: 'FAILED'
      }
    case FETCH_LIST_SUCCESS:
      return {
        list: action.payload.list,
        isPending: false,
        status: 'SUCCESS'
      }
    case FETCH_DELETE_USER_SUCCESS:
      const t = {
        status: 'SUCCESS',
        isPending: false,
        list: [...state.list].filter((item) => item.id !== action.payload.id)
      }
      return t
    case FETCH_DELETE_USER_PENDING:
      return {
        status: 'Fetching from Database',
        isPending: false
      }
    case FETCH_DELETE_USER_FAILURE:
      return {
        status: 'FAILED',
        isPending: false,
        errorMessage: 'Database fetch error : ' + (action.payload.error) +
          ' encountered'
      }
    case FETCH_CREATE_USER_SUCCESS:
      return {
        result: 'SUCCESS: User created',
        isPending: false
      }
    case FETCH_CREATE_USER_FAILURE:
      return {
        result: 'FAILED',
        isPending: false,
        errorMessage: 'Database fetch error : ' + (action.payload.error) + ' encountered'
      }
    case FETCH_CREATE_USER_PENDING:
      return {
        result: 'Fetching from Database',
        isPending: false
      }
    default:
      return state
  }
}

export default userListReducer