import { all, fork } from 'redux-saga/effects';
import { heroineSaga } from './heroines';
import { mentorSaga } from './mentors';
import { userSaga } from './user';

function* rootSaga() {
    yield all([
      fork(userSaga),
      fork(heroineSaga),
      fork(mentorSaga),
    ]);
  }
  
export default rootSaga;