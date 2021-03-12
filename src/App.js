import React from 'react'
import Input from './Components/Input';
import CounterList from './Components/CounterList';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <h1>tracker</h1>
      <Input />
      <CounterList />
    </div>
  );
}

export default App;
