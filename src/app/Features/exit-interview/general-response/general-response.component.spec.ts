import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralResponseComponent } from './general-response.component';

describe('GeneralResponseComponent', () => {
  let component: GeneralResponseComponent;
  let fixture: ComponentFixture<GeneralResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
