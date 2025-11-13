import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockPdfComponent } from './lock-pdf.component';

describe('LockPdfComponent', () => {
  let component: LockPdfComponent;
  let fixture: ComponentFixture<LockPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
