import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouDevComponent } from './sou-dev.component';

describe('SouDevComponent', () => {
  let component: SouDevComponent;
  let fixture: ComponentFixture<SouDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
