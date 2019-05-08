import { FETCH_LIST_USER_REQUEST } from '../Constants/Constants'
import {
  fetchListUserSuccess,
  fetchListUserFailure
} from '../Actions/DisplayAPIAction'
import { put, takeEvery } from 'redux-saga/effects'
import TodoAPIHelper from '../Services/apiServices'

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
