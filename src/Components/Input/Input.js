import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addCounter } from '../../redux/actions';
import styles from './Input.module.css'


export default function TrackerNameInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const changeHandler = useCallback((event) => {
    setName(event.currentTarget.value)
  }, [])

  const addCounterHandler = useCallback((event) => {
    event.preventDefault();
    dispatch(addCounter(name));
    setName('')
  }, [dispatch, name]);

  return (
    <form className={styles.form} onSubmit={addCounterHandler}>
      <input className={styles.input} type="text" placeholder="Enter tracker name" name='name' value={name}
        onChange={changeHandler}></input>
      <button className={styles.button} type="submit">GO</button>
    </form>
  )
}