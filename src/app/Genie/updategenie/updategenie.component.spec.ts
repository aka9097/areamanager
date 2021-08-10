import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategenieComponent } from './updategenie.component';

describe('UpdategenieComponent', () => {
  let component: UpdategenieComponent;
  let fixture: ComponentFixture<UpdategenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
