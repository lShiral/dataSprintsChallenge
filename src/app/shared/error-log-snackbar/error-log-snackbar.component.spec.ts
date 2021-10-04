import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogSnackbarComponent } from './error-log-snackbar.component';

describe('ErrorLogSnackbarComponent', () => {
  let component: ErrorLogSnackbarComponent;
  let fixture: ComponentFixture<ErrorLogSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLogSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
