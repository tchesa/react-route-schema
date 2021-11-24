import { all } from 'redux-saga/effects';

import authorizationWatcher from './auth/sagas';

export default function* rootSaga() {
  yield all([
    authorizationWatcher()
  ])
}
