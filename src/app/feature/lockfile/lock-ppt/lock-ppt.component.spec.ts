import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockPptComponent } from './lock-ppt.component';

describe('LockPptComponent', () => {
  let component: LockPptComponent;
  let fixture: ComponentFixture<LockPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockPptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
