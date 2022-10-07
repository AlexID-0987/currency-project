import {FormControl, Validators} from "@angular/forms";

export default class SecondReactiveControl{
  secondInputFormControls:FormControl=new FormControl('',[Validators.required,Validators.minLength(2)])
}
