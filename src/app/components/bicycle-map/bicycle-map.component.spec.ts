import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleMapComponent } from './bicycle-map.component';

describe('BicycleMapComponent', () => {
  let component: BicycleMapComponent;
  let fixture: ComponentFixture<BicycleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
