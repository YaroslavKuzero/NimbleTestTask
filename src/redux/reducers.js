import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addCounter, deleteCounter, updateCounter } from "./actions";

const counters = createReducer([], {
  [addCounter]: (state, { payload }) => [payload, ...state],
  [deleteCounter]: (state, { payload }) => state.filter(item => item.id !== payload),
  [updateCounter]: (state, { payload }) => state.map(item => {
    if (item.id === payload.id) {
      item = { ...payload }
    }
    return item;
  })
})


export default combineReducers({ counters });
