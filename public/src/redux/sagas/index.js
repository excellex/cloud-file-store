import userWatcher from './userSaga';
import fileWatcher from './fileSaga';
export default function* mySaga() {
  yield all([
    userWatcher(), fileWatcher()
  ])
};
