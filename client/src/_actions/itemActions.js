import axios from 'axios';
import { apiRoute } from '../constants/index';

import { 
  GET_ITEMS,
  ITEMS_LOADING
} from './types.js';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
     .get(`${apiRoute}/api/items`)
     .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
     })
  )
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}