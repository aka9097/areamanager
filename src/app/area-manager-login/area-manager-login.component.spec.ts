import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerLoginComponent } from './area-manager-login.component';

describe('AreaManagerLoginComponent', () => {
  let component: AreaManagerLoginComponent;
  let fixture: ComponentFixture<AreaManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
