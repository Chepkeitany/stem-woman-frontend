import axios from "axios";
import { all, call, takeEvery, put } from 'redux-saga/effects';
import types, { setHeroinesData } from "../actions/heroines";

function* fetchHeroines() {
    // Fetch heroines data
    const { data } = yield call(axios.get, "https://stem-woman.info/heroines");

    const pioneers = data.filter(o => o.category === "pioneer");
    const untold_stories = data.filter(o => o.category === "untold_stories");
    const modern_women = data.filter(o => o.category === "modern_women");

    yield put(setHeroinesData({ pioneers, untold_stories, modern_women}));
}

export function* heroineSaga() {
    yield all([
      yield takeEvery(types.FETCH_HEROINES, fetchHeroines),
    ]);
  };