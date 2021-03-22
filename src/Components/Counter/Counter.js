import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCounter, updateCounter, } from '../../redux/actions';
import { DateTime, Duration } from 'luxon'
import styles from './Counter.module.css';

export default function Counter({ item: { id, name, time, isTimerActive, snapShot } }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(time);
  const [isActive, setIsActive] = useState(isTimerActive);
  const [snapShotTik, setSnapshotTik] = useState(snapShot);

  useEffect(() => {
    const now = DateTime.now().toSeconds();
    if (isActive) {
      setCounter({ seconds: Math.ceil(now - snapShotTik + time.seconds) })
    }
  }, [])

  useEffect(() => {
    let timerId;
    dispatch(updateCounter({ id, name, time: counter, isTimerActive: isActive, snapShot: snapShotTik }))
    if (isActive) {
      timerId = setInterval(() => {
        setCounter(prev => { return { seconds: prev.seconds + 1 } }
        );
        setSnapshotTik(DateTime.now().toSeconds());
      }, 1000)
    };
    return () => clearInterval(timerId)
  }, [id, name, counter, isActive, snapShotTik, dispatch])

  const isActivehandler = () => {
    setIsActive(prev => !prev);
  }


  return (
    <div className={isActive ? styles.counter + " " + styles.active : styles.counter}>
      <p className={styles.counterName}>{name}</p>
      <p className={styles.counterTime}>{Duration.fromObject(counter).toISOTime({ suppressMilliseconds: true })}</p>
      <div className={styles.buttonsContainer}>
        <button className={isActive ? styles.button + " " + styles.pause : styles.button + " " + styles.play} type='button' onClick={() => isActivehandler()}></button>
        <button className={styles.delete + " " + styles.button} type='button' title='delete' onClick={() => dispatch(deleteCounter(id))}></button>
      </div>
    </div >
  )
}