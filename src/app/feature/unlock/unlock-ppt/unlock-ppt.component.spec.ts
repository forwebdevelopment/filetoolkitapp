import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockPptComponent } from './unlock-ppt.component';

describe('UnlockPptComponent', () => {
  let component: UnlockPptComponent;
  let fixture: ComponentFixture<UnlockPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockPptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
