import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS
} from '../Constants/Constants'

const initialState = {
  data: null,
  status: '',
  isPending: false,
  errorMessage: '',
  list: []
}

function displayAPIReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        status: 'PLEASE WAIT...DATA LOADING...'
      }
    case FETCH_LIST_FAILURE:
      return {
        status: action.payload.error
      }
    case FETCH_LIST_SUCCESS:
      return {
        data: action.payload.items
      }
    default:
      return state
  }
}

export default displayAPIReducer
