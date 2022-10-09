import {FormControl, FormGroup, Validators} from "@angular/forms";

export default class ReactiveSecondFormGroupCurrencyArea{
  formSecondInputGroupCurrency = new FormGroup({
    secondInputPrevState: new FormControl(0, [Validators.required, Validators.minLength(1)]),

  })



}
