import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctionButtonsComponent } from './selction-buttons.component';

describe('SelctionButtonsComponent', () => {
  let component: SelctionButtonsComponent;
  let fixture: ComponentFixture<SelctionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
