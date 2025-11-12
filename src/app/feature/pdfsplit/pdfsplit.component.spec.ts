import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfsplitComponent } from './pdfsplit.component';

describe('PdfsplitComponent', () => {
  let component: PdfsplitComponent;
  let fixture: ComponentFixture<PdfsplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfsplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
