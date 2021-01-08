import { SET_USER, FETCH_USER } from './actionTypes';

export const setUserAC = (payload) => ({
  type: SET_USER,
  payload
});

export const fetchUserAC = (payload) => {
  console.log(payload);
  return ({
    type: FETCH_USER,
    payload
  })
}
