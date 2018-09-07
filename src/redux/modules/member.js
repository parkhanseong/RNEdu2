import { createAction, handleActions } from 'redux-actions'
import { List, Map, fromJS } from 'immutable'
import * as MemberActions from '../../lib/api/member'

const FETCH_MEMBERS = 'base/FETCH_MEMBERS'

export const fetchMembers = createAction(
  FETCH_MEMBERS,
  MemberActions.getMembers
)

const INITIAL_STATE = Map({
  members: List([])
})

export default handleActions(
  {
    [FETCH_MEMBERS]: (state, action) =>
      state.set('members', fromJS(action.payload.data))
  },
  INITIAL_STATE
)
