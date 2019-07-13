import axios from "axios";
import { all, call, takeEvery, put } from 'redux-saga/effects';
import types, { setMentors} from "../actions/mentors";

function* fetchMentors() {
    // Fetch mentors data
    const { data } = yield call(axios.get, "https://stem-woman.info/mentors");
    yield put(setMentors({ mentors: data}));
}

export function* mentorSaga() {
    yield all([
      yield takeEvery(types.FETCH_MENTORS, fetchMentors),
    ]);
};
