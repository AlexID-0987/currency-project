export default class ProjectState{
  firstValueSelect:string=''
  secondValueSelect:string=''
  baseCurrency:string=''
  constructor(first:string,second:string,base:string) {
    this.firstValueSelect=first
    this.secondValueSelect=second
    this.baseCurrency=base
  }
  sendToStringFirstSelect(){
    return this.firstValueSelect
  }
  sendToStringSecondSelect(){
    return this.secondValueSelect
  }
  sendToStringBaseCurrency(){
    return this.baseCurrency
  }
}
