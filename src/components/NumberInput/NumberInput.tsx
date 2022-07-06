import * as Style from './NumberInput.style';

interface NumberInputProps {
  text: string,
  value: number,
  onChange: (newValue: number) => void
}

const NumberInput = (props: NumberInputProps) => {
  const subtract = () => {
    props.onChange(props.value - 1);
  };
  const add = () => {
    props.onChange(props.value + 1);
  };

  return (
    <Style.Container>
      <Style.Text>{props.text}</Style.Text>
      <Style.Value>{props.value}</Style.Value>
      <Style.DivButton>
        {props.value > 3 &&
          <Style.Button onClick={subtract}>- 1</Style.Button>
        }
        <Style.Button onClick={add}>+ 1</Style.Button>
      </Style.DivButton>
    </Style.Container>
  );
};

export default NumberInput;
