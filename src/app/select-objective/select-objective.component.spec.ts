import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectObjectiveComponent } from './select-objective.component';

describe('SelectObjectiveComponent', () => {
  let component: SelectObjectiveComponent;
  let fixture: ComponentFixture<SelectObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
