import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import { addText, ADD_TEXT_ASYNC } from '../Redux/HelloRedux';

// Our worker Saga: will perform the async task
function* addTextAsync(action) {
  yield call(delay, 1000);
  yield put(addText(action.text));
}

// Our watcher Saga: spawn a new async task on each ADD_TEXT_ASYNC
export function* watchAddTextAsync() {
  yield takeEvery(ADD_TEXT_ASYNC, addTextAsync);
}
