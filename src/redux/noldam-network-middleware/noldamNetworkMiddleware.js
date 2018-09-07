/**
 * velopert 김민준 님의 redux-pender 미들웨어를 참고하여 작성
 */
import { SET_ERROR, SET_LOADING } from '../modules/base'

/**
 * 인자가 Promise 타입인지 확인
 *
 * @param {object} promise
 * @return {boolean}
 */

function isPromise (promise) {
  if (!promise) return false
  return promise.then && promise.catch
}

/**
 * action의 payload에서 Promise 추출
 *
 * @param {object} action
 * @return {Promise} promise
 */

function getPromise (action) {
  const { payload } = action
  if (!payload) return null
  if (isPromise(payload)) return payload
  return null
}

const noldamNetworkMiddleware = store => next => action => {
  const promise = getPromise(action)

  if (!promise) return next(action)

  const { type, meta = {} } = action
  const except = false

  if (meta.loading !== false && !except) {
    // store.dispatch 는 미들웨어 한번더 실행하게 됨
    store.dispatch({
      type: SET_LOADING,
      payload: true
    })
  }

  promise
    .then(result => {
      if (meta.loading !== false && !except) {
        store.dispatch({
          type: SET_LOADING,
          payload: false
        })
      }

      store.dispatch({
        type,
        payload: result,
        meta
      })
    })

    .catch(error => {
      if (meta.loading !== false && !except) {
        store.dispatch({
          type: SET_LOADING,
          payload: false
        })
      }

      const status = !error.response ? -1 : error.response.status

      store.dispatch({
        type: SET_ERROR,
        payload: status
      })
    })

  return promise
}

export default noldamNetworkMiddleware
