import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockWordComponent } from './lock-word.component';

describe('LockWordComponent', () => {
  let component: LockWordComponent;
  let fixture: ComponentFixture<LockWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
