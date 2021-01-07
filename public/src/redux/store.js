import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { fileReducer } from './fileReducer';
import  mySaga  from './mySaga';
import { userReducer } from './userReducer';

const saga = createSagaMiddleware()

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(mySaga)
