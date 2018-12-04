import { all } from 'redux-saga/effects'
/* ------------- Sagas ------------- */

import { watchAddTextAsync } from './HelloSaga';
import { helloSaga } from './WorldSaga';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchAddTextAsync()
  ])
}
