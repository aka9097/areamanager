import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegenieComponent } from './deletegenie.component';

describe('DeletegenieComponent', () => {
  let component: DeletegenieComponent;
  let fixture: ComponentFixture<DeletegenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletegenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
