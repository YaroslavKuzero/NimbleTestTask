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
      time: moment('0').format("HH:mm:ss"),
    },
  }
})

const deleteCounter = createAction('counter/delete');


export default { addCounter, deleteCounter }