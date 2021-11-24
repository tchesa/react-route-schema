import { call } from 'typed-redux-saga'
import { put, takeLatest } from '@redux-saga/core/effects'
import { login, loginSuccess, loginFailure, LoginPayload } from './index'
import * as firebase from '../../services/firebase'
import { PayloadAction } from '@reduxjs/toolkit'

export function* loginSaga(action: PayloadAction<LoginPayload>) {
  try {
    const response = yield* call(firebase.login, action.payload.email, action.payload.password)
    yield put(loginSuccess(response))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export default function* watcher() {
  yield takeLatest(login.type, loginSaga);
}
