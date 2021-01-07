import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AC } from './actionCreators';
import { ACT } from './actionTypes';

const fetchCat = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    return await response.json()
}

function* worker() {
    const res = yield call(fetchCat);
    yield put(AC(res))
};

function* watcher() {
    yield takeEvery(ACT, worker)
};

export default function* mySaga() {
    yield all([
        watcher()
    ])
};
