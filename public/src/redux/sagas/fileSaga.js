import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setUserAC, authUserAC, setFilesAC, setPropertiesAC } from '../actions';
import { auth, signin } from '../../actions/auth';
import { listFiles } from '../../actions/listFiles';
import { AUTH_USER, FETCH_FILES, FETCH_USER, SET_PROPERTIES } from '../types';

function* fileWorker(action) {
  const data = yield call(listFiles, action.payload);
  data.properties.splice(data.properties.indexOf('user'), 6)
  yield put(setFilesAC(data))
};

export default function* watcher() {
  yield takeEvery(FETCH_FILES, fileWorker)
};
