import { Column } from '@ant-design/plots';

type Props = {};

type ColumnDataPoint = {
  timestamp: string;
  stressMessageAmount: number;
};

const Histogram = (props: Props) => {
  const data: ColumnDataPoint[] = [
    {
      timestamp: '1',
      stressMessageAmount: 3
    },
    {
      timestamp: '2',
      stressMessageAmount: 16
    },
    {
      timestamp: '3',
      stressMessageAmount: 4
    },
    {
      timestamp: '4',
      stressMessageAmount: 8
    },
    {
      timestamp: '5',
      stressMessageAmount: 3
    },
    {
      timestamp: '7',
      stressMessageAmount: 16
    },
    {
      timestamp: '9',
      stressMessageAmount: 4
    },
    {
      timestamp: '10',
      stressMessageAmount: 0
    },
    {
      timestamp: '11',
      stressMessageAmount: 0
    },
    {
      timestamp: '12',
      stressMessageAmount: 0
    },
    {
      timestamp: '13',
      stressMessageAmount: 0
    },
    {
      timestamp: '16',
      stressMessageAmount: 8
    }
  ];

  const config = {
    data,
    xField: 'timestamp',
    yField: 'stressMessageAmount',
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
