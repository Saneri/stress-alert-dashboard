import { Statistic } from 'antd';
import { StressValues } from '../types/stressValues';

type Props = {
  values: StressValues[];
};

const MessageCounter = (props: Props) => {
  const messageCount = props.values
    .map((value) => value.stressValues.messageCount)
    .reduce((a, b) => a + b, 0);
  const stressMessageCount = props.values
    .map((value) => value.stressValues.stressMessages)
    .reduce((a, b) => a + b, 0);
  const average = (stressMessageCount / messageCount) * 100;

  return (
    <div className="grid grid-cols-2 gap-6 mt-4 justify-items-center">
      <Statistic title="Total stressful messages" value={stressMessageCount} />
      <Statistic
        title="Percentage of stressful messages"
        value={average}
        precision={1}
        suffix="%"
      />
    </div>
  );
};

export default MessageCounter;
