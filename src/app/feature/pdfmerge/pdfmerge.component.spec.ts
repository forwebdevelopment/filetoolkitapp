import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfmergeComponent } from './pdfmerge.component';

describe('PdfmergeComponent', () => {
  let component: PdfmergeComponent;
  let fixture: ComponentFixture<PdfmergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfmergeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
