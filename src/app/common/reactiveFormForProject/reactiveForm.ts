
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export default class ReactiveForm{
  firstInputFormControl:FormControl=new FormControl('',[Validators.required,Validators.minLength(1)])

}
