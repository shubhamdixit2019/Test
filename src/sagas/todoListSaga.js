import TodoAPIHelper from '../Services/apiServices'
import { put } from 'redux-saga/effects'
import {
    fetchListSuccess,
    fetchListFailure,
  } from '../Actions/DisplayAPIAction'

export function * startToDoListFetchingFlow () {
    try {
      const items = yield TodoAPIHelper.getTodoList()
      yield put(fetchListSuccess({ items: items }))
    } catch (err) {
      yield put(fetchListFailure({ error: err }))
    }
  }
