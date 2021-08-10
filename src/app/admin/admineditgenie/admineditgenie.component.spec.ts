import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditgenieComponent } from './admineditgenie.component';

describe('AdmineditgenieComponent', () => {
  let component: AdmineditgenieComponent;
  let fixture: ComponentFixture<AdmineditgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
