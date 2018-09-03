import { createAction, handleActions } from "redux-actions";
import { List, Map } from 'immutable';

const SET_PROFILE = "button/SET_PROFILE";

export const setProfile = createAction(SET_PROFILE);

const INITIAL_STATE = {
  name:'',
  age: '',
};

export default handleActions(
  { 
    [SET_PROFILE]: (state, { payload: { type, value } }) => {
        console.log(">>>>moudle type:" + [type]);
        console.log(">>>>module value:" + value);
        return {...state, [type]: value }
        //return {[type]: value}
    },
    //imutable 활용
    //return state.set('name', '가나다');
    //return setIn["profile", type] profile 안에 type 
  },
  INITIAL_STATE
);
