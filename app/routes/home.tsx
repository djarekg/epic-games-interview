import { useState } from 'react';
import styles from './home.module.css';

export default function Home() {
  const [result, setResult] = useState('N/A');

  return (
    <div className={styles.container}>
      <span className={styles.result}>Result: {result}</span>
    </div>
  );
}
