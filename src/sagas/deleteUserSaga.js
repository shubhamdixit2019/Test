import { FETCH_DELETE_USER_PENDING } from '../Constants/Constants'
import {
  deleteUserFailure,
  deleteUserSuccess
} from '../Actions/DisplayAPIAction'
import { put, takeLatest } from 'redux-saga/effects'
import TodoAPIHelper from '../Services/apiServices'

function * deleteUserFetchingFlow (action) {
  try {
    console.log('action.payload delete ======>', action.payload)
    TodoAPIHelper.deleteUser(action.payload.id)
    // Dont press Enter else the below yield keyword
    // will take it as a different statement
    yield put(deleteUserSuccess({
      id: action.payload.id,
      list: action.payload.list
    }))
  } catch (err) {
    yield put(deleteUserFailure({ error: err }))
  }
}

export function * watchDeleteUserFetchingSaga () {
  yield takeLatest(FETCH_DELETE_USER_PENDING, deleteUserFetchingFlow)
}
