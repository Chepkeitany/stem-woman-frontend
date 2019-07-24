import { all, fork } from 'redux-saga/effects';
import { conferenceSaga } from './conferences';
import { heroineSaga } from './heroines';
import { mentorSaga } from './mentors';
import { scholarshipSaga } from './scholarships';
import { resourceSaga } from './resources';
import { userSaga } from './user';

function* rootSaga() {
    yield all([
      fork(conferenceSaga),
      fork(heroineSaga),
      fork(mentorSaga),
      fork(scholarshipSaga),
      fork(resourceSaga),
      fork(userSaga)
    ]);
  }
  
export default rootSaga;