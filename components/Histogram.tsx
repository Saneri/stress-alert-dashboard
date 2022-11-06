import { Column } from '@ant-design/plots';
import { FC } from 'react';
import { StressValues } from '../types/stressValues';
import { orderBy } from 'lodash';

type HistogramProps = {
  values: StressValues[];
  className?: string;
};

export const getStressLevel = (v: StressValues): number => {
  return (v.stressValues.stressMessages / v.stressValues.messageCount) * 100;
};

const Histogram: FC<HistogramProps> = ({ values, className }) => {
  const data = orderBy(
    values.map(({ channelName, timestamp, stressValues }) => ({
      channelName,
      timestamp,
      'Stress level': Number(
        (
          (stressValues.stressMessages / stressValues.messageCount) *
          100
        ).toFixed()
      )
    })),
    ['timestamp', 'channelName']
  );

  const config = {
    data,
    isStack: true,
    xField: 'timestamp',
    yField: 'Stress level',
    seriesField: 'channelName'
  };
  return <Column className={className} {...config} />;
};

export default Histogram;
