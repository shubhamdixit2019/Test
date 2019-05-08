import { UPDATE_USER_PENDING } from '../Constants/Constants'
import {
  updateUserFailure,
  updateUserSuccess
} from '../Actions/DisplayAPIAction'
import { put, takeLatest } from 'redux-saga/effects'
import TodoAPIHelper from '../Services/apiServices'

function * updateUserFetchingFlow (action) {
  try {
    TodoAPIHelper.updateUser(action.payload.data)
    yield put(updateUserSuccess({
      id: action.payload.data.id,
      name: action.payload.data.updatedValue,
      list: action.payload.list
    }))
  } catch (err) {
    yield put(updateUserFailure({ error: err }))
  }
}

export function * watchUpdateUserFetchingSaga () {
  yield takeLatest(UPDATE_USER_PENDING, updateUserFetchingFlow)
}
