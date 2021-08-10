import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerAddGenieComponent } from './area-manager-add-genie.component';

describe('AreaManagerAddGenieComponent', () => {
  let component: AreaManagerAddGenieComponent;
  let fixture: ComponentFixture<AreaManagerAddGenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaManagerAddGenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerAddGenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
