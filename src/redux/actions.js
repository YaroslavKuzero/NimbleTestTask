import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { DateTime } from "luxon";


const addCounter = createAction('counter/add', data => {
  if (data.length === 0) {
    data = DateTime.now().toFormat('dd LL yyyy HH:mm:ss:ms')
  }
  return {
    payload: {
      id: nanoid(10),
      name: data,
      time: { seconds: 0 },
      isTimerActive: true,
      snapShot: DateTime.now().toSeconds()
    },
  }
})

const deleteCounter = createAction('counter/delete');
const updateCounter = createAction('counter/update')


export { addCounter, deleteCounter, updateCounter }