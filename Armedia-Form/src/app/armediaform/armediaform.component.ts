import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CheckMatch } from "./check-match";
import { HttpClient } from '@angular/common/http';

export interface FormData {
  emailAddress: string;
  subscriptionType: string;
}

// export interface WarningMessages {
//   warningMessage:string;
// }

@Component({
  selector: "app-armediaform",
  templateUrl: "./armediaform.component.html",
  styleUrls: ["./armediaform.component.css"],
})
export class ArmediaformComponent implements OnInit {
  form: FormGroup;
  subscriptionValues: any = ["Advanced","Basic", "Pro"];
  defaultValue: string = "Advanced";
  validationErrorMessages = [];
  ComparisonMessage: string = "Password and Retype Password must be same";
  check: boolean;
  formData: FormData[] = [];
  currentDate: Date;
  Messages: string[] = [];
  downloadForm:any[] = [];
  siteKey:string ="6LcEvLEaAAAAAA1nTVjfVeIYEiXzcX-Uw3vfYRQg";
  url ="https://www.google.com/recaptcha/api/siteverify";
  constructor(private fb: FormBuilder,private httpClient:HttpClient) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "^(?=.{8,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$"
            ),
            Validators.maxLength(8),
          ],
        ],
        retypePassword: ["", [Validators.required]],
        subscription: ["Advanced"],
        recaptcha: ['', Validators.required]
      },
      {
        validator: CheckMatch("password", "retypePassword"),
      }
    );
  }
  clearForm() {
    if (confirm("Are you sure to clear the form")) {
      this.form.reset();
    }
  }

  onSubmit(myForm: FormGroup) {
    this.Messages = [];
    if (myForm.valid) {
      var data = {
        emailAddress: myForm.controls["email"].value,
        subscriptionType: myForm.controls["subscription"].value,
      };
      this.currentDate = new Date();
      this.formData.push(data);
      myForm.value.subscriptionDate = this.currentDate .toLocaleDateString();
      this.downloadForm.push(myForm.value);
      this.downloadFile(this.downloadForm, this.currentDate);
    } else if ((myForm.invalid && myForm.touched) || myForm.untouched) {
      Object.keys(myForm.controls).forEach((key) => {
        if (myForm.controls[key].errors) {
          if (myForm.controls[key].errors.required) {
            this.Messages.push(key + " field is required.Please enter value");
          }
          if (
            myForm.controls[key].errors.maxlength ||
            myForm.controls[key].errors.pattern
          ) {
            this.Messages.push(
              key +
                " field must be 8 charcaters and contain atleast one character and one special character(@#$%^&+=)"
            );
          }
          if (myForm.controls[key].errors.compareValidator) {
            this.Messages.push("Password and Retype Password should be same");
          }
        }
      });
    }
  }

  downloadFile(updatedForm: any, jsondate: Date) {
    updatedForm.subscriptionDate = jsondate.toLocaleDateString();
    var theJSON = JSON.stringify(updatedForm);
    var uri =
      "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    var a = document.createElement("a");
    a.href = uri;
    a.download = "Armedia";
    a.click();
  }

  handleSuccess(token){
    // console.log(token);
    this.httpClient.post(this.url,{token:token}).subscribe(response => {
      console.log(response);
    })
  }
}
