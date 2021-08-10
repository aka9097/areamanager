import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletegenieComponent } from './admindeletegenie.component';

describe('AdmindeletegenieComponent', () => {
  let component: AdmindeletegenieComponent;
  let fixture: ComponentFixture<AdmindeletegenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeletegenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeletegenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
