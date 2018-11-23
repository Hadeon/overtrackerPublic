import { 
  SET_USER,
  GET_USER,
  AUTH_LOADING
} from './types.js';

export const getUser = () => {
  return {
    type: GET_USER
  }
}

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData
  }
};

export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING
  }
}