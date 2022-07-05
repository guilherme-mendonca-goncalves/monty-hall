class DoorModel {
  #number: number;
  #havePresent: boolean;
  #selected: boolean;
  #open: boolean;

  constructor (number: number, havePresent = false, selected = false, open = false) {
    this.#number = number;
    this.#havePresent = havePresent;
    this.#selected = selected;
    this.#open = open;
  }

  get number () {
    return this.#number;
  }
  get havePresent () {
    return this.#havePresent;
  }
  get selected () {
    return this.#selected;
  }
  get open () {
    return this.#open;
  }

  get close () {
    return !this.open;
  }

  unselected () {
    const isSelected = false;
    return new DoorModel (this.number, this.havePresent, isSelected, this.open);
  }

  toggleSelection () {
    const isSelected = !this.selected;
    return new DoorModel (this.number, this.havePresent, isSelected, this.open);
  }
  openDoor () {
    const isOpen = true;
    return new DoorModel (this.number, this.havePresent, this.selected, isOpen);
  }
}

export default DoorModel;
