import DoorModel from '@src/model/DoorModel';

export const createDoor = (quantity: number, selected: number): DoorModel[] => {
  return (
    Array.from({length: quantity}, (_, i) => {
      const number: number = i + 1;
      const havePresent = number === selected;
      return new DoorModel(number, havePresent);
    })
  );
};

export const updateDoors = (doors: DoorModel[], changedDoor: DoorModel): DoorModel[] => {
  return doors.map(currentDoor => {
    const sameDoor = currentDoor.number === changedDoor.number;

    if (sameDoor) {
      return changedDoor;
    } else {
      return changedDoor.open ? currentDoor : currentDoor.unselected();
    }
  });
};
