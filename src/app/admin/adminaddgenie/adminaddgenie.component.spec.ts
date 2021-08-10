import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddgenieComponent } from './adminaddgenie.component';

describe('AdminaddgenieComponent', () => {
  let component: AdminaddgenieComponent;
  let fixture: ComponentFixture<AdminaddgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
