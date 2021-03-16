import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import moment from 'moment';


const addCounter = createAction('counter/add', data => {
  if (data.length === 0) {
    data = moment().format("DD MM YYYY, HH:mm:ss:SS");
  }
  return {
    payload: {
      id: nanoid(10),
      name: data,
      time: 0,
    },
  }
})

const deleteCounter = createAction('counter/delete');
const updateCounter = createAction('counter/update')


export default { addCounter, deleteCounter, updateCounter }