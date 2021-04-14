import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-armediaform',
  templateUrl: './armediaform.component.html',
  styleUrls: ['./armediaform.component.css']
})
export class ArmediaformComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form  =  this.fb.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern("^(?=.{8,})(?=.*[a-z])(?=.*[@#$%^&+=]).*$"),Validators.minLength(8)]]
  });
  }

}
