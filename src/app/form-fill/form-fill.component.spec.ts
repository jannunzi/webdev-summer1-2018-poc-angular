import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillComponent } from './form-fill.component';

describe('FormFillComponent', () => {
  let component: FormFillComponent;
  let fixture: ComponentFixture<FormFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
