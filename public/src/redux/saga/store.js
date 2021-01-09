import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySaga from './mySaga';
import { rootReducer } from '../reducers/rootReducer';

const saga = createSagaMiddleware()



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(mySaga)
