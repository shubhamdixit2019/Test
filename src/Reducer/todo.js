import {
  ADD_TODO,
  FILTER_SEARCH,
  REMOVE_TODO,
  OFFICE,
  HOME
}
<<<<<<< HEAD
  from '../Constants/Constants'
=======
  from '../Constants/Constants';
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae

const initialState = {
  items: [],
  filteredList: [],
<<<<<<< HEAD
  searchWordApp: '',
  homeitems: [],
  homefilteredList: [],
  homesearchWordApp: ''
}

function todoReducer (state = initialState, action) {
  switch (action.type) {
    // OFFICE ONLY
    case ADD_TODO + OFFICE:
      return {
        ...state,
        items: [...state.items, action.payload.term]
      }
    case FILTER_SEARCH + OFFICE:
      const filterItems =
        state.items.filter((item, index) =>
          ((item.search((new RegExp(action.payload.searchWord, 'i')))) > (-1)))
      return {
        ...state,
        filteredList: filterItems,
        searchWordApp: action.payload.searchWord
      }
    case REMOVE_TODO + OFFICE:
      // new reference created as the previous splice method
      // assigned to he same state.items
      // was giving same things to it
      const filteredItems =
        state.items.filter((item, index) => item !== action.payload)
=======
  searchWordApp : '',
  homeitems: [],
  homefilteredList: [],
  homesearchWordApp : ''
};

//  function createReducerTodoForMultipleUse(reducerFrom = '') {
//   return function counter(state = 0, action) {
//     switch (action.type) {
//       case ADD_TODO+`_${reducerFrom}`:
//         return  {
//           ...state,
//           items: [...state.items, action.payload.term]
//         };
//       case FILTER_SEARCH+`_${reducerFrom}`:
//       const filterItems =
//       state.items.filter((item, index) =>
//         ((item.search((new RegExp(action.payload.searchWord, "i")))) > (-1)))
//     return {
//       ...state,
//       filteredList: filterItems,
//       searchWordApp : action.payload.searchWord
//     };
//         case REMOVE_TODO+`_${reducerFrom}` :
//         //new reference created as the previous splice method 
//       //assigned to he same state.items
//       //was giving same things to it  
//       const filteredItems =
//       state.items.filter((item, index) => index !== action.payload)
//     return {
//       ...state,
//       items: filteredItems
//     }
//       default:
//         return state
//     }
//   }
// }

function todoReducer(state = initialState, action) {

  switch (action.type) {
    //OFFICE ONLY
    case ADD_TODO+OFFICE:
      return {
        ...state,
        items: [...state.items, action.payload.term]
      };
    case FILTER_SEARCH+OFFICE:
    debugger
      const filterItems =
        state.items.filter((item, index) =>
          ((item.search((new RegExp(action.payload.searchWord, "i")))) > (-1)))
      return {
        ...state,
        filteredList: filterItems,
        searchWordApp : action.payload.searchWord
      };
    case REMOVE_TODO+OFFICE:
      //new reference created as the previous splice method 
      //assigned to he same state.items
      //was giving same things to it  
      const filteredItems =
        state.items.filter((item, index) => index !== action.payload)
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
      return {
        ...state,
        items: filteredItems
      }
<<<<<<< HEAD
      // HOME ONLY
    case ADD_TODO + HOME:
      return {
        ...state,
        homeitems: [...state.homeitems, action.payload.term]
      }
    case FILTER_SEARCH + HOME:
      const filterItems1 =
        state.homeitems.filter((item, index) =>
          ((item.search((new RegExp(action.payload.searchWord, 'i')))) > (-1)))
      return {
        ...state,
        homefilteredList: filterItems1,
        homesearchWordApp: action.payload.searchWord
      }
    case REMOVE_TODO + HOME:
      // new reference created as the previous splice method
      // assigned to he same state.items
      // was giving same things to it
=======
      //HOME ONLY
      case ADD_TODO+HOME:
      return {
        ...state,
        homeitems: [...state.homeitems, action.payload.term]
      };
    case FILTER_SEARCH+HOME:
    debugger
      const filterItems1 =
        state.homeitems.filter((item, index) =>
          ((item.search((new RegExp(action.payload.searchWord, "i")))) > (-1)))
      return {
        ...state,
        homefilteredList: filterItems1,
        homesearchWordApp : action.payload.searchWord
      };
    case REMOVE_TODO+HOME:
      //new reference created as the previous splice method 
      //assigned to he same state.items
      //was giving same things to it  
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
      const filteredItems2 =
        state.homeitems.filter((item, index) => index !== action.payload)
      return {
        ...state,
        homeitems: filteredItems2
      }
    default:
<<<<<<< HEAD
      return state
  }
}

export default todoReducer
=======
      return state;
  }
}

export default todoReducer;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
