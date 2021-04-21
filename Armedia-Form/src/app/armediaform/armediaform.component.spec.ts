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
  });
});
