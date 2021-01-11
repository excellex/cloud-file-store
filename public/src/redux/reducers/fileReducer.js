import { SET_CURRENT_DIR, SET_FILES, SET_PARENT_DIR } from "./actionTypes";

const defaultState = {
  files: [],
  currentDir: null,
  parentDir: null
}

export const fileReducer = (state = defaultState, action) => {

  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload }

    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload }

    case SET_PARENT_DIR:
      return { ...state, parentDir: action.payload }

    default:
      return state;
  }
}
