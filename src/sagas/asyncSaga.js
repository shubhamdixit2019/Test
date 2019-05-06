import { all, fork, takeEvery, put, takeLatest } from 'redux-saga/effects'
import delay from 'redux-saga'
import {
  INCREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER,
  FETCH_LIST_REQUEST,
  FETCH_LIST_USER_REQUEST
} from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListFailure,
  fetchListUserFailure,
  fetchListUserSuccess

} from '../Actions/DisplayAPIAction'

import TodoAPIHelper from '../Services/apiServices'

function * counterAsyncUp () {
  yield delay(5000)
  yield put({ type: ASYNC_INCREMENT_COUNTER })
}

export function * watchCounterUp () {
  yield takeLatest(INCREMENT_COUNTER, counterAsyncUp)
}

function * startToDoListFetchingFlow () {
  try {
    const items = yield TodoAPIHelper.getTodoList()
    yield put(fetchListSuccess({ items: items }))
  } catch (err) {
    yield put(fetchListFailure({ error: err }))
  }
}

export function * watchToDolistFetchingSaga () {
  yield takeEvery(FETCH_LIST_REQUEST, startToDoListFetchingFlow)
}

function * startUserFetchingFlow () {
  try {
    const userData = yield TodoAPIHelper.getUsers()
    yield put(fetchListUserSuccess({ list: userData }))
  } catch (err) {
    yield put(fetchListUserFailure({ error: err }))
  }
}

export function * watchUserFetchingSaga () {
  yield takeEvery(FETCH_LIST_USER_REQUEST, startUserFetchingFlow)
}

export function * rootSaga () {
  yield all([
    fork(watchToDolistFetchingSaga),
    fork(watchCounterUp),
    fork(startUserFetchingFlow)
  ])
}
