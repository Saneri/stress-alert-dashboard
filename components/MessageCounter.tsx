import { Card } from 'antd';

type Props = {
  stressMessageAmount: number;
  totalMessageAmount: number;
};

const MessageCounter = (props: Props) => {
  const average = props.stressMessageAmount / props.totalMessageAmount;

  return (
    <Card>
      <div>amount: {props.stressMessageAmount}</div>
      <div>percentage: {average.toFixed(2)}</div>
    </Card>
  );
};

export default MessageCounter;
