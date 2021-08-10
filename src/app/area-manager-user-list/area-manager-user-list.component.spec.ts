import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerUserListComponent } from './area-manager-user-list.component';

describe('AreaManagerUserListComponent', () => {
  let component: AreaManagerUserListComponent;
  let fixture: ComponentFixture<AreaManagerUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
