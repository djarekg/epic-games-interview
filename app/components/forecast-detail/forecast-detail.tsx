import type { GridDetails } from '@/api/apis.js';
import { use, type FC } from 'react';
import styles from './forecast-detail.module.css';

type DataViewerProps = {
  dataPromise: Promise<GridDetails>;
};

const Card = ({
  name,
  temperature,
  temperatureUnit,
  icon,
}: {
  name: string;
  temperature: number;
  temperatureUnit: string;
  icon: string;
}) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>
        {temperature} {temperatureUnit}
      </p>
      <img
        src={icon}
        alt={name}
      />
    </div>
  );
};

const ForecastDetail: FC<DataViewerProps> = ({ dataPromise }) => {
  const { properties } = use(dataPromise);
  const { periods } = properties;
  const period = periods[0]; // Example: using the first period for display
  return (
    <div className="forecast-detail">
      <Card
        name={period.name}
        key={period.name}
        temperature={period.temperature}
        temperatureUnit={period.temperatureUnit}
        icon={period.icon}
      />
      {/* {periods.map(period => (
        <Card
          name={period.name}
          key={period.name}
          temperature={period.temperature}
          temperatureUnit={period.temperatureUnit}
          icon={period.icon}
        />
      ))} */}
    </div>
  );
};

export default ForecastDetail;
