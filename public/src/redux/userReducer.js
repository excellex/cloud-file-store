import { SET_USER } from "./actionTypes";

const defaultState = {
  currentUser: {},
  isAuth: false
}

export const userReducer =(state = defaultState, action)=> {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }
      
    default:
      return state;
  }
}
