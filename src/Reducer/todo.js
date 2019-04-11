import { ADD_TODO, FILTER_SEARCH, REMOVE } from '../Constants/CounterConstants';

const initialState = {
  items: [],
  filteredList: []
};

function todoReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload.term]
      };
    case FILTER_SEARCH:
      const filterItems =
        state.items.filter((item, index) => ((item.search((new RegExp(action.payload, "i")))) > (-1)))
      console.log('filterItems==================>', filterItems);
      console.log('state.items==================>', state.items);      
      return {
        ...state,
        filteredList : filterItems
      }
      

    case REMOVE:
      //new reference created as the previous splice method 
      //was giving same things to it  
      const filteredItems =
        state.items.filter((item, index) => index !== action.payload)
      return {
        ...state,
        items: filteredItems
      }
    default:
      return state;
  }
}

export default todoReducer;