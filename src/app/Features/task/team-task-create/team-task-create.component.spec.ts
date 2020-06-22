import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTaskCreateComponent } from './team-task-create.component';

describe('TeamTaskCreateComponent', () => {
  let component: TeamTaskCreateComponent;
  let fixture: ComponentFixture<TeamTaskCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTaskCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
