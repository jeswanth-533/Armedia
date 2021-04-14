import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-armediaform",
  templateUrl: "./armediaform.component.html",
  styleUrls: ["./armediaform.component.css"],
})
export class ArmediaformComponent implements OnInit {
  form: FormGroup;
  subscriptionValues: any = ["Basic", "Advanced", "Pro"];
  defaultValue:string = "Advanced";
  validationErrorMessages = [];
  ComparisonMessage:string = "Password and Retype Password must be same";
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   this.initializeForm();
  }

  initializeForm(){
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$"),
          Validators.maxLength(8),
        ],
      ],
      retypePassword: ["", [Validators.required,this.compareInput]],
      subscription: ["Advanced"],
    });
  }
  clearForm() {
    this.form.reset();
  }

  compareInput(){
console.log("compare");
  }

  onSubmit(myForm:FormGroup){
    if(myForm.controls['password'].value !== myForm.controls['retypePassword'].value){
      this.validationErrorMessages.push(this.ComparisonMessage);
      console.log(this.validationErrorMessages);
    }
    if(myForm.valid){
      console.log("valid form")
    }
console.log(myForm);
  }
}
