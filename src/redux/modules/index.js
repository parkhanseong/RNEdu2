import { combineReducers } from 'redux'
import button from './button'
import sign from './sign'
import base from './base'
import member from './member'
import request from './request'

export default combineReducers({
  button,
  sign,
  base,
  member,
  request
})
