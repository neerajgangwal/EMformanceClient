import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateSkillComponent } from './evaluate-skill.component';

describe('EvaluateSkillComponent', () => {
  let component: EvaluateSkillComponent;
  let fixture: ComponentFixture<EvaluateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
