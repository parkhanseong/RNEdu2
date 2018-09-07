import { createAction, handleActions } from 'redux-actions'
import { List, Map } from 'immutable'

export const SET_LOADING = 'base/SET_LOADING'
export const SET_ERROR = 'base/SET_ERROR'

export const setLoading = createAction(SET_LOADING)
export const setError = createAction(SET_ERROR)

const INITIAL_STATE = Map({
  status: 0,
  loading: false,
  count: 0
})

export default handleActions(
  {
    [SET_LOADING]: (state, action) => state.set('loading', action.payload),
    [SET_ERROR]: (state, action) => state.set('status', action.payload)
  },
  INITIAL_STATE
)
