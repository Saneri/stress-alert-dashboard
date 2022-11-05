import { Column } from '@ant-design/plots';
import { FC } from 'react';
import { StressValues } from '../types/stressValues';

type HistogramProps = {
  values: StressValues[];
};

const Histogram: FC<HistogramProps> = ({ values }) => {
  const data = values.map((v) => ({
    timestamp: v.timestamp,
    stressValue:
      (v.stressValues.stressMessages / v.stressValues.messageCount) * 100
  }));
  const config = {
    data,
    xField: 'timestamp',
    yField: 'stressValue',
    xAxis: {
      label: {
        autoRotate: false
      }
    },
    slider: {
      start: 0.1,
      end: 0.2
    }
  };
  return <Column {...config} />;
};

export default Histogram;
