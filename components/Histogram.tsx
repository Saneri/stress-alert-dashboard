import { Area } from '@ant-design/plots';
import { FC } from 'react';
import { StressValues } from '../types/stressValues';
import { groupBy, flatMap } from 'lodash';

type HistogramProps = {
  values: StressValues[];
  className?: string;
  channelName?: string;
};

export const getStressLevel = (v: StressValues): number => {
  return (v.stressValues.stressMessages / v.stressValues.messageCount) * 100;
};

const Histogram: FC<HistogramProps> = ({ values, className, channelName }) => {
  const data = flatMap(
    groupBy(
      channelName
        ? values.filter((v) => v.channelName === channelName)
        : values,
      'timestamp'
    ),
    (values) => {
      return {
        timestamp: values[0].timestamp,
        'Stress level': Number(
          (
            values.map(getStressLevel).reduce((a, b) => a + b, 0) /
            values.length
          ).toFixed()
        )
      };
    }
    // Take 200 first values
  ).slice(0, 200);
  const config = {
    data,
    xField: 'timestamp',
    yField: 'Stress level',
    xAxis: {
      range: [0, 1],
      tickCount: data.length
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2
      }
    },
    tooltip: {
      showMarkers: false
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red'
        }
      }
    }
  };
  return <Area className={className} {...config} />;
};

export default Histogram;
