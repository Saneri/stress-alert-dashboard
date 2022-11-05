import { FC } from 'react';
import { Pie, G2, PieConfig } from '@ant-design/plots';
import { StressValues } from '../types/stressValues';
import { groupBy, flatMap } from 'lodash';

type PieChartProps = {
  values: StressValues[];
  className?: string;
};

const PieChart: FC<PieChartProps> = ({ values }) => {
  const G = G2.getEngine('canvas');
  const data = flatMap(groupBy(values, 'channelName'), (values) => {
    const channelName = values[0].channelName;
    return {
      type: channelName,
      value: values
        .map((value) => value.stressValues.stressMessages)
        .reduce((a, b) => a + b, 0)
    };
  });

  const cfg: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    legend: false,
    label: {
      type: 'spider',
      labelHeight: 40,
      formatter: (data: any, mappingData: any) => {
        const group = new G.Group({});
        group.addShape({
          type: 'circle',
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color
          }
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color
          }
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value} messages /  ${(data.percent * 100).toFixed(
              0
            )}%`,
            fill: 'rgba(0, 0, 0, 0.65)',
            fontWeight: 700
          }
        });
        return group;
      }
    },
    interactions: [
      {
        type: 'element-selected'
      },
      {
        type: 'element-active'
      }
    ]
  };
  const config = cfg;
  return <Pie {...config} />;
};
export default PieChart;
