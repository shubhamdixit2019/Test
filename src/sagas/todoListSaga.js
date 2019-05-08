import TodoAPIHelper from '../Services/apiServices'
import { FETCH_LIST_REQUEST } from '../Constants/Constants'
import { put, takeEvery } from 'redux-saga/effects'
import {
  fetchListSuccess,
  fetchListFailure
} from '../Actions/DisplayAPIAction'

export function * startToDoListFetchingFlow () {
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
