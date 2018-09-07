import { createAction, handleActions } from 'redux-actions'
import { List, Map } from 'immutable'

const SET_PROFILE = 'button/SET_PROFILE'

export const setProfile = createAction(SET_PROFILE)

export const setProfileAsync = ({ type, value }) => dispatch => {
  // 1초 뒤 액션 디스패치
  setTimeout(() => {
    dispatch(setProfile({ type, value }))
  }, 1000)
}

const INITIAL_STATE = {
  name: '',
  age: ''
}

export default handleActions(
  {
    [SET_PROFILE]: (state, { payload: { type, value } }) => {
      return { ...state, [type]: value }
      // return {[type]: value}
    }
    // imutable 활용
    // return state.set('name', '가나다');
    // return setIn["profile", type] profile 안에 type
  },
  INITIAL_STATE
)
