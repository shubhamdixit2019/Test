import { FETCH_CREATE_USER_PENDING } from '../Constants/Constants'
import {
  createUserFailure,
  createUserSuccess
} from '../Actions/DisplayAPIAction'
import { put, takeLatest } from 'redux-saga/effects'
import TodoAPIHelper from '../Services/apiServices'

function * createUserFetchingFlow (action) {
  try {
    TodoAPIHelper.createUser(action.payload)
    yield put(createUserSuccess())
  } catch (err) {
    yield put(createUserFailure({ error: err }))
  }
}

export function * watchCreateUserFetchingSaga () {
  yield takeLatest(FETCH_CREATE_USER_PENDING, createUserFetchingFlow)
}
