import { getGridDetails } from '@/api/apis.js';
import ForecastDetail from '@/components/forecast-detail/forecast-detail.js';
import { Suspense } from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div className={`${styles.loading} loading`}>Loading...</div>}>
        <div className={styles.content}>
          <div className={styles.dataViewer}>
            {/* <DataViewer dataPromise={getPlaces('DisneyLand')} /> */}
            {/* <DataViewer dataPromise={getPoints('44.326745,-72.73258')} /> */}
            {/* <DataViewer dataPromise={getGridDetails('BTV', '105,52')} /> */}
            <ForecastDetail dataPromise={getGridDetails('BTV', '105,52')} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
