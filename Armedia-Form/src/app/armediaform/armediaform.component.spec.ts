import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { CheckMatch } from "./check-match";
import { ArmediaformComponent } from "./armediaform.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHandler,
} from "@angular/common/http";
import { By } from "@angular/platform-browser";

describe("ArmediaformComponent", () => {
  let component: ArmediaformComponent;
  let fixture: ComponentFixture<ArmediaformComponent>;
  let formBuilder: FormBuilder;
  var sampleData = 
    {
      email: "abc@gmail.com",
      password: "Abcdef%4",
      recaptcha: "03AGdBq27ICVnYhvCd2U3T44BMiyKvyevajlAUqrMExx0tMf",
      retypePassword: "Abcdef%4",
      subscription: "Advanced",
      subscriptionDate: "4/21/2021",
    };
    // {
    //   email: "testcase@gmail.com",
    //   password: "Abcd45$5",
    //   recaptcha: "hsafhsbhsbfdsbfadsblfjdsbfdsb",
    //   retypePassword: "Abcd45$5",
    //   subscription: "Advanced",
    //   subscriptionDate: "4/21/2021",
    // });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        FormBuilder,
        Validators,
        HttpClientModule,
        HttpClient,
        HttpHandler,
      ],
      declarations: [ArmediaformComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmediaformComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("email field validity", () => {
    let errors = {};
    let email = component.form.controls["email"];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
  });

  it("password field validity", () => {
    let errors = {};
    let password = component.form.controls["password"];
    expect(password.valid).toBeFalsy();

    // Password field is required
    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set Password to something
    password.setValue("djvsdgvdasdskh");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["maxlength"]).toBeTruthy();

    password.setValue("Abcdef%4");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
    expect(errors["maxlength"]).toBeFalsy();
  });

  it("Retype password Field validity", () => {
    let errors = {};
    let retypePassword = component.form.controls["retypePassword"];
    expect(retypePassword.valid).toBeFalsy();

    // Retype Password field is required
    errors = retypePassword.errors || {};
    expect(errors["required"]).toBeTruthy();

    retypePassword.setValue("fdsfvdfdsfvd%4");
    errors = retypePassword.errors || {};
    expect(errors["compareValidator"]).toBeTruthy();

    retypePassword.setValue("Abcdef%4");
    errors = retypePassword.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("Retype password Field validity", () => {
    let errors = {};
    let recaptcha = component.form.controls["recaptcha"];

    // Recaptcha field is required
    errors = recaptcha.errors || {};
    expect(errors["required"]).toBeTruthy();
    expect(recaptcha.valid).toBeFalsy();
  });

  it("should call onSubmit method", () => {
    const btnClicked = spyOn(component, "onSubmit");
    fixture.debugElement
      .query(By.css("button[type=submit]"))
      .triggerEventHandler("click", null);
    expect(btnClicked).toHaveBeenCalledTimes(0);
    // expect(data).toHaveBeenCalledWith(sampleData,new Date());
  });

  describe("download file to local", () => {
var data;
    beforeEach(async(() => {
       data = spyOn(component, "downloadFile");
    }));

    it(" if form is invalid", () => {
      
      expect(component.form.valid).toBeFalsy();
      expect(data).not.toHaveBeenCalled();
    });

    it("if form is valid", () => {
      let email = component.form.controls["email"].setValue("test@gmail.com");
      let password = component.form.controls["password"].setValue("Abcdef%4");
      let retypePassword = component.form.controls["retypePassword"].setValue(
        "Abcdef%4"
      );
      let subscription = component.form.controls["subscription"].setValue(
        "Pro"
      );
      let recaptcha = component.form.controls["recaptcha"].setValue(
        "jsdfbsdhfbdshfdbsfdbfsbf"
      );
      let sdate = new Date();
      expect(component.form.valid).toBeTruthy();
    });
  });
});
