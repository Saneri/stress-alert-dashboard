type Props = {
  values: number[];
};

export const MessageCounter = (props: Props) => {
  const amountOfOnes = props.values.filter((x) => x === 1).length;
  const percentage = amountOfOnes / props.values.length;
  return (
    <>
      <div>amount: {amountOfOnes}</div>
      <div>percentage: {percentage.toFixed(2)}</div>
    </>
  );
};
