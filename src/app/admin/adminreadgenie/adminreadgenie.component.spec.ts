import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreadgenieComponent } from './adminreadgenie.component';

describe('AdminreadgenieComponent', () => {
  let component: AdminreadgenieComponent;
  let fixture: ComponentFixture<AdminreadgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreadgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreadgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
