import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToolGridComponent } from './file-tool-grid.component';

describe('FileToolGridComponent', () => {
  let component: FileToolGridComponent;
  let fixture: ComponentFixture<FileToolGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileToolGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileToolGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
