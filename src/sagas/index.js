import { all, fork } from 'redux-saga/effects';
import { userSaga } from './user';
import { heroineSaga } from './heroines';


function* rootSaga() {
    yield all([
      fork(userSaga),
      fork(heroineSaga),
    ]);
  }
  
export default rootSaga;