export default class InputState{
  firstInputValue:number
  constructor(firstInputValueForm:number) {
    this.firstInputValue=firstInputValueForm
  }
  sendNumberInput(){
    return this.firstInputValue
  }
}
