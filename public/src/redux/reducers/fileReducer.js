import { SET_CURRENT_DIR, SET_FILES, SET_PARENT_DIR, SET_PROPERTIES } from "./actionTypes";

const defaultState = {
  files: [],
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

    // case SET_PROPERTIES:
    //   return { ...state, properties: action.payload }

    default:
      return state;
  }
}
