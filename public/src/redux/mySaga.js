import { all, call, put, takeEvery } from 'redux-saga/effects';
import { apiPost } from '../utils/fetcher';
import { signInURL } from '../utils/fetchURL';
import { setUserAC } from './actionCreators';
// import { signin } from '../actions/auth';
import { FETCH_USER } from './actionTypes';

// const fetchCat = async () => {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     return await response.json()
// }
const fetchUser = async (param) => {
  const response = await apiPost(signInURL, param)
  console.log(response)
  return await response
}
function* worker(action) {
  const user = yield call(fetchUser, action.payload);
  console.log(user);
  yield put(setUserAC(user))
};

function* watcher() {
  yield takeEvery(FETCH_USER, worker)
};

export default function* mySaga() {
  yield all([
    watcher()
  ])
};
