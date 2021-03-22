import React from 'react';
import { useSelector } from 'react-redux'
import Counter from '../Counter';

import styles from './CounterList.module.css';


export default function CounterList() {
  const counters = useSelector(state => state.counters)

  return (
    <ul className={styles.counterList}>
      {counters.map(item => (<li key={item.id}><Counter item={item} />
      </li>))}
    </ul>
  )
}