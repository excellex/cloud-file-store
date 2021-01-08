import { SET_USER, FETCH_USER, LOGOUT, AUTH_USER } from './actionTypes';

export const setUserAC = (payload) => ({
  type: SET_USER,
  payload
});

export const logoutAC = () => ({
  type: LOGOUT
});

export const fetchUserAC = (payload) => {
  return ({
    type: FETCH_USER,
    payload
  })
}

export const authUserAC = () => {
  console.log('authUserAC');
  return ({
    type: AUTH_USER
  })
}
