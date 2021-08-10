import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgenieComponent } from './addgenie.component';

describe('AddgenieComponent', () => {
  let component: AddgenieComponent;
  let fixture: ComponentFixture<AddgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
