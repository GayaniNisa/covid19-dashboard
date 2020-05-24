import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPcrComponent } from './right-pcr.component';

describe('RightPcrComponent', () => {
  let component: RightPcrComponent;
  let fixture: ComponentFixture<RightPcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
