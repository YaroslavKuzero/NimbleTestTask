import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import moment from 'moment';
import actions from '../../redux/actions'
import styles from './Counter.module.css'

export default function Counter({ name, time = 0, id, isTimerActive = false }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(time);
  const [isActive, setIsActive] = useState(isTimerActive);

  useEffect(() => {
    let timerId;
    if (isActive) {
      timerId = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000)
    };
    return () => clearInterval(timerId)
  }, [isActive])

  const isActivehandler = () => {
    setIsActive(prev => !prev)
  }

  useEffect(() => {
    return () => dispatch(actions.updateCounter({ time: counter, name, isTimerActive: isActive, id }))
  })

  return (
    <div className={styles.counter}>
      <p className={styles.counterName}>{name}</p>
      <p className={styles.counterTime}>{counter}</p>
      <div className={styles.buttonsContainer}>
        <button type='button' onClick={() => isActivehandler()}>play/pause</button>
        <button type='button' title='delete' onClick={() => dispatch(actions.deleteCounter(id))}>delete</button>
      </div>
    </div >
  )
}