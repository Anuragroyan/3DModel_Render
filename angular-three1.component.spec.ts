import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularThree1Component } from './angular-three1.component';

describe('AngularThree1Component', () => {
  let component: AngularThree1Component;
  let fixture: ComponentFixture<AngularThree1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularThree1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularThree1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
