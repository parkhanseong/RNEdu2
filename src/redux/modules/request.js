import { handleActions, createAction } from 'redux-actions'
import { Map, List, fromJS } from 'immutable'

export const SET_REQUEST_TICKET_INFO = 'request/SET_REQUEST_TICKET_INFO'
export const DELETE_REQUEST_TICKET_INFO = 'request/DELETE_REQUEST_TICKET_INFO'

export const setRequestTicketInfo = createAction(SET_REQUEST_TICKET_INFO)
export const deleteRequestTicketInfo = createAction(DELETE_REQUEST_TICKET_INFO)

const INITIAL_STATE = Map({
  pickTicket: '',
  mDayOfWeek: '',
  daysArr: '',
  fromDate: '',
  fromTime: '',
  toTime: ''
})

export default handleActions(
  {
    [SET_REQUEST_TICKET_INFO]: (state, action) => {
      return state.set('reqeustTicketInfo', fromJS(action.payload))
    },
    [DELETE_REQUEST_TICKET_INFO]: (state, action) => {
      return state.set('reqeustTicketInfo', undefined)
    }
  },
  INITIAL_STATE
)
