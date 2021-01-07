import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CreateSagaMiddleware from 'redux-saga';
const sagaMiddleware = CreateSagaMiddleware()


export const store = createStore((state = {a: {a: 'A'}}, action) => {
  switch (action.type) {
    case 'ADD_':
      return { ...state, b: action.payload }
    default:
      return state
  }
},
  composeWithDevTools(applyMiddleware(sagaMiddleware)))

// sagaMiddleware.run(mySaga)
