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
  const average = stressMessageCount / messageCount;
  return (
    <>
      <Statistic title="Total stressful messages" value={messageCount} />
      <Statistic
        title="Percentage of stressful messages"
        value={`${average.toFixed(2)}%`}
      />
    </>
  );
};

export default MessageCounter;
