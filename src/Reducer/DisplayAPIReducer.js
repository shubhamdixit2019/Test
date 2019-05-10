import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS
<<<<<<< HEAD
} from '../Constants/Constants'
=======
} from '../Constants/Constants';
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae

const initialState = {
  data: null,
  status: ''
<<<<<<< HEAD
}

function displayAPIReducer (state = initialState, action) {
=======
};

function displayAPIReducer(state = initialState, action) {

>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        status: action.payload
<<<<<<< HEAD
      }
    case FETCH_LIST_FAILURE:
      return {
        status: action.payload
      }
=======
      };
    case FETCH_LIST_FAILURE:
      return {
        status: action.payload
      };
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
    case FETCH_LIST_SUCCESS:
      return {
        data: action.payload
      }
    default:
<<<<<<< HEAD
      return state
  }
}

export default displayAPIReducer
=======
      return state;
  }
}

export default displayAPIReducer;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
