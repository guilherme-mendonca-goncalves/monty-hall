import * as Style from './Door.style';

const Present = (props: any) => {
  const isSelected = props.selected ? true : false;

  return (
    <Style.Area>
      <Style.Frame selected={isSelected}>
        <Style.Door>
          <Style.Number selected={isSelected}>3</Style.Number>
          <Style.DoorHandle selected={isSelected}></Style.DoorHandle>
        </Style.Door>
      </Style.Frame>
      <Style.Floor></Style.Floor>
    </Style.Area>
  );
};

export default Present;
