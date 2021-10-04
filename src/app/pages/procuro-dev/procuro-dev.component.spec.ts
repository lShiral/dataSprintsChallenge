import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuroDevComponent } from './procuro-dev.component';

describe('ProcuroDevComponent', () => {
  let component: ProcuroDevComponent;
  let fixture: ComponentFixture<ProcuroDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuroDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuroDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
