import {
  ADD_TODO,
  FILTER_SEARCH,
  REMOVE_TODO
}
  from '../Constants/Constants'

const initialState = {
  items: [],
  filteredList: [],
  searchWordApp: ''
}

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload.term]
      }
    case FILTER_SEARCH:
      const filterItems =
        state.items.filter((item, index) =>
          ((item.search((new RegExp(action.payload.searchWord, 'i')))) > (-1)))
      return {
        ...state,
        filteredList: filterItems,
        searchWordApp: action.payload.searchWord
      }
    case REMOVE_TODO:
      const filteredItems =
        state.items.filter((item, index) => index !== action.payload.index)
      return {
        ...state,
        items: filteredItems
      }
    default:
      return state
  }
}

export default todoReducer
