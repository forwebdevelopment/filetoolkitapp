import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockUnlockfileComponent } from './lock-unlockfile.component';

describe('LockUnlockfileComponent', () => {
  let component: LockUnlockfileComponent;
  let fixture: ComponentFixture<LockUnlockfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockUnlockfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockUnlockfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
