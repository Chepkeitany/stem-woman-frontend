import axios from "axios";
import { all, call, takeEvery, put } from 'redux-saga/effects';
import types, { setConferences } from "../actions/conferences";

function* fetchConferences() {
    // Fetch mentors data
    const { data } = yield call(axios.get, "https://stem-woman.info/conferences");
    yield put(setConferences({ conferences: data}));
}

export function* conferenceSaga() {
    yield all([
      yield takeEvery(types.FETCH_CONFERENCES, fetchConferences),
    ]);
};
