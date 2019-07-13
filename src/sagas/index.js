import { all, fork } from 'redux-saga/effects';
import { heroineSaga } from './heroines';
import { mentorSaga } from './mentors';
import { scholarshipSaga } from './scholarships';
import { userSaga } from './user';

function* rootSaga() {
    yield all([
      fork(userSaga),
      fork(heroineSaga),
      fork(mentorSaga),
      fork(scholarshipSaga),
    ]);
  }
  
export default rootSaga;