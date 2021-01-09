import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setUserAC, authUserAC, setFilesAC } from '../actionCreators';
import { auth, signin } from '../../actions/auth';
import { listFiles } from '../../actions/listFiles';
import { AUTH_USER, FETCH_FILES, FETCH_USER } from '../reducers/actionTypes';


function* signWorker(action) {
  const user = yield call(signin, action.payload);
  yield put(setUserAC(user))
};
function* authWorker() {
  const user = yield call(auth, null);
  yield put(setUserAC(user))
};

function* fileWorker(action) {
  const  state = yield call(listFiles, action.payload);
  yield put(setFilesAC(state.files))
};
function* watcher() {
  yield takeEvery(FETCH_USER, signWorker)
  yield takeEvery(AUTH_USER, authWorker)
  yield takeEvery(FETCH_FILES, fileWorker)
};

export default function* mySaga() {
  yield all([
    watcher()
  ])
};
