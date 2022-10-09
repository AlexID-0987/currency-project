import {FormControl, FormGroup, Validators} from "@angular/forms";


export default class ReactiveFormGroupCurrencyArea{
  formInputGroupCurrency = new FormGroup({
    firstInputPrevState: new FormControl(0, [Validators.required, Validators.minLength(1)]),

  })



}
