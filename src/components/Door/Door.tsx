import DoorModel from '@src/model/DoorModel';
import Present from '../Present';
import * as Style from './Door.style';

interface DoorProps {
  value : DoorModel,
  onChange: (newDoor: DoorModel) => void
}

const Door = (props: DoorProps) => {
  const door = props.value;
  const isSelected = door.selected ? true : false;

  const toggleSelection = () => {
    props.onChange(door.toggleSelection());
  };

  const openDoor = (e: any) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  const renderDoor = () => {
    return (
      <Style.Door>
        <Style.Number selected={isSelected}>{door.number}</Style.Number>
        <Style.DoorHandle selected={isSelected} onClick={openDoor}></Style.DoorHandle>
      </Style.Door>
    );
  };

  return (
    <Style.Area onClick={toggleSelection}>
      <Style.Frame selected={isSelected}>
        {door.close ? renderDoor() :
          door.havePresent ? <Present /> :
          false
        }
      </Style.Frame>
      <Style.Floor></Style.Floor>
    </Style.Area>
  );
};

export default Door;
