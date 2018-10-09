import { SET_USER, GET_USER } from '../_actions/types.js';

const initialState = {
  userData: 'test'
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_USER:
      return {
        ...state
      }
    case SET_USER:
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state;
  }
}