import {
  ASYNC_INCREMENT_COUNTER,
  INCREMENT_COUNTER
} from '../Constants/Constants'
import { put, takeLatest } from 'redux-saga/effects'

import delay from 'redux-saga'

function * counterAsyncUp () {
  yield delay(5000)
  yield put({ type: ASYNC_INCREMENT_COUNTER })
}

export function * watchCounterUp () {
  yield takeLatest(INCREMENT_COUNTER, counterAsyncUp)
}
