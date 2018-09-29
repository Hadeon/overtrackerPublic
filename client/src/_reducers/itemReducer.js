import { GET_ITEMS, ITEMS_LOADING } from '../_actions/types.js';

const initialState = {
  items: [],
  itemDetails: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    default:
      return state;
  }
}