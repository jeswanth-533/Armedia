import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmediaformComponent } from './armediaform.component';

describe('ArmediaformComponent', () => {
  let component: ArmediaformComponent;
  let fixture: ComponentFixture<ArmediaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmediaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmediaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
