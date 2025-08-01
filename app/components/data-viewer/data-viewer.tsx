import { use, type FC } from 'react';
import styles from './data-viewer.module.css';

type DataViewerProps = {
  dataPromise: Promise<any>;
};

export const DataViewer: FC<DataViewerProps> = ({ dataPromise }) => {
  const data = use(dataPromise);
  return <pre className={styles.result}>{JSON.stringify(data, null, 2)}</pre>;
};

export default DataViewer;
