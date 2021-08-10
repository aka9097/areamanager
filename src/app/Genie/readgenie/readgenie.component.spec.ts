import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadgenieComponent } from './readgenie.component';

describe('ReadgenieComponent', () => {
  let component: ReadgenieComponent;
  let fixture: ComponentFixture<ReadgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
