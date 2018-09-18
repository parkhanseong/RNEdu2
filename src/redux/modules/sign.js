import { createAction, handleActions } from 'redux-actions'
import { List, Map, fromJS } from 'immutable'
import * as RegisterAPI from '../../lib/api/register'
import { removeDash } from '../../lib/formatUtil'

const SET_SIGN = 'sign/SET_SIGN'

export const setSign = createAction(SET_SIGN)

const INITIAL_STATE = Map({
  name: Map({
    value: '',
    isValid: null
  }),
  phone: Map({
    value: '',
    isValid: null
  }),
  pwd: Map({
    value: '',
    isValid: null
  }),
  pwdConfirm: Map({
    value: '',
    isValid: null
  })
})

export default handleActions(
  {
    [SET_SIGN]: (state, { payload: data }) => {
      const { type } = data

      if (type === 'phone') {
        data.value = removeDash(data.value)
      }

      return state.set(type, fromJS(data))
    }
  },
  INITIAL_STATE
)
