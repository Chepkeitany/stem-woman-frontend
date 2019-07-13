import axios from "axios";
import { all, call, takeEvery, put } from 'redux-saga/effects';
import types, { setScholarships} from "../actions/scholarships";

function* fetchScholarships() {
    // Fetch mentors data
    const { data } = yield call(axios.get, "https://stem-woman.info/scholarships");
    yield put(setScholarships({ scholarships: data}));
}

export function* scholarshipSaga() {
    yield all([
      yield takeEvery(types.FETCH_SCHOLARSHIPS, fetchScholarships),
    ]);
};
