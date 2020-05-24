import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightGlobalComponent } from './right-global.component';

describe('RightGlobalComponent', () => {
  let component: RightGlobalComponent;
  let fixture: ComponentFixture<RightGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
