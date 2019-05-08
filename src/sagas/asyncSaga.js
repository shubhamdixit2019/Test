import { all, fork, takeEvery, put, takeLatest } from 'redux-saga/effects'
import delay from 'redux-saga'
import {
  INCREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER,
  FETCH_LIST_REQUEST,
  FETCH_LIST_USER_REQUEST,
  FETCH_CREATE_USER_PENDING,
  FETCH_DELETE_USER_PENDING,
  UPDATE_USER_PENDING
} from '../Constants/Constants'
import {
  fetchListUserFailure,
  fetchListUserSuccess,
  createUserFailure,
  createUserSuccess,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserSuccess,
  updateUserFailure

} from '../Actions/DisplayAPIAction'
import { startToDoListFetchingFlow } from './todoListSaga'
import TodoAPIHelper from '../Services/apiServices'

function * counterAsyncUp () {
  yield delay(5000)
  yield put({ type: ASYNC_INCREMENT_COUNTER })
}

export function * watchCounterUp () {
  yield takeLatest(INCREMENT_COUNTER, counterAsyncUp)
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

function * createUserFetchingFlow (action) {
  try{        
    TodoAPIHelper.createUser(action.payload)
    yield put(createUserSuccess())
  }catch(err){
     yield put(createUserFailure({error : err}))
  }
}

export function * watchCreateUserFetchingSaga(){
  yield takeLatest(FETCH_CREATE_USER_PENDING,createUserFetchingFlow)
}

export function * watchUserFetchingSaga () {
  yield takeEvery(FETCH_LIST_USER_REQUEST,(startUserFetchingFlow))
}

//USER DELETE
function * deleteUserFetchingFlow (action) {
  try{ 
    TodoAPIHelper.deleteUser(action.payload.id)
    yield put(deleteUserSuccess({id : action.payload.id,list : action.payload.list}))
  }catch(err){
     yield put(deleteUserFailure({error : err}))
  }
}

export function * watchDeleteUserFetchingSaga(){
  yield takeLatest(FETCH_DELETE_USER_PENDING,deleteUserFetchingFlow)
}

//USER UPDATE
function * updateUserFetchingFlow (action) {
  try{ 
   
    TodoAPIHelper.updateUser()
    yield put(updateUserSuccess({id : action.payload.id,name : action.payload.name}))
  }catch(err){
     yield put(updateUserFailure({error : err}))
  }
}

export function * watchUpdateUserFetchingSaga(){
  yield takeLatest(UPDATE_USER_PENDING,updateUserFetchingFlow)
}

export function * rootSaga () {
  yield all([
    fork(watchToDolistFetchingSaga),
    fork(watchCounterUp),
    fork(watchUserFetchingSaga),
    fork(watchCreateUserFetchingSaga),
    fork(watchDeleteUserFetchingSaga),
    fork(watchUpdateUserFetchingSaga)
  ])
}