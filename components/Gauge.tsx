import { FC } from 'react';
import { Gauge, GaugeConfig } from '@ant-design/plots';
import { StressValues } from '../types/stressValues';
import { groupBy, last } from 'lodash';
import { getStressLevel } from './Histogram';

type GaugeProps = {
  values: StressValues[];
  className?: string;
};

const GaugeChart: FC<GaugeProps> = ({ values, className }) => {
  const group = groupBy(values, 'timestamp');
  const lastValues = last(Object.values(group));
  const percent = lastValues
    ? Number(
        (
          lastValues.map(getStressLevel).reduce((a, b) => a + b, 0) /
          lastValues.length /
          100
        ).toFixed(2)
      )
    : 0;
  const config: GaugeConfig = {
    percent,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#58c499', '#FAAD14', '#F4664A']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        }
      },
      subTickLine: {
        count: 3
      }
    },
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E'
        },
        formatter: ({ percent }: any) => `${Number(percent) * 100}%`
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E'
        },
        formatter: () => 'Current stress level'
      }
    }
  };
  return <Gauge className={className} {...config} />;
};

export default GaugeChart;
