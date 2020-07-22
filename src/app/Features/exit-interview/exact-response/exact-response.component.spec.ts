import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactResponseComponent } from './exact-response.component';

describe('ExactResponseComponent', () => {
  let component: ExactResponseComponent;
  let fixture: ComponentFixture<ExactResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExactResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
