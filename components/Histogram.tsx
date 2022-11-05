import { Area } from '@ant-design/plots';
import { FC } from 'react';
import { StressValues } from '../types/stressValues';
import { groupBy, flatMap } from 'lodash';

type HistogramProps = {
  values: StressValues[];
  className?: string;
  channelName?: string;
};

const Histogram: FC<HistogramProps> = ({ values, className, channelName }) => {
  const getStressLevel = (v: StressValues): number => {
    return (v.stressValues.stressMessages / v.stressValues.messageCount) * 100;
  };

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
        stressValue: Number(
          (
            values.map(getStressLevel).reduce((a, b) => a + b, 0) /
            values.length
          ).toFixed(0)
        )
      };
    }
  );
  const config = {
    data,
    xField: 'timestamp',
    yField: 'stressValue',
    xAxis: {
      range: [0, 1],
      tickCount: 28
    },
    smooth: true,
    line: {
      color: 'transparent'
    },
    areaStyle: () => ({
      fill: 'l(270) 0:#33cc33 0.25:#33cc33 0.75:#ff0000 1:#ff0000'
    })
  };
  return <Area className={className} {...config} />;
};

export default Histogram;
