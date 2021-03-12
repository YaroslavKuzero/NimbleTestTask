import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from "./actions";

const counters = createReducer([], {
  [actions.addCounter]: (state, { payload }) => [payload, ...state],
  [actions.deleteCounter]: (state, { payload }) => state.filter(item => item.id !== payload,)
})


export default combineReducers({ counters });
