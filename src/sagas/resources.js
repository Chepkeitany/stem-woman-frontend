import axios from "axios";
import { all, call, takeEvery, put } from 'redux-saga/effects';
import types, { setResources} from '../actions/resources';

function* fetchResources() {
    // Fetch resources data
    const { data } = yield call(axios.get, "https://stem-woman.info/resources");
    yield put(setResources({ resources: data}));
}

export function* resourceSaga() {
    yield all([
      yield takeEvery(types.FETCH_RESOURCES, fetchResources),
    ]);
};
