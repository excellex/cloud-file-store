import { SET_CURRENT_DIR, SET_FILES, SET_PARENT_DIR, SET_HISTORY, UPDATE_HISTORY } from "../types";

const defaultState = {
  files: [],
  history: [],
  currentDir: null,
  parentDir: null,
  properties: null
}

export const fileReducer = (state = defaultState, action) => {

  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload.files, properties: action.payload.properties }

    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload }

    case SET_PARENT_DIR:
      return { ...state, parentDir: action.payload }

    case SET_HISTORY:
      return { ...state, history: [...state.history, action.payload] }

    default:
      return state;
  }
}
