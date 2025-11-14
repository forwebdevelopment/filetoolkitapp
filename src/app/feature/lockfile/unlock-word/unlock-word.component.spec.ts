import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockWordComponent } from './unlock-word.component';

describe('UnlockWordComponent', () => {
  let component: UnlockWordComponent;
  let fixture: ComponentFixture<UnlockWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
