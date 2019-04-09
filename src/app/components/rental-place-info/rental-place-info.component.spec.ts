import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPlaceInfoComponent } from './rental-place-info.component';

describe('RentalPlaceInfoComponent', () => {
  let component: RentalPlaceInfoComponent;
  let fixture: ComponentFixture<RentalPlaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPlaceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPlaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
