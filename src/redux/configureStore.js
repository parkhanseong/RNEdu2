import { createStore, applyMiddleware, compose } from 'redux'
import modules from './modules'

import loggerMiddle from '../lib/loggerMiddleware'
import noldamNetworkMiddleware from './noldam-network-middleware/noldamNetworkMiddleware'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger()

const configureStore = initialState => {
  const store = createStore(
    modules,
    initialState,
    compose(applyMiddleware(logger, noldamNetworkMiddleware))
    // compose(applyMiddleware(noldamNetworkMiddleware))
  )
  return store
}

// git test
export default configureStore
