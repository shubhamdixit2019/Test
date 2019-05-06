import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducer'
import { loggerMiddleware } from './Middleware/loggerMiddleware'
import createSagaMiddelware from 'redux-saga'
import { rootSaga } from './sagas/asyncSaga'

const sagaMiddleWare = createSagaMiddelware()

export const store =
    createStore(reducers, applyMiddleware(sagaMiddleWare, loggerMiddleware))

sagaMiddleWare.run(rootSaga)
