import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerListGenieComponent } from './area-manager-list-genie.component';

describe('AreaManagerListGenieComponent', () => {
  let component: AreaManagerListGenieComponent;
  let fixture: ComponentFixture<AreaManagerListGenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerListGenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerListGenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
