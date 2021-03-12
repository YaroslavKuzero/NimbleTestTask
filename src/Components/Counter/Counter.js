import React from 'react';
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'
import styles from './Counter.module.css'

function Counter({ name, time = "0", id }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.counter}>
      <p className={styles.counterName}>{name}</p>
      <p className={styles.counterTime}>{time}</p>
      <div className={styles.buttonsContainer}>
        <button type='button' onClick={() => dispatch(actions.timerHandler())}>play/pause</button>
        <button type='button' title='delete' onClick={() => dispatch(actions.deleteCounter(id))}>delete</button>
      </div>
    </div >
  )
}

export default Counter;