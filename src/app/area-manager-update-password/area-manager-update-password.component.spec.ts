import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerUpdatePasswordComponent } from './area-manager-update-password.component';

describe('AreaManagerUpdatePasswordComponent', () => {
  let component: AreaManagerUpdatePasswordComponent;
  let fixture: ComponentFixture<AreaManagerUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerUpdatePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
