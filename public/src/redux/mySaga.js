import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setUserAC } from './actionCreators';
import { auth, signin } from '../actions/auth';
import { AUTH_USER, FETCH_USER } from './actionTypes';


function* signWorker(action) {
  const user = yield call(signin, action.payload);
  yield put(setUserAC(user))
};
function* authWorker(action) {
  const user = yield call(auth, action.payload);
  yield put(setUserAC(user))
};
function* watcher() {
  yield takeEvery(FETCH_USER, signWorker)
  yield takeEvery(AUTH_USER, authWorker)
};

export default function* mySaga() {
  yield all([
    watcher()
  ])
};