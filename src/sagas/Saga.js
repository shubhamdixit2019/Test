import { all, fork, select } from 'redux-saga/effects'
import { watchToDolistFetchingSaga } from './todoListSaga'
import { watchCreateUserFetchingSaga } from './createUserSaga'
import { watchDeleteUserFetchingSaga } from './deleteUserSaga'
import { watchUserFetchingSaga } from './userListSaga'
import { watchUpdateUserFetchingSaga } from './updateUserSaga'
import { watchCounterUp } from './counterSaga'

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