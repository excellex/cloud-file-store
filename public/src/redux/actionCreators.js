import {
  SET_USER,
  FETCH_USER,
  LOGOUT,
  AUTH_USER,
  SET_FILES,
  SET_CURRENT_DIR,
  FETCH_FILES,
  SET_PARENT_DIR
} from './reducers/actionTypes';

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
  return ({
    type: AUTH_USER
  })
}

export const setFilesAC = (payload) => ({
  type: SET_FILES,
  payload
});

export const fetchFilesAC = (payload) => ({
  type: FETCH_FILES,
  payload
});

export const setCurrentDirAC = (payload) => ({
  type: SET_CURRENT_DIR,
  payload
});

export const setParentDirAC = (payload) => ({
  type: SET_PARENT_DIR,
  payload
});
