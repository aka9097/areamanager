import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerUpdateGenieComponent } from './area-manager-update-genie.component';

describe('AreaManagerUpdateGenieComponent', () => {
  let component: AreaManagerUpdateGenieComponent;
  let fixture: ComponentFixture<AreaManagerUpdateGenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerUpdateGenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerUpdateGenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
