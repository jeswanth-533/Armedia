import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckMatch } from "./check-match";
import { ArmediaformComponent } from "./armediaform.component";

fdescribe("ArmediaformComponent", () => {
  let component: ArmediaformComponent;
  let fixture: ComponentFixture<ArmediaformComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, FormGroup, Validators],
      declarations: [ArmediaformComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmediaformComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    debugger;
    expect(component).toBeTruthy();
  });

  // it("form invalid when empty", () => {
  //   expect(component.initializeForm).toHaveBeenCalled();
  //   expect(component.form.valid).toBeFalsy();
  // });

  // it("email field validity", () => {
  //   let errors = {};
  //   let email = component.form.controls["email"];
  //   expect(email.valid).toBeFalsy();

  //   // Email field is required
  //   errors = email.errors || {};
  //   expect(errors["required"]).toBeTruthy();

  //   // Set email to something
  //   email.setValue("test");
  //   errors = email.errors || {};
  //   expect(errors["required"]).toBeFalsy();

  //   // Set email to something correct
  //   email.setValue("test@example.com");
  //   errors = email.errors || {};
  //   expect(errors["required"]).toBeFalsy();
  //   expect(errors["pattern"]).toBeFalsy();
  // });
});
