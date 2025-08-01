import { getMoviesByTitle } from '@/api/apis.js';
import DataViewer from '@/components/data-viewer/data-viewer.js';
import { Suspense } from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div className={`${styles.loading} loading`}>Loading...</div>}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              loading="lazy"
              src="/public/ghost.svg"
              alt="Ghost"
            />
          </div>
          <div className={styles.dataViewer}>
            <DataViewer dataPromise={getMoviesByTitle('Inception')} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
