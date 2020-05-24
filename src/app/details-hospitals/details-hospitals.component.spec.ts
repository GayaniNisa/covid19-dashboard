import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHospitalsComponent } from './details-hospitals.component';

describe('DetailsHospitalsComponent', () => {
  let component: DetailsHospitalsComponent;
  let fixture: ComponentFixture<DetailsHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
