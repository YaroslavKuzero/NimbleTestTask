import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import counterAction from '../../redux/actions';


export default function TrackerNameInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const changeHandler = useCallback((event) => {
    setName(event.currentTarget.value)
  }, [])

  const addCounterHandler = useCallback((event) => {
    event.preventDefault();
    dispatch(counterAction.addCounter(name));
    setName('')
  }, [dispatch, name]);

  return (
    <form onSubmit={addCounterHandler}>
      <input type="text" placeholder="Enter tracker name" name='name' value={name}
        onChange={changeHandler}></input>
      <button type="submit">Submit</button>
    </form>
  )
}